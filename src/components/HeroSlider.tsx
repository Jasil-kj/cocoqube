"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/images/banner1.webp",
  "/images/banner2.webp",
  "/images/banner3.webp"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000); // Change image every 6 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#2a1f1a]">
      {IMAGES.map((img, idx) => (
        <motion.div
          key={img}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ 
            opacity: idx === currentIndex ? 1 : 0, 
            scale: idx === currentIndex ? 1 : 1.05 
          }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" } 
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${img}')`,
            zIndex: idx === currentIndex ? 1 : 0, // Ensure the active image is on top
          }}
        />
      ))}
      <div className="absolute inset-0 hero-gradient bg-black/40 z-10"></div>
    </div>
  );
}
