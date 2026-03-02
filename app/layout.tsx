import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Velari - Thời trang trẻ em cao cấp",
  description: "Velari - Nơi phong cách và sự thoải mái hòa quyện trong từng thiết kế thời trang trẻ em cao cấp. Khám phá bộ sưu tập đa dạng với chất liệu mềm mại, kiểu dáng hiện đại, và màu sắc tươi sáng, mang đến cho bé yêu của bạn sự tự tin và niềm vui trong từng bước đi.",
};

const beVietNam = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: '400'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${beVietNam.className} antialiased bg-[#F5F7FD]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
