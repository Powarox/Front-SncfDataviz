import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://138.68.74.39/api/",
  headers: {
    "Content-Type": "application/json",
    // anything you want to add to the headers
  },
});

const getAuthToken = () => localStorage.getItem("token");

const authInterceptor = (config) => {
  config.headers["Authorization"] = "Bearer " + getAuthToken();
  return config;
};

httpClient.interceptors.request.use(authInterceptor);

export default httpClient;
