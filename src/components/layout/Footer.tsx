import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-theme
        py-12
        mt-24
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >
        <div
          className="
            flex
            justify-center
            gap-8
            text-2xl
          "
        >
          <FaGithub />

          <FaLinkedin />

          <FaWhatsapp />
        </div>

        <p
          className="
            text-center
            text-muted
            mt-6
          "
        >
          © 2026 AppVerse
        </p>
      </div>
    </footer>
  );
}