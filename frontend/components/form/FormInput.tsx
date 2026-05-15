'use client'

import React, { useState } from "react";
import { EyeIcon } from "./Icons/EyeIcon";
import { EyeOffIcon } from "./Icons/EyeOffIcon";

interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = ({
  label,
  error,
  ...props
}: FormInputProps) => {

  const isPassword = props.type === "password";

  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1 relative">

      <label
        htmlFor={props.name}
        className="text-base text-black font-medium"
      >
        {label}
      </label>

      <input
        {...props}
        type={show ? "text" : props.type}
        className={`
          px-5 py-3 pr-12 rounded-md border bg-white
          shadow-md text-sm outline-none text-black
          placeholder:text-gray-500 placeholder:font-normal
          focus:border-orange-500 transition-all duration-200
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute right-4 top-1/2 
            text-gray-500 hover:text-black
            transition-colors duration-200
            cursor-pointer
          "
        >
          {show ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      )}

      {error && (
        <span className="text-red-500 text-sm mt-1">
          {error}
        </span>
      )}

    </div>
  );
};