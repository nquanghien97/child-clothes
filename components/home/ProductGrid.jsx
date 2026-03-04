"use client";

import { useState } from "react";
import ProductCard from "../product/ProductCard";
import { products, categories } from "../../lib/data";
import { useProductStore } from "@/stores/product";
import { useRouter } from "next/navigation";
import { generateSlug } from "@/utils/generateSlug";
// import { useCartStore } from "@/stores/cart";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const { setSelectedProduct } = useProductStore();
  // const { addToCart } = useCartStore();
  const router = useRouter();

  const filtered =
    activeCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-7xl mx-auto px-6 py-8" id="products">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-[#ff469e] font-bold text-xs tracking-[3px] uppercase mb-3">
          ✨ Sản phẩm nổi bật
        </p>
        <h2 className="font-black text-4xl text-[#2d1b2e]">
          Bộ sưu tập mới nhất
        </h2>
        <p className="text-[#9e7da3] mt-3 text-base">
          Hàng mới về mỗi tuần, đừng bỏ lỡ!
        </p>
      </div>

      {/* Category filter */}
      <div className="flex gap-2.5 flex-wrap justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 font-['Quicksand',sans-serif] ${
              activeCategory === cat
                ? "bg-linear-to-r from-[#ff469e] to-[#ff89c0] text-white border-none shadow-[0_4px_16px_rgba(255,70,158,0.35)]"
                : "border-[1.5px] border-pink-200 text-[#9e7da3] bg-white hover:bg-pink-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {filtered.map((product, idx) => (
          <div
            key={product.id}
            style={{ animation: `fadeUp 0.5s ease both`, animationDelay: `${idx * 0.06}s` }}
          >
            <ProductCard
              product={product}
              onClick={() => {
                setSelectedProduct(product);
                router.push(`/san-pham/${generateSlug(product.name)}`);
              }}
              // onAddToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
