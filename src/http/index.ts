import axios from "axios";

const http = axios.create({
  baseURL: "http://192.168.0.110/api-coliseu/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Interceptor de requisição
http.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");
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
    const token = sessionStorage.getItem("token");
    if (token) {
      // Aqui você pode tratar os erros de resposta
      if (error.response) {
        // O servidor respondeu com um status de erro
        console.error(error.response.data.error);
        // Desloga o usuário
        sessionStorage.removeItem("token");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default http;
