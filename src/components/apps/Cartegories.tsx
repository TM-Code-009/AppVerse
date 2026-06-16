interface Props {
  selected: string;
  setSelected: (
    value: string
  ) => void;
  categories: string[];
}

export default function Categories({
  selected,
  setSelected,
  categories,
}: Props) {
  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-4
        mb-10
      "
    >
      {categories.map(
        (category) => (
          <button
            key={category}
            onClick={() =>
              setSelected(category)
            }
            className={`
              px-5
              py-2
              rounded-full
              transition-all
              duration-300
              hover:scale-105
              ${
                selected === category
                  ? "bg-green-500 text-white"
                  : "bg-card text-primary border border-theme"
              }
            `}
          >
            {category}
          </button>
        )
      )}
    </div>
  );
}