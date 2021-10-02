import axios from "axios";
import { getToken } from "../auth";

const AddPost = async (url, title, description, price) => {
  const token = getToken();

  try {
    const { data } = await axios.post(
      `${url}/posts`,
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

export default AddPost;
