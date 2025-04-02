import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getProducts = () => axios.get(`${API_URL}/products`);
export const registerUser = (userData) => axios.post(`${API_URL}/users/register`, userData);
