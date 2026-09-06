import React from "react";
import { TextInput } from "@mantine/core";
import logo from "../assets/logo.png";
import person from "../assets/person.jpg";
import { IconSearch } from "@tabler/icons-react";
interface NavbarBPProps {
  Title: string;
  children: React.ReactNode;
}
const NavbarBP = ({ Title, children }: NavbarBPProps) => {
  return (
    <>
      <div className="flex gap-7 ">
        <img
          className="w-18 md:w-15 lg:w-23 h-auto ml-2 mt-1"
          src={logo}
          alt="logo"
        />
        <nav className="mt-6 mx-4 md:mx-8 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
          <h1 className="text-[#FFEBBC] text-[22px] font-bold tracking-wide">
            {Title}
          </h1>

          <div className="flex gap-5 mr-6 ">
            <TextInput
              placeholder="Search"
              leftSection={<IconSearch size={13} stroke={1} />}
              radius="xl"
              w={200}
              styles={{
                input: {
                  height: 23,
                  border: "1px solid #CCCCCC",
                  backgroundColor: "#313131",
                  fontSize: "12px",
                  color: "white",
                },
              }}
            />

            <div className=" flex gap-2">
              <img
                className="rounded-full w-7 h-7  border border-[#CCCCCC]"
                src={person}
                alt="person"
              />
              <div className=" flex flex-col">
                <div className="font-Poppins font-light text-xs text-[#CCCCCC] flex-col">
                  John ibrahim
                </div>
                <div className="font-Poppins font-light text-[10px]  text-[#CCCCCC] flex-col">
                  john@gmail.com
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {children}
    </>
  );
};
export default NavbarBP;
