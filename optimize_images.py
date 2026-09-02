#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
OTIMIZADOR DE IMAGENS E VÍDEOS — UNIDENTAL
- Converte imagens JPG/PNG para WebP (qualidade 90)
- Redimensiona para no máximo 2100x600 (banners)
- Otimiza vídeos MP4 com ffmpeg (CRF 23, preset slow)
- Atualiza referências nos arquivos .tsx, .ts, .html, .css, .js
"""

from pathlib import Path
from PIL import Image
import subprocess
import os
import sys

# =========================================================
# CONFIGURAÇÕES
# =========================================================

PROJECT_DIR = Path(__file__).resolve().parent
ASSETS_DIR = PROJECT_DIR / "src" / "assets"

# Qualidade da imagem WebP (0-100) - 90 é excelente
QUALITY = 90

# Tamanho máximo para imagens (banners 2100x600)
MAX_WIDTH = 2100
MAX_HEIGHT = 600

# Extensões suportadas para conversão
SUPPORTED_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png"
}

# Extensões de arquivos que terão referências atualizadas
TEXT_EXTENSIONS = {
    ".tsx",
    ".ts",
    ".html",
    ".css",
    ".js"
}

# =========================================================
# FORMATAÇÃO DE TAMANHO
# =========================================================

def format_size(size_bytes):
    if size_bytes < 1024:
        return f"{size_bytes} B"
    if size_bytes < 1024 ** 2:
        return f"{size_bytes / 1024:.1f} KB"
    return f"{size_bytes / (1024 ** 2):.2f} MB"


# =========================================================
# REDIMENSIONAMENTO DE IMAGENS
# =========================================================

def resize_if_needed(image):
    width, height = image.size

    ratio = min(
        MAX_WIDTH / width,
        MAX_HEIGHT / height,
        1
    )

    if ratio >= 1:
        return image

    new_width = round(width * ratio)
    new_height = round(height * ratio)

    return image.resize(
        (new_width, new_height),
        Image.Resampling.LANCZOS
    )


# =========================================================
# CONVERSÃO DE IMAGENS PARA WEBP
# =========================================================

def convert_image(image_path):
    webp_path = image_path.with_suffix(".webp")
    original_size = image_path.stat().st_size

    try:
        with Image.open(image_path) as image:

            # Corrige orientação de fotos de celular
            try:
                from PIL import ImageOps
                image = ImageOps.exif_transpose(image)
            except Exception:
                pass

            image = resize_if_needed(image)

            # Mantém transparência quando houver
            if image.mode in ("RGBA", "LA"):
                converted = image.convert("RGBA")
            else:
                converted = image.convert("RGB")

            converted.save(
                webp_path,
                "WEBP",
                quality=QUALITY,
                method=6
            )

        new_size = webp_path.stat().st_size

        return {
            "original": image_path,
            "webp": webp_path,
            "original_size": original_size,
            "new_size": new_size
        }

    except Exception as error:
        print(f"[ERRO] {image_path.name}: {error}")
        return None


# =========================================================
# OTIMIZAÇÃO DE VÍDEOS MP4
# =========================================================

def optimize_video(video_path):
    """Otimiza vídeo MP4 com ffmpeg (CRF 23, preset slow)"""
    
    if video_path.suffix.lower() != ".mp4":
        return None

    # Nome do arquivo otimizado
    output_path = video_path.parent / f"{video_path.stem}_otimizado.mp4"
    original_size = video_path.stat().st_size

    try:
        cmd = [
            "ffmpeg",
            "-i", str(video_path),
            "-c:v", "libx264",
            "-crf", "23",
            "-preset", "slow",
            "-c:a", "aac",
            "-b:a", "128k",
            "-movflags", "+faststart",
            "-y",
            str(output_path)
        ]

        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True
        )

        if result.returncode != 0:
            print(f"[ERRO ffmpeg] {video_path.name}: {result.stderr[:200]}")
            return None

        if output_path.exists():
            new_size = output_path.stat().st_size
            return {
                "original": video_path,
                "otimizado": output_path,
                "original_size": original_size,
                "new_size": new_size
            }

        return None

    except FileNotFoundError:
        print("[ERRO] ffmpeg não encontrado. Instale o ffmpeg para otimizar vídeos.")
        return None
    except Exception as error:
        print(f"[ERRO] {video_path.name}: {error}")
        return None


# =========================================================
# ATUALIZA REFERÊNCIAS NO CÓDIGO
# =========================================================

def update_code_references(conversions, video_conversions):
    
    replacements = {}

    # Imagens
    for conv in conversions:
        original = conv["original"]
        webp = conv["webp"]
        
        original_rel = original.relative_to(PROJECT_DIR).as_posix()
        webp_rel = webp.relative_to(PROJECT_DIR).as_posix()
        
        replacements[original_rel] = webp_rel
        replacements[f"./{original_rel}"] = f"./{webp_rel}"

    # Vídeos
    for conv in video_conversions:
        original = conv["original"]
        otimizado = conv["otimizado"]
        
        original_rel = original.relative_to(PROJECT_DIR).as_posix()
        otimizado_rel = otimizado.relative_to(PROJECT_DIR).as_posix()
        
        replacements[original_rel] = otimizado_rel
        replacements[f"./{original_rel}"] = f"./{otimizado_rel}"

    changed_files = []

    for file_path in PROJECT_DIR.rglob("*"):
        if not file_path.is_file():
            continue
        if file_path.suffix.lower() not in TEXT_EXTENSIONS:
            continue
        if file_path.name == Path(__file__).name:
            continue

        try:
            original_text = file_path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue

        updated_text = original_text

        for old, new in sorted(replacements.items(), key=lambda item: len(item[0]), reverse=True):
            updated_text = updated_text.replace(old, new)

        if updated_text != original_text:
            file_path.write_text(updated_text, encoding="utf-8")
            changed_files.append(file_path)

    return changed_files


# =========================================================
# EXECUÇÃO PRINCIPAL
# =========================================================

def main():
    print("")
    print("=" * 70)
    print("OTIMIZADOR DE IMAGENS E VÍDEOS — UNIDENTAL")
    print("=" * 70)
    print("")

    # Verifica se a pasta assets existe
    if not ASSETS_DIR.exists():
        print(f"[ERRO] A pasta assets não foi encontrada: {ASSETS_DIR}")
        return

    # ==========================================
    # 1. IMAGENS
    # ==========================================
    
    image_files = [
        file for file in ASSETS_DIR.rglob("*")
        if file.is_file() and file.suffix.lower() in SUPPORTED_EXTENSIONS
    ]

    if image_files:
        print(f"[IMAGENS] {len(image_files)} imagens encontradas.\n")
        
        conversions = []
        total_original = 0
        total_webp = 0

        for index, image_path in enumerate(image_files, start=1):
            print(f"[{index}/{len(image_files)}] {image_path.relative_to(PROJECT_DIR)}")
            
            result = convert_image(image_path)
            if result is None:
                continue

            conversions.append(result)
            total_original += result["original_size"]
            total_webp += result["new_size"]

            reduction = (1 - (result["new_size"] / result["original_size"])) * 100
            print(f"    {format_size(result['original_size'])} → {format_size(result['new_size'])} | -{reduction:.1f}%")

        print("\n[IMAGENS] Resumo:")
        print(f"    Antes: {format_size(total_original)}")
        print(f"    Depois: {format_size(total_webp)}")
        if total_original > 0:
            saved = (1 - (total_webp / total_original)) * 100
            print(f"    Economia: {saved:.1f}%")
    else:
        print("[IMAGENS] Nenhuma imagem JPG, JPEG ou PNG encontrada.")
        conversions = []

    # ==========================================
    # 2. VÍDEOS
    # ==========================================
    
    video_files = [
        file for file in ASSETS_DIR.rglob("*.mp4")
        if file.is_file() and "_otimizado" not in file.stem
    ]

    video_conversions = []

    if video_files:
        print(f"\n[VÍDEOS] {len(video_files)} vídeos MP4 encontrados.\n")
        
        total_original_video = 0
        total_otimizado_video = 0

        for index, video_path in enumerate(video_files, start=1):
            print(f"[{index}/{len(video_files)}] {video_path.relative_to(PROJECT_DIR)}")
            
            result = optimize_video(video_path)
            if result is None:
                continue

            video_conversions.append(result)
            total_original_video += result["original_size"]
            total_otimizado_video += result["new_size"]

            reduction = (1 - (result["new_size"] / result["original_size"])) * 100
            print(f"    {format_size(result['original_size'])} → {format_size(result['new_size'])} | -{reduction:.1f}%")

        if video_conversions:
            print("\n[VÍDEOS] Resumo:")
            print(f"    Antes: {format_size(total_original_video)}")
            print(f"    Depois: {format_size(total_otimizado_video)}")
            if total_original_video > 0:
                saved = (1 - (total_otimizado_video / total_original_video)) * 100
                print(f"    Economia: {saved:.1f}%")
    else:
        print("\n[VÍDEOS] Nenhum vídeo MP4 encontrado.")

    # ==========================================
    # 3. ATUALIZAR REFERÊNCIAS
    # ==========================================
    
    if conversions or video_conversions:
        print("\n" + "=" * 70)
        print("ATUALIZANDO REFERÊNCIAS NO CÓDIGO")
        print("=" * 70)

        changed_files = update_code_references(conversions, video_conversions)
        
        for changed_file in changed_files:
            print(f"[ATUALIZADO] {changed_file.relative_to(PROJECT_DIR)}")

        if not changed_files:
            print("Nenhuma referência precisou ser atualizada.")

    # ==========================================
    # 4. FINAL
    # ==========================================
    
    print("\n" + "=" * 70)
    print("CONCLUSÃO")
    print("=" * 70)
    
    if conversions:
        print("✅ Imagens otimizadas para WebP (qualidade 90)")
    if video_conversions:
        print("✅ Vídeos otimizados com ffmpeg (CRF 23)")
    if not conversions and not video_conversions:
        print("ℹ️ Nenhum arquivo para otimizar.")

    print("\nIMPORTANTE:")
    print("  - Os arquivos originais NÃO foram apagados.")
    print("  - Teste o site antes de removê-los.")
    print("  - Para remover os originais, verifique manualmente.\n")
    print("Conversão concluída!")


if __name__ == "__main__":
    main()