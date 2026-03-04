"use client";

import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  // const [isProductsVisible, setIsProductsVisible] = useState(false);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Observe products section (chỉ khi ở homepage) */
  // useEffect(() => {
  //   if (pathname !== "/") return;

  //   let observer: IntersectionObserver;

  //   const init = () => {
  //     const element = document.getElementById("products");
  //     if (!element) {
  //       requestAnimationFrame(init);
  //       return;
  //     }

  //     observer = new IntersectionObserver(
  //       ([entry]) => {
  //         setIsProductsVisible(entry.isIntersecting);
  //       },
  //       { threshold: 0.4 }
  //     );

  //     observer.observe(element);
  //   };

  //   init();

  //   return () => {
  //     observer?.disconnect();
  //   };
  // }, [pathname]);

  /* Active logic */
  // const isHomeActive =
  //   pathname === "/" && !isProductsVisible;

  // const isProductsActive =
  //   pathname === "/" && isProductsVisible;

  return (
    <nav
      className={`sticky top-0 z-50 py-2 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b-[#ccc]"
          : "bg-white/85 backdrop-blur-xl"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center md:h-16 h-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-ngang.png"
            width={120}
            height={80}
            alt="Logo"
            className="w-full h-full"
          />
        </Link>

        {/* Nav Links */}
        {/* <div className="flex gap-2 items-center flex-1 justify-center">
          <Link
            href="/"
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${isHomeActive
                ? "bg-linear-to-r from-pink-500 to-pink-400 text-white shadow-lg"
                : "text-gray-500 hover:text-pink-500 hover:bg-pink-50"
              }`}
          >
            Trang chủ
          </Link>

          <Link
            href="/#products"
            scroll={false}
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${isProductsActive
                ? "bg-linear-to-r from-pink-500 to-pink-400 text-white shadow-lg"
                : "text-gray-500 hover:text-pink-500 hover:bg-pink-50"
              }`}
          >
            Sản phẩm
          </Link>
        </div> */}
      </div>
    </nav>
  );
}