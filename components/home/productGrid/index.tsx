import ListProduct from "./ListProducts";

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="products">
      {/* Heading */}
      <div className="text-center mb-14">
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
      <ListProduct />
    </section>
  );
}
