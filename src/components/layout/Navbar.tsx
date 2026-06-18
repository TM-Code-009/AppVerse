import ThemeToggle from "../common/ThemeToggle";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          backdrop-blur-xl
          border-b
          border-theme
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-4
            flex
            items-center
            justify-between
          "
        >
          <h1
            className="
              text-2xl
              font-black
              text-green-500
            "
          >
            AppVerse
          </h1>

          <nav
            className="
              hidden
              md:flex
              items-center
              gap-10
            "
          >
            <a
              href="#"
              className="
                text-primary
                hover:text-green-500
                transition
              "
            >
              Home
            </a>

            <a
              href="#apps"
              className="
                text-primary
                hover:text-green-500
                transition
              "
            >
              Apps
            </a>

            <a
              href="#services"
              className="
                text-primary
                hover:text-green-500
                transition
              "
            >
              Services
            </a>

            <a
              href="#contact"
              className="
                text-primary
                hover:text-green-500
                transition
              "
            >
              Contact
            </a>
          </nav>

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <ThemeToggle />

            <button
              className="md:hidden "
              onClick={() =>
                setOpen(true)
              }
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={open}
        close={() =>
          setOpen(false)
        }
      />
    </>
  );
}