const key = "aula@token-2022";
const auth = {
  getToken: () => {
    return localStorage.getItem(key);
  },
  setToken: (token) => {
    return localStorage.setItem(key, token);
  },
  removeToken: () => {
    return localStorage.removeItem(key);
  },
};
export default auth;
