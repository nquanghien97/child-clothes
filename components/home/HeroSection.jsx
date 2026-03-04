import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#fff0f7] via-[#ffe8f3] to-[#ffd6ee] py-8 px-6">
      {/* Decorative blobs */}
      {[
        { size: 400, x: "60%", y: "-20%", opacity: 0.06 },
        { size: 250, x: "80%", y: "50%", opacity: 0.08 },
        { size: 150, x: "5%", y: "70%", opacity: 0.07 },
        { size: 80, x: "90%", y: "10%", opacity: 0.12 },
      ].map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: c.size,
            height: c.size,
            left: c.x,
            top: c.y,
            background: "#ff469e",
            opacity: c.opacity,
            transform: "translate(-50%,-50%)",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Text */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 bg-pink-100/70 border border-pink-200/50 rounded-full px-5 py-2 mb-7">
            <span className="animate-spin text-base" style={{ animationDuration: "4s" }}>
              ✨
            </span>
            <span className="text-[#ff469e] font-bold text-sm">
              Bộ sưu tập Xuân Hè 2025
            </span>
          </div>

          <h1 className="font-black leading-[1.15] text-[#2d1b2e] mb-5 text-5xl lg:text-6xl">
            Thời trang
            <br />
            <span className="text-[#ff469e] relative inline-block">
              xinh xắn
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8 Q50 2 100 8 Q150 14 198 6"
                  stroke="#ff469e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </span>{" "}
            cho bé yêu
          </h1>

          <p className="text-[#7a5a7e] text-lg leading-relaxed mb-9 max-w-md">
            Khám phá hàng ngàn mẫu trang phục dễ thương, chất lượng cao cho bé
            từ 0–12 tuổi. Thiết kế hiện đại, an toàn cho làn da bé.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              className="px-9 py-4 rounded-full bg-linear-to-r from-[#ff469e] to-[#ff89c0] text-white font-black text-base shadow-[0_4px_20px_rgba(255,70,158,0.4)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255,70,158,0.5)] active:scale-95 transition-all duration-300"
            >
              <Link href="#products" className="block w-full h-full">
                🛍️ Mua sắm ngay
              </Link>
            </button>
            {/* <button className="px-8 py-4 rounded-full border-2 border-[#ff469e] text-[#ff469e] font-bold text-[15px] hover:bg-pink-50 hover:-translate-y-0.5 transition-all duration-200">
              Xem lookbook
            </button> */}
          </div>

          <div className="flex gap-10 mt-8">
            {[
              ["500+", "Sản phẩm"],
              ["50K+", "Khách hàng"],
              ["4.9★", "Đánh giá"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-black text-[28px] text-[#ff469e] leading-none">
                  {n}
                </div>
                <div className="text-[#9e7da3] text-xs font-semibold mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="flex-1 flex justify-center relative">
          <div
            className="w-100 h-100 overflow-hidden relative shadow-[0_24px_80px_rgba(255,70,158,0.3)]"
            style={{
              borderRadius: "60% 40% 50% 50% / 40% 50% 60% 50%",
              background: "linear-gradient(135deg, #ff89c0, #ffb3d9)",
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=600&q=80"
              className="w-full h-full object-cover"
              alt="hero"
              width={400}
              height={400}
            />
          </div>

          {/* Floating badges */}
          {[
            { icon: "🎀", text: "Chất liệu an toàn", x: -30, y: 60, dark: false },
            { icon: "🚀", text: "Giao hàng nhanh", x: 290, y: 280, dark: false },
            { icon: "💝", text: "-40% hôm nay", x: 260, y: 60, dark: true },
          ].map((b, i) => (
            <div
              key={i}
              className={`absolute flex items-center gap-2 px-4 py-2.5 rounded-2xl shadow-xl font-bold text-sm ${
                b.dark
                  ? "bg-[#ff469e] text-white"
                  : "bg-white text-gray-700"
              }`}
              style={{
                left: b.x,
                top: b.y,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <span className="text-xl">{b.icon}</span>
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
