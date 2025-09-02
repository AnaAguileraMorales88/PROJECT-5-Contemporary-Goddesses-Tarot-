import axios from "axios";

const API_URL = "http://localhost:3001/cardspreads";

export const saveSpread = async (spread) => {
  return await axios.post(API_URL, spread);
};

export const getSpreads = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteSpread = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};

// 👉 Borrar todas las tiradas una a una
export const deleteAllSpreads = async () => {
  const spreads = await getSpreads();
  const deletePromises = spreads.map((s) => deleteSpread(s.id));
  await Promise.all(deletePromises);
};


