import axios from "axios";

const loginUser = async (url, username, password) => {
  try {
    const { data } = await axios.post(`${url}/users/login`, {
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

export default loginUser;
