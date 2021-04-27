import axios from 'axios';

const API = axios.create({ baseURL: 'https://big-market-place.herokuapp.com/'})

export const fetchProducts = () => API.get('/products');
export const addProduct = (newProduct) => API.post('/products', newProduct);
export const updateProduct = (id, updateProduct ) =>  API.patch(`/products/${id}`, updateProduct);
export const deleteProduct = (id) => API.delete(`/products/${id}`);


export const signIn  = (formData) => API.post('/user/signin', formData)
export const signUp  = (formData) => API.post('/user/signup', formData)


export const fetchSellerDetail = (username) => API.post(`/seller/get`, username);
export const addSellerDetail = (newSeller) => API.post('/seller/post', newSeller);
export const updateSellerDetail = (id, updateSeller ) =>  API.patch(`/seller/${id}`, updateSeller);


export const getAllSeller = () => API.get('/sellerdetail');
export const getEachSellerDetail = (username) => API.post(`/sellerdetail/getall`, username);