"use client";

import { formatPrice } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { CartItem } from "@/stores/cart";

export default function OrderSummary({
  cart,
  // promo,
  onSubmit,
  loading
} : {
  cart: CartItem[],
  onSubmit: () => void,
  loading: boolean,
  // promo: string
}) {
  const total = cart.reduce((s, i) => s + i.price * (i.quantity || 1), 0);
  const shipping = total > 500000 ? 0 : 0;
  // const discount = promo === "KIDSTYLE40" ? Math.round(total * 0.4) : 0;
  const finalTotal = total + shipping; // - discount;

  return (
    <div className="sticky top-22.5">
      <div className="bg-white rounded-3xl p-8 shadow-[0_8px_40px_rgba(255,70,158,0.12)] border border-pink-100/30">
        <h3 className="font-black text-xl text-[#2d1b2e] mb-7">
          📦 Đơn hàng của bạn
        </h3>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🛒</div>
            <p className="text-gray-400 mb-6">Giỏ hàng trống</p>
            <Link
              href="/"
              className="px-7 py-3 rounded-full bg-linear-to-r from-[#ff469e] to-[#ff89c0] text-white font-black shadow-[0_4px_16px_rgba(255,70,158,0.4)] hover:-translate-y-0.5 transition-all"
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex flex-col gap-4 mb-7 max-h-80 overflow-y-auto pr-1">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center p-3 bg-pink-50/60 rounded-2xl"
                >
                  <Image
                    width={64}
                    height={64}
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-sm text-[#2d1b2e] truncate">
                      {item.name}
                    </div>
                    <div className="text-[#9e7da3] text-xs mt-0.5">
                      {item.selectedSize && `Size: ${item.selectedSize} · `}SL:{" "}
                      {item.quantity || 1}
                    </div>
                    <div className="text-[#ff469e] font-black text-[15px] mt-1">
                      {formatPrice(item.price * (item.quantity || 1))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t-2 border-dashed border-pink-200/60 pt-5">
              {[
                ["Tạm tính", formatPrice(total)],
                ["Phí vận chuyển", shipping === 0 ? "🎉 Miễn phí" : formatPrice(shipping)]
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between mb-3.5 text-sm text-[#7a5a7e]"
                >
                  <span>{k}</span>
                  <span
                    className={`font-bold ${k.includes("Mã") ? "text-emerald-500" : "text-[#2d1b2e]"
                      }`}
                  >
                    {v}
                  </span>
                </div>
              ))}

              <div className="flex justify-between items-center bg-linear-to-r from-[#fff0f7] to-[#ffe8f3] rounded-2xl px-5 py-4 mt-2 border border-pink-200">
                <span className="font-black text-[17px] text-[#2d1b2e]">
                  Tổng cộng
                </span>
                <span className="font-black text-2xl text-[#ff469e]">
                  {formatPrice(finalTotal)}
                </span>
              </div>
            </div>

            <button
              onClick={onSubmit}
              disabled={loading}
              className="w-full mt-6 py-5 rounded-full bg-linear-to-r from-[#ff469e] to-[#ff89c0] text-white font-black text-lg shadow-[0_4px_20px_rgba(255,70,158,0.4)] hover:-translate-y-0.5 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span
                    className="w-5 h-5 border-[3px] border-white/30 border-t-white rounded-full"
                    style={{ animation: "spin 0.8s linear infinite" }}
                  />
                  Đang xử lý...
                </>
              ) : (
                "🎉 Xác nhận đặt hàng"
              )}
            </button>

            <p className="text-center text-gray-400 text-xs mt-4">
              🔒 Thanh toán an toàn & bảo mật
            </p>
          </>
        )}
      </div>
    </div>
  );
}
