import axios from "axios";
import { getToken } from "../auth";

const deletePost = async (url, postId) => {
  const token = getToken();

  try {
    const { data } = await axios.delete(`${url}/posts/${postId}`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    console.error(error.message);
  } finally {
    location.reload();
  }
};

export default deletePost;
