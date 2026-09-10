import { Burger, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import logo from "../assets/logo.png";
import person from "../assets/person.jpg";
interface NavbarBPProps {
  title: string;
  opened: boolean;
  toggle: () => void;
}
const NavbarBP = ({ title, opened, toggle }: NavbarBPProps) => {
  return (
    <>
      <div className="flex items-center w-full h-full">
        <img
          className="hidden sm:block w-16 sm:w-18 lg:w-28 h-auto mx-2 mt-1 flex-shrink-0"
          src={logo}
          alt="logo"
        />
        <nav className="flex items-center justify-between h-full w-full mx-4 min-w-0 lg:mx-6 font-['Nunito']">
          <div className="flex items-center gap-3">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color="#FFEBBC"
            />
            <h1 className="text-[#FFEBBC] text-[16px] sm:text-[20px] lg:text-[22px] font-bold tracking-wide w-full">
              {title}
            </h1>
          </div>
          <div className="flex gap-2 md:gap-5  items-center mr-2 lg:mr-6">
            <TextInput
              placeholder="Search"
              leftSection={<IconSearch size={13} stroke={1} />}
              radius="xl"
              className="w-28 sm:w-40 lg:w-50"
              styles={{
                input: {
                  height: 27,
                  minHeight: 27,
                  border: "1px solid #CCCCCC",
                  backgroundColor: "#313131",
                  fontSize: "10px",
                  color: "white",
                  paddingLeft: 28,
                  paddingRight: 8,
                },
              }}
            />

            <div className=" flex gap-2">
              <img
                className="rounded-full w-7 h-7  border border-[#CCCCCC]"
                src={person}
                alt="person"
              />
              <div className=" hidden sm:flex flex-col">
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
    </>
  );
};
export default NavbarBP;
