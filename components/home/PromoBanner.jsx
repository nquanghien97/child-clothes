"use client";
import Link from "next/link";

const floaters = ["🌸", "⭐", "🎀", "💕", "🌺", "✨", "🦋", "🌈"];

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#ff469e] via-[#ff89c0] to-[#ffb3d9] py-20 px-6 text-center">
      {floaters.map((ic, i) => (
        <div
          key={i}
          className="absolute pointer-events-none opacity-15 text-4xl"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        >
          {ic}
        </div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-black text-4xl lg:text-5xl text-white mb-4 leading-tight">
          🎉 Giảm đến 40%
          <br />
          cho đơn hàng đầu tiên
        </h2>
        <p className="text-white/85 text-lg mb-10">
          Nhập mã{" "}
          <strong className="bg-white/20 px-3 py-1 rounded-full">
            KIDSTYLE40
          </strong>{" "}
          khi thanh toán
        </p>
        <button
          onClick={() => setPage("checkout")}
          className="px-12 py-5 rounded-full bg-white text-[#ff469e] font-black text-lg shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
        >
          <Link href="/checkout">
            Mua ngay với mã giảm giá
          </Link>
        </button>
      </div>
    </section>
  );
}
