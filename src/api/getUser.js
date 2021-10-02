import axios from "axios";
import { getToken } from "../auth";

const getUser = async (url) => {
  const token = getToken();

  try {
    const { data } = await axios.get(
      `${url}/users/me`,
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export default getUser;
