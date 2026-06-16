import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { useThemeStore } from "./store/themeStore";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  const { darkMode } =
    useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  }, [darkMode]);

  return (
    <>
      <Toaster position="top-right" />

      <ScrollProgress />
      <ScrollToTop />

      <Navbar />

      <Home />
    </>
  );
}

export default App;