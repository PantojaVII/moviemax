 
import axios from "axios";
  
const http = axios.create({
  
  baseURL: "http://192.168.0.113:8000/",
   
  headers: {
    Accept: "application/json",  
    "Content-Type": "application/json", 
  },
});

http.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");
    
    if (token && config.headers) {
     
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  function (error) {
  }
);

 
export default http;
 
