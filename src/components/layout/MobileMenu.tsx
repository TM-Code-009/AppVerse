import { FaTimes } from "react-icons/fa";

interface Props {
  open: boolean;
  close: () => void;
}

export default function MobileMenu({
  open,
  close,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        bg-black/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          flex
          justify-end
          p-6
        "
      >
        <button onClick={close}>
          <FaTimes size={25} />
        </button>
      </div>

      <div
        className="
          flex
          flex-col
          items-center
          gap-10
          mt-20
          text-2xl
        "
      >
        <a href="#about">About</a>

        <a href="#apps">Apps</a>

        <a href="#services">
          Services
        </a>

        <a href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}