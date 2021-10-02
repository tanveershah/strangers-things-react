import axios from "axios";

const registerUser = async (url, username, password) => {
  try {
    const { data } = await axios.post(`${url}/users/register`, {
      user: {
        username,
        password,
      },
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export default registerUser;
