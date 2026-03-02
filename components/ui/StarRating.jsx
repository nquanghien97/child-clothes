export default function StarRating({ rating, size = "text-sm" }) {
  return (
    <div className={`flex gap-0.5 ${size}`}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < Math.floor(rating) ? "text-amber-400" : "text-gray-200"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
