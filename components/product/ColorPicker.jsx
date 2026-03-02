"use client";

export default function ColorPicker({ colors, colorNames, selected, onChange }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 text-[#2d1b2e] font-bold mb-3">
        Màu sắc:
        <span className="text-[#ff469e]">
          {colorNames?.[selected] ?? "Chọn màu"}
        </span>
      </div>
      <div className="flex gap-3">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            className="transition-all duration-200"
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: color,
              border: `3px solid ${i === selected ? "#ff469e" : "transparent"}`,
              boxShadow:
                i === selected
                  ? `0 0 0 2px #fff, 0 0 0 4px #ff469e`
                  : "0 2px 8px rgba(0,0,0,0.15)",
              transform: i === selected ? "scale(1.12)" : "scale(1)",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </div>
  );
}
