import axios from "axios";

const http = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000
});

http.interceptors.request.use(
    config => {
      // 处理请求前的逻辑...
  
      return config
    },
    error => {
      // 请求错误处理
  
      return Promise.reject(error)
    }
  );

  http.interceptors.response.use(
    response => {
       // 处理响应数据
  
       return response
    },
    error => {
      // 处理响应错误
  
      return Promise.reject(error)
    }
  );

  export default http;