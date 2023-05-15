const API_SERVER = "http://localhost:8080";

export const getProducts = () => {
  return fetch(`${API_SERVER}/products`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getProductById = (id) => {
  return fetch(`${API_SERVER}/products/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
