import api from "./api";

export const getHires =
  async () => {
    const response =
      await api.get("/hire");

    return response.data.data;
  };