'use client';

import ProductCard from '@/components/product/ProductCard';
import { categories, products } from '@/lib/data';
// import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';
import { generateSlug } from '@/utils/generateSlug';
import { useRouter } from 'next/navigation';
import { useState } from 'react'

function ListProduct() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const { setSelectedProduct } = useProductStore();
  // const { addToCart } = useCartStore();
  const router = useRouter();
  const filtered =
    activeCategory === "Tất cả"
      ? products
      : products.filter((p) => p.category === activeCategory);
  return (
    <>
      {/* Category filter */}
      <div className="flex gap-2.5 flex-wrap justify-center mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 font-['Quicksand',sans-serif] ${activeCategory === cat
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
    </>
  )
}

export default ListProduct