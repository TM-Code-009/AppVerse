interface Props {
  children: React.ReactNode;
}

export default function Button({
  children,
}: Props) {
  return (
    <button
      className="
        px-8
        py-4
        rounded-xl
        bg-green-500
        hover:scale-105
        active:scale-95
        transition
        font-semibold
      "
    >
      {children}
    </button>
  );
}