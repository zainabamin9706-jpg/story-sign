import { Button, Menu, Pagination, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { IoFunnelOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import booklist from "../../assets/booklist.png";
import listcancel from "../../assets/listcancel.png";
import signedbook from "../../assets/signedbook.png";
import unsignedbook from "../../assets/unsignedbook.png";
import CardLayout from "../cardLayout";
import NavbarBP from "../navbarBP";
import SidebarBP from "../sidebarBP";
import { ebooks } from "./data/ebookData";
import { Ebooks } from "./types/Ebooks";
const EbookManagement = () => {
  const [ebookList, setEbookList] = useState<Ebooks[]>(ebooks);
  const [search, setSearch] = useState("");
  const getStatus = (status: Ebooks["status"]) => {
    if (status === "Signed") {
      return " border border-[#08BF0E] text-[#08BF0E] bg-[#0C884C33]";
    }

    if (status === "Unsigned") {
      return " border border-[#FFEBBC] text-[#FFEBBC] bg-[#FFEBBC33]";
    }
    return "border border-[#D92828] text-[#D92828] bg-[#D928281A]";
  };
  const [filters, setFilters] = useState<Ebooks["status"] | "All">("All");
  const filteredEbooks = ebookList.filter((ebook) => {
    const matchesSearch =
      `${ebook.bookdetails.name}${ebook.uploadedby.name}${ebook.date}${ebook.status}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesFilter = filters === "All" || ebook.status === filters;
    return matchesSearch && matchesFilter;
  });
  const totalEbooks = ebookList.length;
  const SignedEbooks = ebookList.filter(
    (ebook) => ebook.status === "Signed",
  ).length;
  const UnsignedEbooks = ebookList.filter(
    (ebook) => ebook.status === "Unsigned",
  ).length;
  const RejectedEbooks = ebookList.filter(
    (ebook) => ebook.status === "Rejected",
  ).length;

  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="EBook Management">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black mb-4 gap-1 sm:gap-2 md:gap-3 w-auto ">
                  <CardLayout
                    title=" Total Books"
                    value={totalEbooks}
                    icon={<img src={booklist} className="size-4.5" />}
                    percentage="+15%"
                    isIncreasing={true}
                    linkText=""
                    Link=""
                  />
                  <CardLayout
                    title=" Signed Books"
                    value={SignedEbooks}
                    icon={<img src={signedbook} className="size-4.5" />}
                    percentage="-3.5%"
                    isIncreasing={false}
                    linkText=""
                    Link="#"
                  />

                  <CardLayout
                    title=" Unsigned Books"
                    value={UnsignedEbooks}
                    icon={<img src={unsignedbook} className="size-6" />}
                    percentage="-3.5%"
                    isIncreasing={true}
                    linkText=""
                    Link="#"
                  />
                  <CardLayout
                    title="  Rejected Books"
                    value={RejectedEbooks}
                    icon={<img src={listcancel} className="size-5" />}
                    percentage="+5%"
                    isIncreasing={true}
                    linkText=""
                    Link="#"
                  />
                </div>
                <div className="mt-6 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
                  <div className="text-[#FFEBBC] font-bold text-[19px] font-['Nunito'] mb-5">
                    All Ebooks
                  </div>
                  <div className="flex gap-5 mr-6 ">
                    <TextInput
                      placeholder="Search"
                      value={search}
                      onChange={(event) => setSearch(event.currentTarget.value)}
                      leftSection={<IconSearch size={14} stroke={2} />}
                      radius="xl"
                      w={200}
                      size="xs"
                      styles={{
                        input: {
                          height: 28,
                          backgroundColor: "#313131",
                          fontSize: "13px",
                          color: "#FEF4E5",
                          border: "none",
                        },
                      }}
                    />
                    <Menu width={200}>
                      <Menu.Target>
                        <Button
                          variant="filled"
                          radius="xl"
                          size="sm"
                          styles={{
                            root: {
                              height: 28,
                              backgroundColor: "#313131",
                              fontSize: "13px",
                              color: "#FEF4E5",
                              border: "none",
                            },
                          }}
                        >
                          <div className=" flex gap-2 text-[#FEF4E5] font-normal">
                            <div>
                              <IoFunnelOutline />
                            </div>
                            <div> Filter</div>
                          </div>{" "}
                        </Button>
                      </Menu.Target>

                      <Menu.Dropdown>
                        <Menu.Label>Filters</Menu.Label>

                        <Menu.Item onClick={() => setFilters("All")}>
                          All
                        </Menu.Item>

                        <Menu.Item onClick={() => setFilters("Signed")}>
                          Signed
                        </Menu.Item>

                        <Menu.Item onClick={() => setFilters("Unsigned")}>
                          Unsigned
                        </Menu.Item>
                        <Menu.Item onClick={() => setFilters("Rejected")}>
                          Rejected
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </div>
                </div>
                <div className="overflow-x-auto mt-3">
                  <table className=" w-full min-w-225 text-left font-['Nunito']">
                    <thead>
                      <tr className="text-[#FFEBBC] text-[17px] font-bold">
                        <th className="pb-3 px-2 ">Book Details</th>
                        <th className="pb-3 px-2 ">Uploaded By</th>
                        <th className="pb-3 pl-13 pr-4 ">Uploaded Date</th>
                        <th className="pb-3 px-2 ">Status</th>
                        <th className="pb-3 ">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEbooks.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="py-10 text-center text-[#CCCCCC]"
                          >
                            No Ebook found
                          </td>
                        </tr>
                      ) : (
                        filteredEbooks.map((ebook, index) => (
                          <tr
                            key={index}
                            className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[12px]"
                          >
                            <td className="py-3 pl-5">
                              <div className="flex flex-row items-center gap-2 ">
                                <img
                                  className=" h-8 w-8"
                                  src={ebook.bookdetails.img}
                                />
                                <span className="font-bold ">
                                  {ebook.bookdetails.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-5  px-2">
                              <div className="flex flex-row items-center gap-2 ">
                                <img
                                  className="rounded-full h-7 w-7"
                                  src={ebook.uploadedby.img}
                                />
                                <span className="font-bold  w-7">
                                  {ebook.uploadedby.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-2 pl-13 pr-4 ">{ebook.date}</td>
                            <td className="py-2 pl-3 pr-4">
                              <div
                                className={`border text-[11px] flex items-center justify-center font-bold py-1 min-w-18 w-20 rounded-lg ${getStatus(
                                  ebook.status,
                                )}`}
                              >
                                {ebook.status}
                              </div>
                            </td>
                            <td className="py-3  ">
                              <div className="flex gap-2">
                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {}}
                                >
                                  <Link to={`/ebook-request/${ebook.id}`}>
                                    {ebook.action.icon1}
                                  </Link>
                                </button>
                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {}}
                                >
                                  <Link to={`/request/${ebook.id}`}>
                                    {ebook.action.icon2}
                                  </Link>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className=" flex items-center justify-center w-full text-[#FFEBBC] mt-10  mb-3 isActive:bg-[#81401F]  ">
                <Pagination
                  total={99}
                  color="#81401F"
                  autoContrast={true}
                  radius="sm"
                  styles={{
                    control: {
                      backgroundColor: "#FFEBBCB2",
                      color: "black",
                      border: "1px solid #FFEBBC",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </NavbarBP>
      </div>
    </>
  );
};
export default EbookManagement;
