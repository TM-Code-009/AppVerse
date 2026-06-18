import api from "./api";

export const getSuggestions =
  async () => {
    const response =
      await api.get(
        "/suggestions"
      );

    return response.data.data;
  };