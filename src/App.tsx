import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
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
import AppsPage from "./components/apps/AppsPage";
import DeveloperProfile from "./pages/DeveloperProfile";
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import Logins from "./pages/Logins";
import Register from "./pages/Register";

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

        {/* <Route
  path="/request/:id"
  element={<RequestAccess />}
/> */}

        <Route
  path="/app/:id"
  element={<AppDetails />}
/>

<Route
  path="/apps"
  element={<AppsPage />}
/>

<Route
  path="/developer/:id"
  element={<DeveloperProfile />}
/>

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route
  path="/login"
  element={<Logins />}
/>

<Route
  path="/register"
  element={<Register />}
/>

        <Route element={<AdminProtectedRoute />}>
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

        {/* <Route
  element={
    <UserProtectedRoute />
  }
>
  <Route
    path="/dashboard"
    element={
      <DeveloperDashboard />
    }
  />

  <Route
    path="/my-apps"
    element={<MyApps />}
  />

  <Route
    path="/saved-apps"
    element={<SavedApps />}
  />

  <Route
    path="/settings"
    element={<ProfileSettings />}
  />
        </Route> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;