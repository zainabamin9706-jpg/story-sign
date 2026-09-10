import { useParams } from "react-router-dom";
import Ebbok from "../../assets/Ebbok.png";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import { requests } from "./data/requestData";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const Request = () => {
  const { id } = useParams();
  const [opened, { toggle }] = useDisclosure();
  const request = requests.find((request) => request.id.toString() === id);
  if (!request) {
    return <div>Request not found</div>;
  }
  return (
    <>
      <AppShell
        className="mt-1"
        h="100vh"
        header={{ height: 90 }}
        navbar={{
          width: {
            base: "33.33%",
            sm: 140,
          },
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding={0}
        withBorder={false}
        styles={{
          main: {
            backgroundColor: "#313131",
          },
          header: {
            backgroundColor: "#313131",
          },
          navbar: {
            backgroundColor: "#313131",
          },
        }}
      >
        <AppShell.Header className="bg-[#313131]">
          <NavbarBP title={`Request: ${id}`} opened={opened} toggle={toggle} />
        </AppShell.Header>

        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-row  justify-between text-right gap-2 w-full">
                <div className="flex gap-5 lg:gap-10 mt-3 ">
                  <img
                    src={Ebbok}
                    className="w-30 h-30 lg:w-50 lg:h-50 m-1 lg:m-3 object-cover border border-[#FFEBBC]"
                  />
                  <div className=" flex flex-col ">
                    <div className="font-['Nunito'] font-semibold text-[14px] lg:text-[19px] mt-1 text-[#FFEBBC]">
                      The Origin of Species
                    </div>
                    <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                      <div className="font-normal text-[11px] lg:text-[12.5px] text-[#CCCCCC]">
                        Reader:
                      </div>
                      <div className="font-bold text-[#FFEBBC] text-[12px] lg:text-[16px]  ">
                        {request.reader.name}
                      </div>
                    </div>
                    <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                      <div className="font-normal text-[11px] lg:text-[12.5px] text-[#CCCCCC]">
                        Author:
                      </div>
                      <div className="font-bold text-[#FFEBBC] text-[12px] lg:text-[16px]  ">
                        {request.author.name}
                      </div>
                    </div>
                    <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                      <div className="font-normal text-[11px] lg:text-[12.5px] text-[#CCCCCC] w-auto">
                        Requested Date:
                      </div>
                      <div className="font-bold text-[#FFEBBC] text-[12px] lg:text-[16px] w-full ">
                        {request.date}
                      </div>
                    </div>
                    <div
                      className={`mt-4 border text-[12px] lg:text-[14px] px-1.5 lg:px-3 py-0.5 lg:py-1 rounded-md text-center w-20 
                          ${
                            request.status === "Pending"
                              ? "text-[#FFEBBC] bg-[#FFEBBC33] border-[#FFEBBC]"
                              : request.status === "Delivered"
                                ? "text-[#08BF0E] bg-[#0C884C33] border-[#08BF0E]"
                                : "text-[#D92828] bg-[#D928281A] border-[#D92828]"
                          }
                        `}
                    >
                      {request.status}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-7 m-3 flex flex-col  font-['Nunito']  pt-1 w-full h-auto">
                <div className="text-[#FFEBBC] font-bold text-[15px] tracking-wide font-['Nunito']">
                  Reader Message:
                </div>
                <div className="text-[#CCCCCC] text-[13px] font-normal mt-2 mb-15">
                  I really enjoyed reading your book and would love to receive
                  your signature on my ebook. Your work has been incredibly
                  inspiring, and it would mean a lot to have a personalized
                  autograph from you.
                </div>
              </div>
            </div>
          </div>
        </AppShell.Main>
      </AppShell>
    </>
  );
};
export default Request;
