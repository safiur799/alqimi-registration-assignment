
export interface IRegistrationPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  organization: string;
  phoneNumber: string;
  position?: string;
}

export interface IUserData {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IRegistrationResponse {
  success: boolean;
  message: string;
  data: IUserData;
}