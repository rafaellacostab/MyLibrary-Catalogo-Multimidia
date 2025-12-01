import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getObras = () => api.get('/obras');
export const getObra = (id) => api.get(`/obras/${id}`);
export const createObra = (data) => api.post('/obras', data);
export const updateObra = (id, data) => api.put(`/obras/${id}`, data);
export const deleteObra = (id) => api.delete(`/obras/${id}`);
