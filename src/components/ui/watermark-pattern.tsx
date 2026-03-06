import patternIconUp from "@/assets/pattern-icon-up.png";
import patternIconDown from "@/assets/pattern-icon-down.png";

interface WatermarkPatternProps {
  className?: string;
}

export const WatermarkPattern = ({ className = "" }: WatermarkPatternProps) => {
  const iconSize = 60;
  const horizontalGap = -15;
  const verticalGap = -20;
  
  // Gerar grid de ícones
  const rows = [];
  const iconsPerRow = 40;
  const numberOfRows = 18;
  
  for (let row = 0; row < numberOfRows; row++) {
    const isEvenRow = row % 2 === 0;
    const icons = [];
    
    for (let col = 0; col < iconsPerRow; col++) {
      const isUp = col % 2 === 0;
      icons.push(
        <div
          key={`${row}-${col}`}
          className="flex-shrink-0"
          style={{
            width: iconSize,
            height: iconSize,
            marginRight: horizontalGap,
            backgroundImage: `url(${isUp ? patternIconUp : patternIconDown})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.12,
            filter: 'brightness(0) invert(1)',
          }}
        />
      );
    }
    
    rows.push(
      <div
        key={row}
        className="flex"
        style={{
          marginLeft: isEvenRow ? 0 : -(iconSize / 2),
          marginTop: row === 0 ? 0 : verticalGap,
        }}
      >
        {icons}
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div 
        className="absolute flex flex-col"
        style={{ 
          top: '-30px',
          left: '-30px',
          right: '-30px',
          bottom: '-30px',
        }}
      >
        {rows}
      </div>
    </div>
  );
};
