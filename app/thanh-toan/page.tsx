"use client";

import { useState } from "react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useCartStore } from "@/stores/cart";
import Link from "next/link";

export interface CheckoutFormType {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  district: string;
  note: string;
  payment: string;
  promo: string;
}

export default function CheckoutPage() {

  const { cart } = useCartStore();
  console.log("Cart data in CheckoutPage:", cart);
  const [form, setForm] = useState<CheckoutFormType>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    district: "",
    note: "",
    payment: "cod",
    promo: "",
  });
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Vui lòng nhập họ tên";
    if (!form.phone.match(/^0\d{9}$/)) e.phone = "Số điện thoại không hợp lệ";
    if (!form.address.trim()) e.address = "Vui lòng nhập địa chỉ";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md animate-[bounceIn_0.6s_ease]">
          <div className="text-[80px] mb-6">🎉</div>
          <h2 className="font-black text-4xl text-[#ff469e] mb-4">
            Đặt hàng thành công!
          </h2>
          <p className="text-[#7a5a7e] text-lg leading-relaxed mb-10">
            Cảm ơn bạn <strong>{form.name}</strong>! Đơn hàng đã được ghi nhận.
            Chúng tôi sẽ liên hệ qua{" "}
            <strong>{form.phone}</strong> trong vòng 30 phút.
          </p>
          <Link
            href="/"
            className="px-10 py-4 rounded-full bg-linear-to-r from-[#ff469e] to-[#ff89c0] text-white font-black text-base shadow-[0_4px_20px_rgba(255,70,158,0.4)] hover:-translate-y-0.5 transition-all"
          >
            🏠 Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 pb-24 animate-[fadeUp_0.5s_ease_both]">
      <div className="text-center mb-14">
        <h1 className="font-black text-[40px] text-[#2d1b2e]">
          🛒 Thanh toán
        </h1>
        <p className="text-[#9e7da3] mt-3">Điền thông tin để hoàn tất đơn hàng</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
        <CheckoutForm form={form} errors={errors} onChange={handleChange} />
        <OrderSummary
          cart={cart}
          // promo={form.promo}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
}
