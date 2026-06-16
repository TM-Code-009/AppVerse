interface Props {
  search: string;
  setSearch: (
    value: string
  ) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search apps..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="
          w-full
          p-4
          rounded-2xl
          bg-card
          text-primary
          border
          border-theme
          outline-none
          placeholder:text-muted
          focus:ring-2
          focus:ring-green-500/50
          transition-all
        "
      />
    </div>
  );
}