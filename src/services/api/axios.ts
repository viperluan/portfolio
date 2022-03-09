import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.GITHUB_URL,
  headers: {
    Authorization: `Token ${process.env.GITHUB_TOKEN}`,
  },
});

export default axiosInstance;
