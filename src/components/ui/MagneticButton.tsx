"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Springs for smooth magnetic effect
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center of the button
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX * 0.2); // Adjust the multiplier (0.2) to change magnet strength
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: 0, y: 0 }}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
        className="relative w-full h-full"
      >
        {children}
      </motion.button>
    </motion.div>
  );
}
