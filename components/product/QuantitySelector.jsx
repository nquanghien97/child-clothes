"use client";

export default function QuantitySelector({ qty, onChange }) {
  return (
    <div className="flex items-center border-2 border-pink-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => onChange(Math.max(1, qty - 1))}
        className="w-11 h-11 flex items-center justify-center text-2xl font-black text-[#ff469e] bg-white hover:bg-pink-50 transition-colors border-none cursor-pointer"
      >
        −
      </button>
      <div className="w-11 h-11 flex items-center justify-center text-[17px] font-black text-[#2d1b2e] bg-pink-50">
        {qty}
      </div>
      <button
        onClick={() => onChange(qty + 1)}
        className="w-11 h-11 flex items-center justify-center text-2xl font-black text-[#ff469e] bg-white hover:bg-pink-50 transition-colors border-none cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
