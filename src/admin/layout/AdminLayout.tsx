import {
  Outlet,
} from "react-router-dom";

import {
  useState,
} from "react";

import {
  FaBars,
} from "react-icons/fa";

import Sidebar
from "./SideBar";

export default function AdminLayout() {
  const [open,
    setOpen] =
    useState(false);

  return (
    <div
      className="
        min-h-screen
        bg-background
      "
    >
      <Sidebar
        open={open}
        close={() =>
          setOpen(false)
        }
      />

      <div
        className="
          lg:ml-72
        "
      >
        <header
          className="
            sticky
            top-0
            z-30

            backdrop-blur-xl

            border-b
            border-theme

            px-6
            py-4

            flex
            items-center
            gap-4
          "
        >
          <button
            onClick={() =>
              setOpen(true)
            }
            className="
              lg:hidden
            "
          >
            <FaBars
              size={20}
            />
          </button>

          <h1
            className="
              font-bold
              text-xl
            "
          >
            Admin Dashboard
          </h1>
        </header>

        <main
          className="
            p-4
            md:p-6
            lg:p-8
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}