import { TextInput } from "@mantine/core";

import { Button, Menu } from "@mantine/core";
import { useState } from "react";
import { IoFunnelOutline } from "react-icons/io5";
import readerdetail from "../../assets/readerdetail.png";
import { IconSearch } from "@tabler/icons-react";

import { authorBooks } from "./data/authorDetailData";
import { AuthorBook } from "./types/AuthorBook";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";

const AuthorDetailView = () => {
  const [bookList, setBookList] = useState<AuthorBook[]>(authorBooks);
  const [search, setSearch] = useState("");
  const getStatus = (status: AuthorBook["status"]) => {
    if (status === "Delivered") {
      return " border border-[#08BF0E] text-[#08BF0E] bg-[#0C884C33]";
    }

    if (status === "Pending") {
      return " border border-[#FFEBBC] text-[#FFEBBC] bg-[#FFEBBC33]";
    }

    return "border border-[#D92828] text-[#D92828] bg-[#D928281A]";
  };
  const [filter, setFilter] = useState<AuthorBook["status"] | "All">("All");
  const filteredBooks = bookList.filter((book) => {
    const matchesSearch =
      `${book.status}${book.reader.name}${book.bookDetail.name}${book.date}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || book.status === filter;
    return matchesSearch && matchesFilter;
  });
  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Author Detail View ">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-[1120px] p-6 text-white bg-[#202020] rounded-xl">
                <div className="w-full flex gap-2">
                  <div className="flex gap-5 items-center">
                    <img
                      src={readerdetail}
                      className="w-23 h-23 rounded-full object-cover"
                    />
                    <div className=" flex flex-col">
                      <div className="font-['Nunito'] font-semibold text-[20px] text-[#FFEBBC]">
                        Alexa Rawles
                      </div>
                      <div className="font-['Nunito'] font-normal text-[#FFEBBC] text-[14px]">
                        alexarawles@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 font-['Nunito'] font-normal flex gap-2">
                    <button className="   bg-[#FFEBBC33] rounded-lg flex justify-center border border-[#FFEBBC] text-[#FFEBBC] p-1 w-17 h-6 items-center">
                      <div className="text-[11px] "> Author</div>
                    </button>
                    <button className="  bg-[#81401F] rounded-lg flex justify-center border border-[#81401F] text-[#FFEBBC] p-1 w-17 h-6 items-center">
                      <div className="text-[11px] "> Starter</div>
                    </button>
                  </div>
                </div>
                <div className="mt-7 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
                  <div className="text-[#FFEBBC] font-bold text-[21px] font-['Nunito']">
                    Recent Requests
                  </div>
                  <div className="flex gap-5 mr-6 ">
                    <TextInput
                      placeholder="Search"
                      leftSection={<IconSearch size={14} stroke={2} />}
                      value={search}
                      onChange={(event) => setSearch(event.currentTarget.value)}
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
                    <Menu width={200} radius="xl">
                      <Menu.Target>
                        <Button
                          variant="filled"
                          radius="xl"
                          size="md"
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
                        <Menu.Item onClick={() => setFilter("All")}>
                          All{" "}
                        </Menu.Item>
                        <Menu.Item onClick={() => setFilter("Pending")}>
                          Pending
                        </Menu.Item>
                        <Menu.Item onClick={() => setFilter("Delivered")}>
                          Delivered
                        </Menu.Item>
                        <Menu.Item onClick={() => setFilter("Rejected")}>
                          Rejected
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </div>
                </div>
                <div className="overflow-x-auto mt-7">
                  <table className="w-full min-w-[900px] text-left font-['Nunito']">
                    <thead>
                      <tr className="text-[#FFEBBC] text-[15px] font-normal">
                        <th className="pb-3 pl-3 pr-8 ">Reader</th>
                        <th className="pb-3  pl-15 pr-10 ">Ebook Detail</th>
                        <th className="pb-3  ">Date</th>
                        <th className="pb-3 pl-15 pr-10">Status</th>
                        <th className="pb-3  pl-10 pr-3 ">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBooks.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="py-10 text-center text-[#CCCCCC]"
                          >
                            No Books Found
                          </td>
                        </tr>
                      ) : (
                        filteredBooks.map((book, index) => (
                          <tr
                            key={index}
                            className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[12px]"
                          >
                            <td className="py-2 pl-3 pr-8">
                              <div className="flex gap-2 items-center">
                                <img
                                  src={book.reader.img}
                                  className="rounded-full h-8 w-8 bg-white"
                                />
                                <div className="py-5 px-2 font-semibold text-[12px] w-7">
                                  {book.reader.name}
                                </div>
                              </div>
                            </td>
                            <td className="py-4 pl-15 pr-5">
                              <div className="flex gap-2 items-center">
                                <img
                                  src={book.bookDetail.img}
                                  className="h-10 w-10 object-cover"
                                />
                                <div className="py-5 px-2 font-semibold text-[12px]">
                                  {book.bookDetail.name}
                                </div>
                              </div>
                            </td>
                            <td className="py-5 font-semibold text-[13px]">
                              {book.date}
                            </td>
                            <td className="py-5 pl-15 pr-10">
                              <div
                                className={`text-[11px] flex items-center justify-center font-medium w-18 px-2 py-1 rounded-lg
                                   ${getStatus(book.status)}`}
                              >
                                {book.status}
                              </div>
                            </td>

                            <td className="py-5  pl-10 pr-3">
                              <button className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full">
                                {book.action}
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </NavbarBP>
      </div>
    </>
  );
};
export default AuthorDetailView;
