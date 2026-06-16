export default function PageLoader() {
  return (
    <div
      className="
      fixed
      inset-0
      flex
      items-center
      justify-center
      bg-[#050816]
      z-[9999]
    "
    >
      <div
        className="
        h-16
        w-16
        border-4
        border-green-500
        border-t-transparent
        rounded-full
        animate-spin
      "
      />
    </div>
  );
}