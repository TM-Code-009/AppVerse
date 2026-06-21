import { create } from "zustand";

interface AdminAuthStore {
  token: string | null;

  setToken: (
    token: string
  ) => void;

  logout: () => void;
}

export const useAdminAuthStore =
  create<AdminAuthStore>(
    (set) => ({
      token:
        localStorage.getItem(
          "adminToken"
        ),

      setToken: (
        token
      ) => {
        localStorage.setItem(
          "adminToken",
          token
        );

        set({
          token,
        });
      },

      logout: () => {
        localStorage.removeItem(
          "adminToken"
        );

        set({
          token: null,
        });
      },
    })
  );