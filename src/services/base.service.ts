import axios from "axios";

import { Constant } from "../common/Constant";

export const httpClient = axios.create({
  baseURL: Constant.BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(Constant.KEY_TOKEN)}`,
  },
});
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) return; // check network
    const statusCode = error.response.status;
    if (statusCode === 401 || statusCode === 403) {
      // handle is here or redirect to login page
      return;
    }
  }
);
