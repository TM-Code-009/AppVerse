import {
  FaThLarge,
  FaLayerGroup,
  FaPlusCircle,
  FaLightbulb,
  FaBriefcase,
  FaHistory,
  FaTimes,
} from "react-icons/fa";

import {
  Link,
  useLocation,
} from "react-router-dom";

interface Props {
  open: boolean;
  close: () => void;
}

export default function Sidebar({
  open,
  close,
}: Props) {
  const location =
    useLocation();

  const links = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaThLarge />,
    },
    {
      name: "Apps",
      path: "/admin/apps",
      icon: <FaLayerGroup />,
    },
    {
      name: "Add App",
      path: "/admin/add-app",
      icon: <FaPlusCircle />,
    },
    {
      name: "Suggestions",
      path:
        "/admin/suggestions",
      icon: <FaLightbulb />,
    },
    {
      name: "Hire Requests",
      path: "/admin/hire",
      icon: <FaBriefcase />,
    },
    {
      name: "Activities",
      path:
        "/admin/activity",
      icon: <FaHistory />,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}

      {open && (
        <div
          onClick={close}
          className="
            fixed
            inset-0
            bg-black/50
            z-40
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-72
          z-50

          bg-[#111827]/95
          backdrop-blur-xl

          border-r
          border-white/10

          transition-transform
          duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        <div
          className="
            flex
            justify-between
            items-center
            p-6
            border-b
            border-white/10
          "
        >
          <div>
            <h2
              className="
                text-3xl
                font-black
                text-green-500
              "
            >
              AppVerse
            </h2>

            <p
              className="
                text-xs
                text-gray-400
              "
            >
              Admin CMS
            </p>
          </div>

          <button
            onClick={close}
            className="
              lg:hidden
            "
          >
            <FaTimes />
          </button>
        </div>

        <nav
          className="
            p-4
            flex
            flex-col
            gap-2
          "
        >
          {links.map(
            (link) => {
              const active =
                location.pathname ===
                link.path;

              return (
                <Link
                  key={
                    link.path
                  }
                  to={
                    link.path
                  }
                  onClick={
                    close
                  }
                  className={`
                    flex
                    items-center
                    gap-3

                    px-4
                    py-3

                    rounded-xl

                    transition-all

                    ${
                      active
                        ? `
                        bg-green-500
                        text-black
                        font-bold
                      `
                        : `
                        hover:bg-white/10
                      `
                    }
                  `}
                >
                  {link.icon}

                  {link.name}
                </Link>
              );
            }
          )}
        </nav>
      </aside>
    </>
  );
}