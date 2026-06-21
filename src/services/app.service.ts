import api from "./api";

export const getApps =
  async () => {
    const response =
      await api.get("/apps");

    return response.data.data;
  };

export const incrementClick =
  async (id: string) => {
    await api.patch(
      `/apps/${id}/click`
    );
  };


export const deleteApp =
  async (id: string) => {
    const res =
      await api.delete(
        `/apps/${id}`
      );

    return res.data;
  };


export const getApp =
  async (id: string) => {
    const res =
      await api.get(
        `/apps/${id}`
      );

    return res.data.data;
  };

export const updateApp =
  async (
    id: string,
    data: FormData
  ) => {
    const res =
      await api.patch(
        `/apps/${id}`,
        data
      );

    return res.data;
  };

  export const getFeaturedApps =
  async () => {
    const res =
      await api.get(
        "/apps/featured"
      );

    return res.data.data;
  };