'use client'

import Image from "next/image";
import { FormInput } from "./FormInput";
import logo from "@/public/logo.png";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "@/schema/register.schema";
import { RegistrationFormData } from "@/typescript/form.types";
import { AuthHooks } from "@/api/hooks/register/registerhook";



const RegistrationForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

 
const { mutate, isPending } = AuthHooks.useRegister();

const onSubmit = (data: RegistrationFormData) => {
  mutate(data, {
    onSuccess: (response) => {
      console.log("Registration Success", response.data);

      reset();
    },

    onError: (error) => {
      console.log("Registration Error", error.response?.data);
    },
  });
};

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 bg-white/70 md:bg-white shadow-2xl rounded-lg border border-[#62606052] max-w-[800px] w-full"
      >
        <div className="flex items-center justify-center p-4 mb-5">
          <Image
            src={logo}
            alt="logo"
            width={400}
            height={300}
            className="w-50"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <FormInput
            label="Email Address *"
            placeholder="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />

          <FormInput
            label="First Name *"
            placeholder="First Name"
            type="text"
            {...register("firstName")}
            error={errors.firstName?.message}
          />

          <FormInput
            label="Password *"
            placeholder="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />

          <FormInput
            label="Last Name *"
            placeholder="Last Name"
            type="text"
            {...register("lastName")}
            error={errors.lastName?.message}
          />

          <FormInput
            label="Confirm Password *"
            placeholder="Confirm Password"
            type="password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <FormInput
            label="Organization *"
            placeholder="Organization"
            type="text"
            {...register("organization")}
            error={errors.organization?.message}
          />

          <FormInput
            label="Phone Number *"
            placeholder="Phone Number with country code"
            type="tel"
            {...register("phoneNumber")}
            error={errors.phoneNumber?.message}
          />

          <FormInput
            label="Position "
            placeholder="Position"
            type="text"
            {...register("position")}
            error={errors.position?.message}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 disabled:opacity-60 bg-orange-600 rounded-xl py-3 px-5 text-md font-semibold text-white"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;