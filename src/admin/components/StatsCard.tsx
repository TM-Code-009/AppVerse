interface Props {
  title: string;
  value: number;
  icon?: React.ReactNode;
}

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div
      className="
        bg-card
        border
        border-theme
        rounded-2xl
        p-6
      "
    >
      <h3
        className="
          text-gray-400
        "
      >
        {title}
      </h3>

      <h2
        className="
          text-4xl
          font-black
          mt-3
        "
      >
        {value}
      </h2>
    </div>
  );
}