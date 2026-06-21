import {
  Navigate,
  Outlet,
} from "react-router-dom";

export default function UserProtectedRoute() {
  const token =
    localStorage.getItem(
      "userToken"
    );

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return <Outlet />;
}