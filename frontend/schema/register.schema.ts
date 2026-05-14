import { VALIDATION_MESSAGES } from "@/config/constants";
import { RegistrationFormData } from "@/typescript/form.types";
import * as yup from "yup";


export const registerSchema:yup.ObjectSchema<RegistrationFormData> = yup.object({
  email: yup
    .string()
    .required(VALIDATION_MESSAGES.emailRequired)
    .email(VALIDATION_MESSAGES.invalidEmail),

  firstName: yup
    .string()
    .required(VALIDATION_MESSAGES.firstNameRequired),

  lastName: yup
    .string()
    .required(VALIDATION_MESSAGES.lastNameRequired),

  password: yup
    .string()
    .required(VALIDATION_MESSAGES.passwordRequired)
    .min(6, VALIDATION_MESSAGES.passwordMin),

  confirmPassword: yup
    .string()
    .required(VALIDATION_MESSAGES.confirmPasswordRequired)
    .oneOf([yup.ref("password")], VALIDATION_MESSAGES.passwordNotMatch),

  organization: yup
    .string()
    .required(VALIDATION_MESSAGES.organizationRequired),

  phoneNumber: yup
    .string()
    .required(VALIDATION_MESSAGES.phoneRequired)
    .matches(/^[0-9+\-\s()]+$/, VALIDATION_MESSAGES.invalidPhone),

position: yup.string().optional(),
});