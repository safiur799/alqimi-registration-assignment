
import { AxiosResponse } from "axios";

import { apiEndpoints } from "../endpoints";

import {
  IRegistrationPayload,
  IRegistrationResponse,
} from "@/typescript/interface/apiresp.interfaces";
import axiosInstance from "../axiosinstance";

export const registerMutation = async (
  payload: IRegistrationPayload
): Promise<AxiosResponse<IRegistrationResponse>> => {
  const response = await axiosInstance.post<
    IRegistrationResponse,
    AxiosResponse<IRegistrationResponse>,
    IRegistrationPayload
  >(apiEndpoints.register, payload);

  return response;
};