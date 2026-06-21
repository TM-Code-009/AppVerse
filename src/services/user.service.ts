import api from "./api";

export const getDevelopers =
  async () => {
    const res =
      await api.get(
        "/users/developers"
      );

    return res.data.data;
  };

export const getDeveloper =
  async (
    id: string
  ) => {
    const res =
      await api.get(
        `/users/developer/${id}`
      );

    return res.data.data;
  };

export const followDeveloper =
  async (
    id: string
  ) => {
    const res =
      await api.post(
        `/users/follow/${id}`
      );

    return res.data;
  };

 export const updateProfile =
  async (
    data: FormData
  ) => {
    const res =
      await api.patch(
        "/users/profile",
        data
      );

    return res.data.data;
  };


export const registerUser =
  async (data: any) => {
    const res =
      await api.post(
        "/auth/register",
        data
      );

    return res.data;
  };

export const loginUser =
  async (data: any) => {
    const res =
      await api.post(
        "/auth/login",
        data
      );

    return res.data;
  };