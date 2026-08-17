import React from "react";

interface ShapeGridProps {
  speed?: number;
  squareSize?: number;
  direction?: "diagonal" | "up" | "down" | "left" | "right";
  borderColor?: string;
  hoverFillColor?: string;
  hoverTrailAmount?: number;
  shape?: "square" | "circle";
}

const ShapeGrid: React.FC<ShapeGridProps> = ({
  speed = 0.5,
  squareSize = 40,
  direction = "diagonal",
  borderColor = "#FACC15",
  hoverFillColor = "#222222",
  hoverTrailAmount = 0,
  shape = "square",
}) => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-auto"
      style={{
        backgroundColor: "#050505",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${borderColor}33 1px, transparent 1px),
            linear-gradient(90deg, ${borderColor}33 1px, transparent 1px)
          `,
          backgroundSize: `${squareSize}px ${squareSize}px`,
          animation: `shapeGridMove ${20 / speed}s linear infinite`,
        }}
      />

      <style>
        {`
          @keyframes shapeGridMove {
            0% {
              background-position: 0 0;
            }

            100% {
              background-position: ${direction === "diagonal" ? `${squareSize}px ${squareSize}px` : `${squareSize}px 0`};
            }
          }
        `}
      </style>
    </div>
  );
};

export default ShapeGrid;