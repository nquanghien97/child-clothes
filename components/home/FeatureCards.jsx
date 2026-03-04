const features = [
  { icon: "🚀", title: "Giao hàng siêu tốc", desc: "Nhận hàng trong 2-3 ngày trên toàn quốc" },
  { icon: "🛡️", title: "Chất lượng đảm bảo", desc: "Cam kết hoàn tiền nếu không hài lòng" },
  { icon: "💝", title: "Quà tặng miễn phí", desc: "Tặng hộp quà xinh cho đơn trên 500K" },
  { icon: "📞", title: "Hỗ trợ 24/7", desc: "Tư vấn nhiệt tình, giải đáp mọi thắc mắc" },
];

export default function FeatureCards() {
  return (
    <section className="bg-linear-to-r from-[#ff469e] via-[#ff89c0] to-[#ffb3d9]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 text-center border border-pink-100/30 shadow-[0_4px_20px_rgba(255,70,158,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(255,70,158,0.15)] transition-all duration-300"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="font-black text-[17px] text-[#2d1b2e] mb-2">
                {f.title}
              </h3>
              <p className="text-[#9e7da3] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
