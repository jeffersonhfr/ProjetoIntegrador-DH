const key = 'aula@user-2022';
const user = {
  getUser: () => {
    return JSON.parse(localStorage.getItem(key));
  },
  setUser: (user) => {
    return localStorage.setItem(key, JSON.stringify(user));
  },
  removeUser: () => {
    return localStorage.removeItem(key);
  },
};
export default user;
