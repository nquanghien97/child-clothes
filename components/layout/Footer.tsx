"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2d1b2e] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 cursor-pointer group"
            >
              <Image src="/logo-ngang.png" width={160} height={80} alt="Logo" className="p-4" />
            </Link>
            <p className="text-[#a78bba] text-sm leading-relaxed max-w-70 mb-6">
              Thương hiệu thời trang trẻ em hàng đầu Việt Nam. Chất lượng cao,
              an toàn cho bé yêu.
            </p>
            <div className="flex gap-3">
              {["📘", "📸", "🎵", "📺"].map((ic, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-xl bg-pink-500/15 flex items-center justify-center text-lg hover:bg-[#ff469e] hover:scale-110 transition-all duration-200"
                >
                  {ic}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-black text-base mb-5">
              Sản phẩm
            </h4>
            {["Váy đầm", "Bộ đồ", "Áo khoác", "Đồ ngủ", "Giày dép"].map(
              (item) => (
                <p
                  key={item}
                  className="text-[#a78bba] text-sm mb-2.5 cursor-pointer hover:text-[#ffb3d9] transition-colors"
                >
                  {item}
                </p>
              )
            )}
          </div>

          {/* Support */}
          <div>
            <h4 className="font-black text-base mb-5">
              Hỗ trợ
            </h4>
            {[
              "Hướng dẫn mua",
              "Chính sách đổi trả",
              "Phí vận chuyển",
              "FAQ",
              "Liên hệ",
            ].map((item) => (
              <p
                key={item}
                className="text-[#a78bba] text-sm mb-2.5 cursor-pointer hover:text-[#ffb3d9] transition-colors"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-black text-base mb-5">
              Đăng ký nhận tin
            </h4>
            <p className="text-[#a78bba] text-sm mb-4 leading-relaxed">
              Nhận ngay mã giảm 10% cho đơn đầu tiên!
            </p>
            <div className="flex gap-2">
              <input
                placeholder="Email của bạn"
                className="flex-1 px-4 py-3 rounded-xl border border-pink-500/30 bg-white/7 text-white text-sm placeholder-[#7a5a7e] focus:outline-none focus:border-[#ff469e] transition-colors"
              />
              <button className="px-4 py-3 rounded-xl bg-linear-to-r from-[#ff469e] to-[#ff89c0] text-white text-sm font-black hover:shadow-[0_4px_16px_rgba(255,70,158,0.4)] hover:-translate-y-0.5 transition-all">
                Gửi
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-500/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[#7a5a7e] text-sm">
          <span>© 2025 KidStyle. All rights reserved.</span>
          <span>Made with 💕 for little ones</span>
        </div>
      </div>
    </footer>
  );
}
