"use client";

import { useState } from "react";
import StarRating from "../ui/StarRating";
import { reviews } from "../../lib/data";
import Image from "next/image";
import DetailProduct from "./DetailProduct";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("detail");
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mt-4 px-2">
      {/* Tab headers */}
      <div className="flex gap-1 border-b-2 border-pink-100/60 mb-4">
        {[
          ["detail", "📋 Chi tiết sản phẩm"],
          ["reviews", "⭐ Đánh giá"],
        ].map(([tab, label]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-7 py-3.5 border-none bg-transparent cursor-pointer font-black text-[15px] transition-all duration-200 -mb-0.5 border-b-[3px] ${activeTab === tab
              ? "text-[#ff469e] border-b-[#ff469e]"
              : "text-gray-400 border-b-transparent hover:text-[#ff469e]"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Detail tab */}
      {activeTab === "detail" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <h3 className="font-black text-2xl text-[#2d1b2e] mb-5">
              Mô tả sản phẩm
            </h3>
            <p className="text-[#7a5a7e] leading-relaxed text-[15px] mb-4">
              {product.description}
            </p>
          </div>
          <div>
            <h3 className="font-black text-2xl text-[#2d1b2e]">
              Thông số kỹ thuật
            </h3>
            {[
              ["Chất liệu", product.material],
              ["Độ tuổi phù hợp", product.age],
              ["Danh mục", product.category],
              // ["Màu có sẵn", `${product.colors.length} màu`],
              ["Size có sẵn", product.sizes.join(", ")],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between py-3.5 border-b border-pink-100/40 text-sm"
              >
                <span className="text-gray-400 font-semibold">{k}</span>
                <span className="text-[#2d1b2e] font-bold">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="border border-[#ff469e] rounded-full px-8 py-2 cursor-pointer font-semibold text-[#ff469e]"
              onClick={() => setShowDetails(true)}
            >
              Xem tất cả
            </button>
          </div>
        </div>
      )}

      {/* Reviews tab */}
      {activeTab === "reviews" && (
        <div>
          {/* Rating summary */}
          <div className="flex flex-col md:flex-row gap-10 mb-14 items-start">
            <div className="text-center bg-linear-to-br from-[#fff0f7] to-[#ffe8f3] rounded-3xl px-12 py-8 shrink-0">
              <div className="font-black text-7xl text-[#ff469e] leading-none">
                {product.rating}
              </div>
              <StarRating rating={product.rating} size="text-2xl" />
              <div className="text-[#9e7da3] text-sm font-semibold mt-2">
                {product.reviews} đánh giá
              </div>
            </div>
            <div className="flex-1 w-full">
              {[5, 4, 3, 2, 1].map((star) => {
                const pct =
                  star === 5
                    ? 72
                    : star === 4
                      ? 20
                      : star === 3
                        ? 5
                        : star === 2
                          ? 2
                          : 1;
                return (
                  <div
                    key={star}
                    className="flex items-center gap-3 mb-3"
                  >
                    <span className="text-amber-400 text-sm w-16">
                      {"★".repeat(star)}
                    </span>
                    <div className="flex-1 bg-pink-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-[#ff469e] to-[#ff89c0] rounded-full transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-gray-400 text-xs w-8">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-3xl p-7 border border-pink-100/30 shadow-[0_4px_20px_rgba(255,70,158,0.05)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#fff0f7] to-[#ffe8f3] border-2 border-pink-200 flex items-center justify-center text-2xl">
                      {r.avatar}
                    </div>
                    <div>
                      <div className="font-black text-[15px] text-[#2d1b2e]">
                        {r.name}
                      </div>
                      <div className="text-gray-400 text-xs mt-0.5">
                        {r.date}
                      </div>
                    </div>
                  </div>
                  <StarRating rating={r.rating} size="text-base" />
                </div>
                <p className="text-[#7a5a7e] text-sm leading-relaxed">
                  {r.comment}
                </p>
                {r.images && (
                  <div className="flex gap-2.5 mt-4">
                    {r.images.map((img, i) => (
                      <Image
                        width={72}
                        height={72}
                        key={i}
                        src={img}
                        alt="review"
                        className="w-18 h-18 rounded-xl object-cover"
                        style={{ width: 72, height: 72 }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {showDetails && (
        <DetailProduct product={product} open={showDetails} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
}
