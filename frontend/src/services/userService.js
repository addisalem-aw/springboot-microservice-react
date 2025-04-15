import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL; // Adjust to your backend

 export const getUsers = async () => {
   const response = await axios.get(`${API_URL}/users`);
   return response.data;
 };

export const addUser = async (user) => {
  console.log("URLLLLLLL"+API_URL);
  await axios.post(`${API_URL}/users/user`, user);
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/users/${id}`);
};
