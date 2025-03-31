import { axiosService as http } from "../common/httpCommon";

export const getAllGames = async () => {
  const result = await http.get("games");
  return result.data;
};
export const getGameById = async (id: number) => {
  const result = await http.get(`games/${id}`);
  return result.data;
};
