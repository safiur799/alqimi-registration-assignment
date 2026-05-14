
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

import { registerMutation } from "@/api/functions/user.api";

import {
  IRegistrationPayload,
  IRegistrationResponse,
} from "@/typescript/interface/apiresp.interfaces";

const useRegister = () => {
  return useMutation<
    AxiosResponse<IRegistrationResponse>,
    AxiosError,
    IRegistrationPayload
  >({
    mutationFn: registerMutation,
  });
};

export const AuthHooks = {
  useRegister,
};