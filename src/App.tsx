import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./routes/ProductedRoute";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useThemeStore } from "./store/themeStore";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";

import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollToTop from "./components/ui/ScrollToTop";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import AdminLayout from "./admin/layout/AdminLayout";
import Apps from "./admin/pages/Apps";
import AddApp from "./admin/pages/AddApps";
import EditApp from "./admin/pages/EditApps";
import Activities
from "./admin/pages/Activities";
import Suggestions
from "./admin/pages/Suggestions";
import HireRequests from "./admin/pages/HireRequest";
import Requests from "./admin/pages/Request";
import AppDetails from "./components/apps/AppDetails";

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
    <BrowserRouter>
      <Toaster position="top-right" />

      <ScrollProgress />
      <ScrollToTop />

      <Routes>
        {/* Public Site */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route
  path="/app/:id"
  element={<AppDetails />}
/>

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route element={<ProtectedRoute />}>
  <Route path="/admin" element={<AdminLayout />}>
    <Route index element={<Dashboard />} />

    <Route path="apps" element={<Apps />} />
    <Route path="add-app" element={<AddApp />} />
    <Route path="edit-app/:id" element={<EditApp />} />
    <Route path="activity" element={<Activities />}/>
  <Route
  path="suggestions"
  element={<Suggestions/>}
/>

<Route
  path="hire"
  element={<HireRequests />}
/>

<Route
  path="requests"
  element={<Requests />}
/>


  </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;