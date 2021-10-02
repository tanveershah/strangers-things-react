import axios from "axios";
import { getToken } from "../auth";

const editPost = async (url, title, description, price, postId) => {
  const token = getToken();

  try {
    const { data } = await axios.put(
      `${url}/posts/${postId}`,
      {
        post: {
          title,
          description,
          price,
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

export default editPost;
