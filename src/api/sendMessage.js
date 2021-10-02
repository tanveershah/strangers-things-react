import axios from "axios";
import { getToken } from "../auth";

const sendMessage = async (url, postId, content) => {
  const token = getToken();

  try {
    const { data } = await axios.post(
      `${url}/posts/${postId}/messages`,
      {
        message: {
          content
        },
      },
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

export default sendMessage;
