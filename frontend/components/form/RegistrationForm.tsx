import Image from "next/image";
import { FormInput } from "./FormInput";
import logo from '@/public/logo.png'

const RegistrationForm =()=>{
    return (
        <div className="flex min-h-screen items-center justify-center w-full">
           <form action="" className="p-8 bg-white/70 md:bg-white shadow-2xl rounded-lg border border-[#62606052] max-w-200 w-full">
            <div className="flex items-center justify-center p-4 mb-5">
                <Image src={logo} alt="logo" width={400} height={300} className="w-50"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <FormInput label="Email Adress *" placeholder="Email" type="email"/>
               <FormInput label="Password *" placeholder="Password" type="password"/>
                <FormInput label="Email Adress *" placeholder="Email" type="email"/>
               <FormInput label="Password *" placeholder="Password" type="password"/>
                <FormInput label="Email Adress *" placeholder="Email" type="email"/>
               <FormInput label="Password *" placeholder="Password" type="password"/> <FormInput label="Email Adress *" placeholder="Email" type="email"/>
               <FormInput label="Password *" placeholder="Password" type="tel"/>
            </div>

            <button type="submit" className="w-full mt-4 disabled:opacity-60 bg-orange-600 rounded-xl py-3 px-5 text-md font-semibold text-white">
                Submit
            </button>
           </form>

        </div>
    )
}

export default RegistrationForm;



