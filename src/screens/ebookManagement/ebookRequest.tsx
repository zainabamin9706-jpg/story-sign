import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import { ebooks } from "./data/ebookData";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const EbookRequest = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const { id } = useParams();
  const ebook = ebooks.find((item) => item.id === id);
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
          <NavbarBP title="Ebook Management" opened={opened} toggle={toggle} />
        </AppShell.Header>
        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
            <div className="w-full flex gap-2">
              <div className="flex flex-row  justify-between text-right gap-2 w-full">
                <div className="flex gap-5 lg:gap-10 mt-3 ">
                  <img
                    src={ebook?.bookdetails.img}
                    className="w-30 h-30 lg:w-50 lg:h-50 m-1 lg:m-3 object-cover border border-[#FFEBBC]"
                  />
                  <div className=" flex flex-col ">
                    <div className="font-['Nunito'] font-semibold text-[14px] lg:text-[19px] mt-1 text-[#FFEBBC]">
                      {ebook?.bookdetails.name}
                    </div>
                    <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                      <div className="font-normal text-[10px] lg:text-[12.5px] text-[#CCCCCC]">
                        Uploaded By:
                      </div>
                      <div className="font-bold text-[#FFEBBC] text-[12px] lg:text-[16px]  ">
                        {ebook?.uploadedby.name}
                      </div>
                    </div>
                    <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                      <div className="font-normal text-[10px] lg:text-[12.5px] text-[#CCCCCC]">
                        Signed By:
                      </div>
                      <div className="font-bold text-[#FFEBBC] text-[12px] lg:text-[16px]  ">
                        {ebook?.uploadedby.name}
                      </div>
                    </div>
                    <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                      <div className="font-normal text-[10px] lg:text-[12.5px] text-[#CCCCCC]">
                        Signed Date:
                      </div>
                      <div className="font-normal text-[#FFEBBC] text-[12px] lg:text-[16px] ">
                        {ebook?.date}
                      </div>
                    </div>
                    <div
                      className={`mt-4 border text-[12px] lg:text-[14px] px-1.5 lg:px-3 py-0.5 lg:py-1 rounded-md text-center w-20 ${
                        ebook?.status === "Signed"
                          ? "text-[#08BF0E] bg-[#08BF0E33] border-[#08BF0E]"
                          : "text-[#FFEBBC] bg-[#FFEBBC33] border-[#FFEBBC]"
                      }`}
                    >
                      {ebook?.status}
                    </div>
                  </div>
                </div>
                <div className="text-[#FFEBBC] bg-[#81401F] font-bold rounded-full h-6.5 w-6.5 lg:h-8 lg:w-8 p-1 lg:p-2 mt-3 flex items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/ebook-management");
                    }}
                  >
                    <RiDeleteBinLine className=" size-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-7 m-3 flex flex-col  font-['Nunito']  pt-1 w-full h-auto">
              <div className="text-[#FFEBBC] font-bold text-[15px] tracking-wide font-['Nunito']">
                Reader Message:
              </div>
              <div className="text-[#CCCCCC] text-[13px] font-normal mt-2 ">
                I really enjoyed reading your book and would love to receive
                your signature on my ebook. Your work has been incredibly
                inspiring, and it would mean a lot to have a personalized
                autograph from you.
              </div>
            </div>
            <div className="mt-7 m-3 flex flex-col  font-['Nunito']  pt-1 w-full h-auto">
              <div className="text-[#FFEBBC] font-bold text-[15px] tracking-wide font-['Nunito']">
                Author Message:
              </div>
              <div className="text-[#CCCCCC] text-[13px] font-normal mt-2 mb-5">
                Thank you for your support and for choosing my book. I've
                personally signed your ebook and hope you enjoy reading it as
                much as I enjoyed creating it.
              </div>
            </div>
          </div>
        </AppShell.Main>
      </AppShell>
    </>
  );
};
export default EbookRequest;
