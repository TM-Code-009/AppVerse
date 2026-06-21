import { create } from "zustand";

interface UserAuthStore {
  token: string | null;

  setToken: (
    token: string
  ) => void;

  logout: () => void;
}

export const useUserAuthStore =
  create<UserAuthStore>(
    (set) => ({
      token:
        localStorage.getItem(
          "userToken"
        ),

      setToken: (
        token
      ) => {
        localStorage.setItem(
          "userToken",
          token
        );

        set({
          token,
        });
      },

      logout: () => {
        localStorage.removeItem(
          "userToken"
        );

        set({
          token: null,
        });
      },
    })
  );