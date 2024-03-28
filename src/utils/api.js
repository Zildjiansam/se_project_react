// A POST, PUT or PATCH request should include a "Content-Type: application/json" header to use the JSON in the request body. Otherwise it will return a 2XX status code, but without changes being made to the data.

const baseUrl = "http://localhost:3001";

const fetchHeaders = { "Content-Type": "application/json" };

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getClothingItems = () => {
  return fetch(`${baseUrl}/items`, {
    headers: fetchHeaders,
  }).then(checkResponse);
};

export const addClothingItem = ({ name, imageUrl, weather }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: fetchHeaders,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
};

export const deleteClothingItem = () => {
  return fetch(`${baseUrl}/items`, {
    method: "DELETE",
    headers: fetchHeaders,
  }).then(checkResponse);
};
