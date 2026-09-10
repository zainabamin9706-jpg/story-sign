import { Button, Menu, TextInput } from "@mantine/core";
import { useState } from "react";
import { IoFunnelOutline } from "react-icons/io5";

import { IconSearch } from "@tabler/icons-react";
import readerdetail from "../../assets/readerdetail.png";
import { readerBooks } from "./data/readerDetailData";
import { ReaderDetail } from "./types/readerDetail";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import { AppShell } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
const ReaderDetailView = () => {
  const isSmallOrMedium = useMediaQuery("(max-width: 1023px)");
  const [opened, { toggle }] = useDisclosure();
  const [bookList, setBookList] = useState<ReaderDetail[]>(readerBooks);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ReaderDetail["status"] | "All">("All");
  const filteredBooks = bookList.filter((book) => {
    const matchesSearch =
      `${book.name}${book.signedBy}${book.uploadedDate}${book.status}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || book.status === filter;
    return matchesSearch && matchesFilter;
  });
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
          <NavbarBP
            title="Reader Detail view"
            opened={opened}
            toggle={toggle}
          />
        </AppShell.Header>
        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-[1120px] p-8 text-white bg-[#202020] rounded-xl">
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
              <button className="font-['Outfit'] mt-6 font-normal bg-[#FFEBBC33] rounded-lg flex justify-center border border-[#FFEBBC] text-[#FFEBBC] p-1 w-17 h-6 items-center">
                <div className="text-[10px] "> Reader</div>
              </button>
            </div>
            <div className="mt-7 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
              <div className="text-[#FFEBBC] font-bold text-[21px] font-['Nunito']">
                Reader Library
              </div>
              <div className="flex gap-5 mr-6 ">
                <TextInput
                  placeholder="Search"
                  leftSection={<IconSearch size={14} stroke={2} />}
                  value={search}
                  onChange={(event) => setSearch(event.currentTarget.value)}
                  radius="xl"
                  w={150}
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
                    <Menu.Item onClick={() => setFilter("All")}>All </Menu.Item>
                    <Menu.Item onClick={() => setFilter("Signed")}>
                      Signed
                    </Menu.Item>
                    <Menu.Item onClick={() => setFilter("Unsigned")}>
                      Unsigned
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
            {isSmallOrMedium ? (
              <div className=" flex flex-col gap-3 mt-5">
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
                    <div className="w-full bg-[#38383880] border border-[#CBCBCB30] rounded-xl p-4 font-['Nunito'] text-[11px] text-[#CCCCCC]">
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 "
                      >
                        <span className="text-[#FFEBBC] font-bold">
                          Ebook Cover
                        </span>

                        <span>
                          <img
                            src={book.cover}
                            className="h-10 w-10 object-cover"
                          />
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FFEBBC] font-bold">
                          Ebook Name
                        </span>

                        <span>{book.name}</span>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FFEBBC] font-bold">
                          Signed By
                        </span>

                        <span>{book.signedBy}</span>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FFEBBC] font-bold">
                          Uploaded Date
                        </span>

                        <span> {book.uploadedDate}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FFEBBC] font-bold">Fee</span>

                        <span className="font-bold text-[#FFEBBC] text-[13px]">
                          {" "}
                          {book.fee !== undefined ? `$${book.fee}` : ""}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FFEBBC] font-bold">
                          Book Status
                        </span>
                        <div
                          className={`text-[11px] flex items-center justify-center font-medium w-18 px-2 py-1 rounded-lg ${
                            book.status === "Signed"
                              ? "border border-[#08BF0E] text-[#08BF0E] bg-[#0C884C33]"
                              : "border border-[#FFEBBC] text-[#FFEBBC] bg-[#FFEBBC33]"
                          }`}
                        >
                          {book.status}
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#FFEBBC] font-bold">Action</span>
                        <button className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full">
                          {book.action}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="overflow-x-auto mt-7">
                <table className="w-full min-w-[900px] text-left font-['Nunito']">
                  <thead>
                    <tr className="text-[#FFEBBC] text-[15px] font-normal">
                      <th className="pb-3 px-2 ">Ebook Cover</th>
                      <th className="pb-3 px-2 ">Ebook Name</th>
                      <th className="pb-3 px-2">Signed By</th>
                      <th className="pb-3 px-2">Uploaded Date</th>
                      <th className="pb-3 px-2 ">Fee</th>
                      <th className="pb-3 pl-6">Status</th>
                      <th className="pb-3 pl-6 ">Actions</th>
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
                          <td className="py-5 px-2">
                            <img
                              src={book.cover}
                              className="h-10 w-10 object-cover"
                            />
                          </td>
                          <td className="py-5 px-2 font-semibold text-[13px]">
                            {book.name}
                          </td>
                          <td className="py-5 px-2 font-semibold text-[13px]">
                            {book.signedBy}
                          </td>
                          <td className="py-5 px-2 font-semibold text-[13px]">
                            {book.uploadedDate}
                          </td>
                          <td className="py-5 px-2">
                            <div className="font-bold text-[#FFEBBC] text-[16px]">
                              {book.fee !== undefined ? `$${book.fee}` : ""}
                            </div>
                          </td>
                          <td className="py-5 pl-6">
                            <div
                              className={`text-[11px] flex items-center justify-center font-medium w-18 px-2 py-1 rounded-lg ${
                                book.status === "Signed"
                                  ? "border border-[#08BF0E] text-[#08BF0E] bg-[#0C884C33]"
                                  : "border border-[#FFEBBC] text-[#FFEBBC] bg-[#FFEBBC33]"
                              }`}
                            >
                              {book.status}
                            </div>
                          </td>

                          <td className="py-5 pl-6">
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
            )}
          </div>
        </AppShell.Main>
      </AppShell>
    </>
  );
};
export default ReaderDetailView;
