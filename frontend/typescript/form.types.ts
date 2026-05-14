export interface RegistrationFormData {
  email: string;
  firstName: string;
  password: string;
  lastName: string;
  confirmPassword: string;
  organization: string;
  phoneNumber: string;
  position?: string;
}