import { useParams } from "react-router-dom";
import Ebbok from "../../assets/Ebbok.png";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import { requests } from "./data/requestData";
const Request = () => {
  const { id } = useParams();
  const request = requests.find((request) => request.id.toString() === id);
  if (!request) {
    return <div>Request not found</div>;
  }
  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title={`Request: ${id}`}>
          <div className="flex flex-row gap-8 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-9 items-center">
              <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
                <div className="w-full flex gap-2">
                  <div className="flex gap-10 ">
                    <img
                      src={Ebbok}
                      className="w-50 h-50 m-3 object-cover border border-[#FFEBBC]"
                    />
                    <div className=" flex flex-col ">
                      <div className="font-['Nunito'] font-semibold text-[19px] mt-1 text-[#FFEBBC]">
                        The Origin of Species
                      </div>
                      <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                        <div className="font-normal text-[12px] text-[#CCCCCC]">
                          Reader:
                        </div>
                        <div className="font-bold text-[#FFEBBC] text-[16px]">
                          {request.reader.name}
                        </div>
                      </div>
                      <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                        <div className="font-normal text-[12px] text-[#CCCCCC]">
                          Author:
                        </div>
                        <div className="font-bold text-[#FFEBBC] text-[15px]">
                          {request.author.name}
                        </div>
                      </div>
                      <div className="font-['Nunito'] flex gap-5 items-center  mt-5">
                        <div className="font-normal text-[12px] text-[#CCCCCC]">
                          Requested Date:
                        </div>
                        <div className="font-normal text-[#FFEBBC] text-[13px]">
                          {request.date}
                        </div>
                      </div>
                      <div
                        className={`mt-4 border text-[14px] px-3 py-1 rounded-md text-center w-24
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
          </div>
        </NavbarBP>
      </div>
    </>
  );
};
export default Request;
