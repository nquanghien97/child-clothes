"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface ImageSliderProps {
  images: string[];
  name: string;
}

export default function ImageSlider({ images, name }: ImageSliderProps) {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const goTo = (next: number, dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
      setDirection(null);
    }, 350);
  };

  const prev = () => goTo((current - 1 + images.length) % images.length, "right");
  const next = () => goTo((current + 1) % images.length, "left");

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;
    if (deltaX > 0) next(); else prev();
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const getSlideStyle = (): React.CSSProperties => {
    if (!animating || !direction) return { transform: "translateX(0%)", transition: "none" };
    return {
      transform: direction === "left" ? "translateX(-100%)" : "translateX(100%)",
      transition: "transform 350ms cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  const getIncomingStyle = (): React.CSSProperties => {
    if (!animating || !direction) return { display: "none" };
    return {
      position: "absolute",
      inset: 0,
      transform: "translateX(0%)",
      animation: `${direction === "left" ? "slideInFromRight" : "slideInFromLeft"} 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
    };
  };

  const nextIndex =
    direction === "left"
      ? (current + 1) % images.length
      : (current - 1 + images.length) % images.length;

  return (
    <div>
      <style>{`
        @keyframes slideInFromRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0%); }
        }
        @keyframes slideInFromLeft {
          from { transform: translateX(-100%); }
          to   { transform: translateX(0%); }
        }
      `}</style>

      {/* Main image */}
      <div
        className="relative overflow-hidden aspect-square"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Current image — slides out */}
        <div className="absolute inset-0" style={getSlideStyle()}>
          <Image
            width={400}
            height={400}
            src={images[current]}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Incoming image — slides in */}
        {animating && (
          <div style={getIncomingStyle()}>
            <Image
              width={400}
              height={400}
              src={images[nextIndex]}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Arrows */}
        {/* {(
          [
            { label: "❮", dir: -1, pos: "left-4" },
            { label: "❯", dir: 1, pos: "right-4" },
          ] as const
        ).map(({ label, dir, pos }) => (
          <button
            key={dir}
            onClick={() => (dir === -1 ? prev() : next())}
            className={`absolute ${pos} top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border-none flex items-center justify-center text-[#ff469e] font-black text-lg shadow-md hover:bg-[#ff469e] hover:text-white transition-all duration-200 z-10`}
          >
            {label}
          </button>
        ))} */}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 py-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => i < current ? goTo(i, "right") : goTo(i, "left")}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#ff469e]" : "w-2 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 max-md:hidden py-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => i < current ? goTo(i, "right") : goTo(i, "left")}
            className={`flex-1 aspect-square rounded-2xl overflow-hidden transition-all duration-200 ${
              i === current
                ? "ring-2 ring-[#ff469e] ring-offset-1 scale-[1.03]"
                : "ring-1 ring-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              width={100}
              height={100}
              src={img}
              alt={`thumb-${i}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}