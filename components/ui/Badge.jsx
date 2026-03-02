const badgeColors = {
  HOT: "bg-orange-500",
  SALE: "bg-[#e0006e]",
  BEST: "bg-violet-500",
  MỚI: "bg-[#ff469e]",
};

export default function Badge({ label }) {
  if (!label) return null;
  const color = badgeColors[label] ?? "bg-[#ff469e]";
  return (
    <span
      className={`${color} text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-md tracking-wide`}
    >
      {label}
    </span>
  );
}
