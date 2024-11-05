"use client";
import { useState, useEffect } from "react";

type Position = {
  x: number;
  y: number;
};

const Cursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed"
      style={{
        left: position.x,
        top: position.y,
        width: "1000px",
        height: "1000px",
        background:
          "radial-gradient(circle, rgba(29, 78, 216, 0.15), transparent 60%)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        transition: "transform 0.1s ease-out",
        zIndex: -30,
      }}
    />
  );
};

export default Cursor;
