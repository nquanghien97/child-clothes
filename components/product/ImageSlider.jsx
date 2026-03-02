"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageSlider({ images, name }) {
  const [current, setCurrent] = useState(0);

  // const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  // const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div>
      {/* Main image */}
      <div className="relative rounded-3xl overflow-hidden bg-pink-50 aspect-square shadow-[0_12px_48px_rgba(255,70,158,0.12)] mb-4">
        <Image
          width={400}
          height={400}
          src={images[current]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Arrows */}
        {[
          { label: "❮", dir: -1, pos: "left-4" },
          { label: "❯", dir: 1, pos: "right-4" },
        ].map(({ label, dir, pos }) => (
          <button
            key={dir}
            onClick={() => setCurrent((i) => (i + dir + images.length) % images.length)}
            className={`absolute ${pos} top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border-none flex items-center justify-center text-[#ff469e] font-black text-lg shadow-md hover:bg-[#ff469e] hover:text-white transition-all duration-200`}
          >
            {label}
          </button>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#ff469e]" : "w-2 bg-white/60"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`flex-1 aspect-square rounded-2xl overflow-hidden transition-all duration-200 ${i === current
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
