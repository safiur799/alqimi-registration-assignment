
import axios, { AxiosError, AxiosResponse } from "axios";
import { baseUrlApi } from "../endpoints";

export interface IBaseApiResponse {
  success?: boolean;
  statusCode?: number;
  message?: string;
}

const axiosInstance = axios.create({
  baseURL: baseUrlApi,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<IBaseApiResponse>) => response,
  (error: AxiosError<IBaseApiResponse>) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;