'use client'
import {  useState } from "react";
import { EyeIcon } from "./Icons/EyeIcon";
import { EyeOffIcon } from "./Icons/EyeOffIcon";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;

}
export const FormInput = ({ label, ...props }: FormInputProps) => {

    const isPassword = props.type === 'password'

    const [show, setshow] = useState(false)

    return <div className="flex flex-col gap-1 relative">
        <label htmlFor="email" className="text-base">{label}</label>
        <input className="px-5 py-3 rounded-md border bg-white border-gray-400 shadow-md text-sm" {...props}  type={show ? "text" : props.type} />

        {isPassword && <i className="leading-0 absolute top-1/2  right-3 cursor-pointer bg-white px-0.5" onClick={() => setshow(!show)}>
            {
                show ? <EyeIcon /> : <EyeOffIcon />
            }

        </i>}
    </div>

}