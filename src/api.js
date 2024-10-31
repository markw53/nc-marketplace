import axios from 'axios';

const BASE_URL = 'https://nc-marketplace-2-g51j.onrender.com/api';

export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

export const fetchItems = async () => {
  const response = await axios.get(`${BASE_URL}/items`);
  return response.data; // Assuming the response data structure matches your example
};

export const fetchItemsByCategory = async (category_name) => {
  const response = await axios.get(`${BASE_URL}/items?category_name=`, {
    params: { category_name }
    });
    return response.data;
};

export const createUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/users`, userData);
  return response.data;
};

export const placeOrder = async (orderData) => {
  const response = await axios.post(`${BASE_URL}/orders`, orderData);
  return response.data;
};

export const fetchOrderHistory = async (userId) => {
  const response = await axios.get(`${BASE_URL}/orders?user=${userId}`);
  return response.data;
};

export const addKudos = async (kudosData) => {
  const response = await axios.post(`${BASE_URL}/kudos`, kudosData);
  return response.data;
};

export const postItem = async (itemData) => {
  const response = await axios.post(`${BASE_URL}/items`, itemData);
  return response.data;
};


  
