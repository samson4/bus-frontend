import axios from "axios";



export default defineNuxtPlugin(() => {
  const envConfig = useRuntimeConfig();
  (axios.defaults.baseURL = envConfig.public.BACKEND_URL),
    axios.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        if (localStorage.getItem("token")) {
          axios.defaults.headers.common["Authorization"] =
            `Bearer ${localStorage.getItem("token")}`;
          config.headers["Authorization"] =
            `Bearer ${localStorage.getItem("token")}`;
        }
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      },
    );
  axios.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response.data;
    },
    (error) => {
      // Do something with response error
      const code = parseInt(error.response && error.response.status);
      if (code >= 500 && code <= 550) {
        console.log("Server Error");
      } else {
        alert("Error");
      }
    },
  );
});
