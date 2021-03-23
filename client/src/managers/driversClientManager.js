export const getAllDrivers = () => {
  return fetch('/drivers/').then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Failed fetching drivers');
    }
  });
};
