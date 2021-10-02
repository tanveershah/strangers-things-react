export const storeToken = (token) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem("token"));
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
