import {
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useThemeStore } from "../../store/themeStore";

export default function ThemeToggle() {
  const {
    darkMode,
    toggleTheme,
  } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="
        p-3
        rounded-full
        bg-green-500
        hover:scale-110
        transition
      "
    >
      {darkMode ? (
        <FaSun />
      ) : (
        <FaMoon />
      )}
    </button>
  );
}