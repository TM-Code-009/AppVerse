interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/70
        flex
        items-center
        justify-center
        z-[999]
      "
    >
      <div
        className="
          bg-card
          p-8
          rounded-3xl
          text-center
        "
      >
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          🎉 Success
        </h2>

        <p className="mt-4 text-muted">
          Your request has been sent.
        </p>

        <button
          onClick={onClose}
          className="
            mt-6
            bg-green-500
            px-6
            py-3
            rounded-xl
          "
        >
          Continue
        </button>
      </div>
    </div>
  );
}