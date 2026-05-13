import RegistrationForm from "@/components/form/RegistrationForm";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black" style={{
    backgroundImage: `url(/page_bg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  }}>
     <RegistrationForm/>
    </div>
  );
}
