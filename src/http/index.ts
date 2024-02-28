import axios from "axios";

const http = axios.create({
  /* baseURL: "https://192.168.0.110/api-coliseu/", */
  baseURL: "https://coliseu.bitware.tec.br/api-coliseu/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Interceptor de requisição
http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token_moviemax");
    if (token && config.headers) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Interceptor de resposta
http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const token = localStorage.getItem("token_moviemax");
    if (token) {
      // Aqui você pode tratar os erros de resposta
      if (error.response) {
        // O servidor respondeu com um status de erro
        console.error(error.response.data.error);
        // Desloga o usuário
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default http;
