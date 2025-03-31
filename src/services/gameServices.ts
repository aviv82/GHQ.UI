import { axiosService as http } from "../common/httpCommon";

export const getHealth = async () => {
  const result = await http.get("games");
  return result;
};
