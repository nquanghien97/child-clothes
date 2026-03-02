"use client";

import { useState } from "react";
import Badge from "../ui/Badge";
import StarRating from "../ui/StarRating";
import { formatPrice } from "../../lib/data";
import Image from "next/image";

export default function ProductCard({
  product,
  onClick,
  // onAddToCart
}) {
  // const [wishlisted, setWishlisted] = useState(false);
  // const [added, setAdded] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);

  // const handleAddToCart = (e) => {
  //   e.stopPropagation();
  //   onAddToCart(product);
  //   setAdded(true);
  //   setTimeout(() => setAdded(false), 1200);
  // };

  // const handleWishlist = (e) => {
  //   e.stopPropagation();
  //   setWishlisted((w) => !w);
  // };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-3xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(255,70,158,0.08)] border border-pink-100/30 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(255,70,158,0.22)] transition-all duration-300 group"
    >
      {/* Image */}
      <div
        className="relative overflow-hidden bg-pink-50"
        style={{ paddingTop: "110%" }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <Image
          width={400}
          height={440}
          src={product.images[0]}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${imgHovered ? "scale-110" : "scale-100"
            }`}
        />

        {/* Badge */}
        <div className="absolute top-3.5 left-3.5">
          <Badge label={product.badge} />
        </div>

        {/* Wishlist */}
        {/* <button
          onClick={handleWishlist}
          className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-xl flex items-center justify-center text-lg backdrop-blur-md transition-all duration-200 shadow-md ${wishlisted
              ? "bg-[#ff469e] scale-110"
              : "bg-white/90 hover:bg-pink-50"
            }`}
        >
          {wishlisted ? "❤️" : "🤍"}
        </button> */}

        {/* Quick add – visible on hover */}
        {/* <button
          onClick={handleAddToCart}
          className={`absolute bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-5 py-2 rounded-full text-xs font-black backdrop-blur-md border-2 transition-all duration-300 ${added
              ? "bg-emerald-500 border-emerald-500 text-white opacity-100"
              : "bg-white/95 border-[#ff469e] text-[#ff469e] opacity-0 group-hover:opacity-100"
            }`}
        >
          {added ? "✓ Đã thêm!" : "🛒 Thêm vào giỏ"}
        </button> */}
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[11px] text-[#ff469e] font-bold uppercase tracking-wider mb-1.5">
          {product.category}
        </p>
        <h3 className="font-black text-base text-[#2d1b2e] leading-tight mb-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-gray-400 text-xs">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[#ff469e] font-black text-xl">
              {formatPrice(product.price)}
            </span>
            <span className="text-gray-300 text-sm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          </div>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((c) => (
              <div
                key={c}
                className="w-3.5 h-3.5 rounded-full border border-gray-200"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
