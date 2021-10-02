import axios from "axios";
import { getToken } from "../auth";

const getPosts = async (url) => {
  const token = getToken();

  try {
    const { data } = await axios.get(`${url}/posts`, {
      headers: {
        "auth-token": token,
      },
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export default getPosts;
