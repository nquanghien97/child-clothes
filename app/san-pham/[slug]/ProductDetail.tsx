"use client";

import { products } from "@/lib/data";
import { generateSlug } from "@/utils/generateSlug";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import ImageSlider from "@/components/product/ImageSlider";
import { useCartStore } from "@/stores/cart";
import { formatPrice } from "@/utils/formatPrice";
// import ColorPicker from "@/components/product/ColorPicker";
import SizePicker from "@/components/product/SizePicker";
import QuantitySelector from "@/components/product/QuantitySelector";
import ProductTabs from "@/components/product/ProductTabs";
import StarRating from "@/components/ui/StarRating";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetailPage() {
  const params = useParams();
  const { slug } = params;
  const router = useRouter();
  const product = products.find((p) => generateSlug(p.name) === slug);
  const { addToCart } = useCartStore();
  // const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [qty, setQty] = useState(1);

  if (!product) {
    router.push("/");
    return null;
  }

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  const handleAdd = () => {
    if (selectedSize === null) return;
    addToCart({
      ...product,
      id: product.id,
      selectedSize: product.sizes[selectedSize],
      // selectedColor: product.colors[selectedColor],
      quantity: qty,
    });
    router.push('/thanh-toan');
  };

  return (
    <>
      <div className="flex gap-4 items-center p-2 justify-center fixed bottom-0 left-0 right-0 bg-pink-200 z-999 md:hidden">
        <Link href="tel:0932392195">
          <Image src="/phone.png" alt="phone" width={40} height={40} />
        </Link>
        <Link href="https://www.facebook.com/VelariGold?locale=vi_VN" target="_blank">
          <Image src="/messenger-fb.png" alt="messenger" width={40} height={40} />
        </Link>
        <div className="flex justify-between gap-4">
          <QuantitySelector qty={qty} onChange={setQty} />
        </div>
        <button
          disabled={selectedSize === null}
          onClick={handleAdd}
          className={`flex-1 px-6 py-3 md:py-4 rounded-full ${selectedSize ? 'bg-linear-to-r from-violet-500 to-violet-400 text-white' : 'bg-gray-200 text-gray-400'} font-black text-base border-none cursor-pointer shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-300 whitespace-nowrap`}
        >
          Mua ngay
        </button>
      </div>
      <div className="max-w-7xl mx-auto pb-4 animate-[fadeUp_0.5s_ease_both]">
        {/* Breadcrumb */}
        {/* <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Link
            className="text-[#ff469e] font-semibold cursor-pointer hover:underline"
            href="/"
          >
            Trang chủ
          </Link>
          <span>›</span>
          <span className="text-[#ff469e] font-semibold cursor-pointer hover:underline">
            {product.category}
          </span>
          <span>›</span>
          <span className="text-gray-600">{product.name}</span>
        </nav> */}

        {/* Tags */}
        {/* <div className="flex gap-2.5 mb-4 flex-wrap">
          <Badge label={product.badge} />
          <span className="bg-emerald-100 text-emerald-600 text-xs font-bold px-3.5 py-1 rounded-lg">
            Còn hàng
          </span>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left – Gallery */}
          <ImageSlider images={product.images} name={product.name} />

          {/* Right – Info */}
          <div className="px-2">
            {/* Price box mobile */}
            <div className="flex flex-col rounded-2xl py-2 md:hidden">
              <div className="flex gap-2">
                <span className="font-black text-2xl leading-none">
                  {formatPrice(product.price)}
                </span>
                <span className="text-[#ff469e] border-[1.5px] border-[#ff379b] rounded-[15px_20px_20px_0px] text-sm font-black px-2.5 py-0.5">
                  -{discount}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-gray-400 text-base line-through">
                  {formatPrice(product.originalPrice)}
                </div>
              </div>
            </div>

            <h1 className="font-black text-xl text-[#2d1b2e] leading-tight mb-2">
              {product.name}
            </h1>

            {/* Price box desktop */}
            <div className="flex items-center gap-5 bg-pink-50 rounded-2xl px-6 py-5 mb-8 max-md:hidden">
              <span className="font-black text-[38px] text-[#ff469e] leading-none">
                {formatPrice(product.price)}
              </span>
              <div>
                <div className="text-gray-400 text-base line-through">
                  {formatPrice(product.originalPrice)}
                </div>
                <span className="bg-red-500 text-white text-xs font-black px-2.5 py-0.5 rounded-lg">
                  -{discount}%
                </span>
              </div>
            </div>

            {/* <ColorPicker
              colors={product.colors}
              colorNames={product.colorNames}
              selected={selectedColor}
              onChange={setSelectedColor}
            /> */}

            <div className="flex mb-4">
              <div className="flex gap-4 items-center">
                <StarRating rating={product.rating} size="text-[18px]" />
                <p className="text-gray-400">Đã bán <span className="text-black">1M+</span></p>
              </div>
            </div>

            <div className="bg-pink-50 text-[12px] flex justify-between p-2 mb-4">
              <div className="flex gap-1 items-center">
                <Image src="/chinh-hang.svg" alt="Chính hãng" width={16} height={16} />
                Chính hãng 100%
              </div>
              <div className="flex gap-1 items-center">
                <Image src="/doi-tra.svg" alt="Đổi trả" width={16} height={16} />
                Đổi trả dễ dàng
              </div>
              <div className="flex gap-1 items-center">
                <Image src="/hai-long.svg" alt="Hài lòng" width={16} height={16} />
                Luôn hài lòng
              </div>
            </div>

            <SizePicker
              sizes={product.sizes}
              selected={selectedSize}
              onChange={setSelectedSize}
            />

            {/* Quantity + CTA */}
            <div className="flex gap-4 items-center mb-7 justify-center max-md:hidden">
              <div className="flex justify-between gap-4">
                <QuantitySelector qty={qty} onChange={setQty} />
                {/* <button
                  onClick={handleAdd}
                  disabled={selectedSize === null}
                  className={`flex-1 p-4 rounded-full font-black text-base transition-all duration-300 border-none cursor-pointer ${added
                      ? "bg-linear-to-r from-emerald-500 to-emerald-400 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)]"
                      : selectedSize === null
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-linear-to-r from-[#ff469e] to-[#ff89c0] text-white shadow-[0_4px_20px_rgba(255,70,158,0.4)] hover:-translate-y-0.5 hover:scale-[1.01]"
                    }`}
                >
                  {added ? "✓ Đã thêm vào giỏ!" : "🛒 Thêm vào giỏ hàng"}
                </button> */}
              </div>
              <button
                disabled={selectedSize === null}
                onClick={handleAdd}
                className={`px-6 py-3 md:py-4 rounded-full ${selectedSize ? 'bg-linear-to-r from-violet-500 to-violet-400 text-white' : 'bg-gray-200 text-gray-400'} font-black text-base border-none cursor-pointer shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 hover:scale-[1.01] transition-all duration-300 whitespace-nowrap`}
              >
                Mua ngay
              </button>
            </div>

            {/* Trust tags */}
            <div className="flex gap-3 flex-wrap">
              {[
                ["🚀", "Giao hàng 2-3 ngày"],
                ["♻️", "Đổi trả 30 ngày"],
                ["🏆", "Chính hãng 100%"],
              ].map(([ic, t]) => (
                <div
                  key={t}
                  className="flex items-center gap-1.5 text-[#7a5a7e] text-xs font-semibold bg-pink-50 rounded-xl px-3.5 py-2 border border-pink-100/40"
                >
                  <span>{ic}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <ProductTabs product={product} />
      </div>
    </>
  );
}
