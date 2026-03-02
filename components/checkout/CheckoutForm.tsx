"use client";

import { CheckoutFormType } from "@/app/thanh-toan/page";

const inputCls = (err: string | undefined) =>
  `w-full px-5 py-3.5 rounded-2xl text-sm font-semibold text-[#2d1b2e] bg-pink-50/60 transition-all duration-200 outline-none focus:shadow-[0_0_0_3px_rgba(255,70,158,0.12)] ${
    err
      ? "border-2 border-red-400"
      : "border-2 border-pink-200/60 focus:border-[#ff469e]"
  }`;

export default function CheckoutForm({ form, errors, onChange }: { form: CheckoutFormType, errors: Record<string, string | undefined>, onChange: (key: string, value: string) => void }) {
  const field = (key: keyof CheckoutFormType, label: string, props = {}) => (
    <div>
      <label className="block text-[13px] font-bold text-[#7a5a7e] mb-2">
        {label}
      </label>
      <input
        value={form[key]}
        onChange={(e) => onChange(key, e.target.value)}
        className={inputCls(errors[key])}
        {...props}
      />
      {errors[key] && (
        <p className="text-red-400 text-xs mt-1.5 font-semibold">{errors[key]}</p>
      )}
    </div>
  );

  const paymentOptions = [
    { val: "cod", ic: "💰", title: "Thanh toán khi nhận hàng", sub: "Miễn phí, nhanh chóng" }
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Recipient */}
      <div className="bg-white rounded-3xl p-9 shadow-[0_4px_24px_rgba(255,70,158,0.08)] border border-pink-100/30">
        <SectionHeader n="1" title="Thông tin người nhận" />
        <div className="grid grid-cols-2 gap-5">
          {field("name", "Họ và tên *", { placeholder: "Nguyễn Thị Hoa" })}
          {field("phone", "Số điện thoại *", { placeholder: "0912 345 678" })}
        </div>
        <div className="mt-5">
          {field("email", "Email", { placeholder: "email@example.com", type: "email" })}
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-3xl p-9 shadow-[0_4px_24px_rgba(255,70,158,0.08)] border border-pink-100/30">
        <SectionHeader n="2" title="Địa chỉ giao hàng" />
        <div className="grid grid-cols-2 gap-5 mb-5">
          {field("city", "Tỉnh/Thành phố", { placeholder: "Hà Nội" })}
          {field("district", "Quận/Huyện", { placeholder: "Đống Đa" })}
        </div>
        {field("address", "Địa chỉ cụ thể *", {
          placeholder: "Số nhà, đường, phường/xã...",
        })}
      </div>

      {/* Payment */}
      <div className="bg-white rounded-3xl p-9 shadow-[0_4px_24px_rgba(255,70,158,0.08)] border border-pink-100/30">
        <SectionHeader n="3" title="Phương thức thanh toán" />
        <div className="flex flex-col gap-3.5">
          {paymentOptions.map(({ val, ic, title, sub }) => (
            <label
              key={val}
              className={`flex items-center gap-5 px-5 py-4 rounded-2xl cursor-pointer border-2 transition-all duration-200 ${
                form.payment === val
                  ? "border-[#ff469e] bg-pink-50"
                  : "border-pink-100/40 bg-white hover:border-pink-200"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={val}
                checked={form.payment === val}
                onChange={() => onChange("payment", val)}
                className="hidden"
              />
              <span className="text-3xl">{ic}</span>
              <div className="flex-1">
                <div className="font-black text-[15px] text-[#2d1b2e]">
                  {title}
                </div>
                <div className="text-[#9e7da3] text-xs mt-0.5">{sub}</div>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-[2.5px] flex items-center justify-center transition-all ${
                  form.payment === val
                    ? "bg-[#ff469e] border-[#ff469e]"
                    : "border-gray-300"
                }`}
              >
                {form.payment === val && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Note */}
      <div className="bg-white rounded-3xl p-9 shadow-[0_4px_24px_rgba(255,70,158,0.08)] border border-pink-100/30">
        <label className="block font-black text-lg text-[#2d1b2e] mb-5">
          📝 Ghi chú đơn hàng
        </label>
        <textarea
          value={form.note}
          onChange={(e) => onChange("note", e.target.value)}
          placeholder="VD: Gọi trước khi giao, gói quà riêng cho từng sản phẩm, ..."
          className="w-full px-5 py-4 rounded-2xl border-2 border-pink-200/60 bg-pink-50/60 text-sm text-[#2d1b2e] font-semibold resize-y min-h-25 outline-none focus:border-[#ff469e] focus:shadow-[0_0_0_3px_rgba(255,70,158,0.12)] transition-all"
        />
      </div>
    </div>
  );
}

function SectionHeader({ n, title }: { n: string; title: string }) {
  return (
    <h3 className="font-black text-xl text-[#2d1b2e] mb-7 flex items-center gap-3">
      <span className="w-8 h-8 rounded-full bg-[#ff469e] text-white flex items-center justify-center text-sm font-black">
        {n}
      </span>
      {title}
    </h3>
  );
}
