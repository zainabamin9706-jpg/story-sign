import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Ebbok from "../../assets/Ebbok.png";
import NavbarBP from "../navbarBP";
import SidebarBP from "../sidebarBP";

const EbookRequest = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Ebook Management">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
                <div className="w-full flex gap-2">
                  <div className="flex flex-row  justify-between text-right w-full">
                    <div className="flex gap-10 mt-3 ">
                      <img
                        src={Ebbok}
                        className="w-50 h-50 m-3 object-cover border border-[#FFEBBC]"
                      />
                      <div className=" flex flex-col ">
                        <div className="font-['Nunito'] font-semibold text-[19px] mt-1 text-[#FFEBBC]">
                          The Origin of Species
                        </div>
                        <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                          <div className="font-normal text-[12.5px] text-[#CCCCCC]">
                            Uploaded By:
                          </div>
                          <div className="font-bold text-[#FFEBBC] text-[16px]">
                            Aerna Dianal
                          </div>
                        </div>
                        <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                          <div className="font-normal text-[12.5px] text-[#CCCCCC]">
                            Signed By:
                          </div>
                          <div className="font-bold text-[#FFEBBC] text-[15px]">
                            Cordell Edwards
                          </div>
                        </div>
                        <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                          <div className="font-normal text-[12.5px] text-[#CCCCCC]">
                            Signed Date:
                          </div>
                          <div className="font-normal text-[#FFEBBC] text-[13px]">
                            22 June,2026
                          </div>
                        </div>
                        <div className="text-[#FFEBBC] mt-4 border text-[14px] px-3 py-1 bg-[#FFEBBC33] border-[#FFEBBC] rounded-md text-center w-20">
                          Signed
                        </div>
                      </div>
                    </div>
                    <div className="text-[#FFEBBC] bg-[#81401F] font-bold rounded-full h-8 w-8 p-2 mt-3 flex items-center">
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
                    personally signed your ebook and hope you enjoy reading it
                    as much as I enjoyed creating it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavbarBP>
      </div>
    </>
  );
};
export default EbookRequest;
