import axios from 'axios';

const API_URL = 'http://localhost:9191';

export const getProducts = () => axios.get(`${API_URL}/products`);
export const registerUser = (userData) => axios.post(`${API_URL}/users/user`, userData);
