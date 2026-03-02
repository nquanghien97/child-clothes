const items = [
  "👗 Váy Đầm",
  "👕 Áo Thun",
  "👖 Quần",
  "🧥 Áo Khoác",
  "👡 Giày Dép",
  "🎒 Phụ Kiện",
];

export default function CategoryBanner() {
  return (
    <section className="bg-[#ff469e] py-5 overflow-hidden">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{ animation: "marquee 22s linear infinite", width: "max-content" }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex gap-10 px-5">
            {items.map((t) => (
              <span key={t} className="text-white font-bold text-sm opacity-90">
                {t}
                <span className="opacity-50 mx-3">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
