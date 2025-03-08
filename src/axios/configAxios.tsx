import axios from 'axios';

// Création d'une instance Axios avec la base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Définir l'URL de l'API
  timeout: 10000, // Timeout de 10 secondes
  headers: {
    'Content-Type': 'application/json', // Type de contenu JSON par défaut
  },
});

// Intercepteur pour ajouter le token JWT à chaque requête (si disponible)
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Récupérer le token JWT du localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Ajouter le token dans l'en-tête
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
