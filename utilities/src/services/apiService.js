import axios from 'axios';

// const apiService = axios.create({
//   baseURL: 'https://dragonball-api.com/api/characters',
//   timeout: 1000,
// });

// export default apiService;

const dragonballService = axios.create({
  baseURL: 'https://dragonball-api.com/api/characters',
  timeout: 1000,
});

const detallePersonajeService = axios.create({
  baseURL: 'https://dragonball-api.com/api/characters/1',
  timeout: 1000,
});

export { dragonballService, detallePersonajeService };