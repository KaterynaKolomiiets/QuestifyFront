import axios from "axios";
const api = axios.create({
  withCredentials: true,
  baseURL: "http://questify-project.herokuapp.com/api/users",
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config.secondTime
    ) {
      originalRequest.secondTime = true;
      try {
        const response = await axios.get(
          "http://questify-project.herokuapp.com/api/users",
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("token", response.data.accessToken);
        return api.request(originalRequest);
      } catch (e) {
        console.log("Not Authorized");
      }
    }
    throw error;
  }
);

export default api;
