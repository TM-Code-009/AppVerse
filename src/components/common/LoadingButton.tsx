interface Props {
  loading: boolean;
  text: string;
  loadingText: string;
}

export default function LoadingButton({
  loading,
  text,
  loadingText,
}: Props) {
  return (
    <button
      disabled={loading}
      className="
        bg-green-500
        text-white
        py-4
        rounded-xl
        transition-all
        hover:scale-105
        disabled:opacity-70
      "
    >
      {loading
        ? loadingText
        : text}
    </button>
  );
}