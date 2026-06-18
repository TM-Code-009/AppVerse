import api from "./api";

export const getActivities =
  async () => {
    const response =
      await api.get(
        "/activity"
      );

    return response.data.data;
  };

export const deleteActivity =
  async (
    id: string
  ) => {
    const response =
      await api.delete(
        `/activity/${id}`
      );

    return response.data;
  };

export const clearActivities =
  async () => {
    const response =
      await api.delete(
        "/activity"
      );

    return response.data;
  };