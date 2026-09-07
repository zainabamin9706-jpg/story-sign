import { ReactNode } from "react";
import logo from "../assets/logo.png";
import Background from "../assets/Background.jpg";
interface BluePrintProps {
  children: ReactNode;
}
const BluePrint = ({ children }: BluePrintProps) => {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <img
          src={Background}
          alt="Background"
          className=" absolute inset-0 h-full w-full object-cover opacity-82"
        />
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute top-4 left-4 bottom-3 sm:bottom-0 sm:top-5 sm:left-6 z-10">
          <img
            src={logo}
            alt="logo"
            className="w-43 sm:w-44 md:w-58 lg:w-64 h-auto"
          />
        </div>
        <div className=" relative flex min-h-screen items-center justify-center mt-12 sm:mt-0 md:justify-end md:pr-30 lg:pr-40 px-4 sm:px-8 py-6 sm:py-8 z-20">
          <div className="bg-[#202020] w-full max-w-sm font-['Nunito'] h-[450px] rounded-xl px-10 sm:py-7 sm:px-8 shadow-[0_0_30px_rgba(255,235,188,0.2)]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BluePrint;
