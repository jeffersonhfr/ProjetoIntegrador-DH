const key = 'checkout';
const checkout = {
  getData: () => {
    return localStorage.getItem(key);
  },
  setData: (Data) => {
    return localStorage.setItem(key, Data);
  },
  removeData: () => {
    return localStorage.removeItem(key);
  },
};
export default checkout;
