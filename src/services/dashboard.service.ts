import api from "./api";

export const getStats =
  async () => {
    const res =
      await api.get(
        "/dashboard/stats"
      );

    return res.data.data;
  };

export const getActivities =
  async () => {
    const res =
      await api.get(
        "/dashboard/recent-activity"
      );

    return res.data.data;
  };