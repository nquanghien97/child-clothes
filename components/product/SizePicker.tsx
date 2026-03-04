"use client";

import { Dispatch, SetStateAction } from "react";

export default function SizePicker({ sizes, selected, onChange }: { sizes: string[]; selected: number | null; onChange: Dispatch<SetStateAction<number | null>> }) {
  return (
    <div className="mb-4 bg-white p-2 rounded-xl shadow-xl">
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-[#2d1b2e]">
          Size:{" "}
          {selected !== null ? (
            <span className="text-[#ff469e]">{sizes[selected]}</span>
          ) : (
            <span className="text-gray-300 font-normal">Chọn size</span>
          )}
        </div>
      </div>

      <div className="flex gap-2.5 flex-wrap">
        {sizes.map((size, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className={`px-2 py-1 rounded-2xl text-sm font-bold border-2 transition-all duration-200 ${i === selected
              ? "bg-[#ff469e] border-[#ff469e] text-white scale-105 shadow-[0_4px_12px_rgba(255,70,158,0.35)]"
              : "border-pink-200 text-[#9e7da3] bg-white hover:border-[#ff469e] hover:text-[#ff469e]"
              }`}
          >
            {size}
          </button>
        ))}
      </div>

      {selected === null && (
        <p className="text-orange-500 text-xs mt-2 font-semibold">
          * Vui lòng chọn size trước khi mua hàng
        </p>
      )}
    </div>
  );
}
