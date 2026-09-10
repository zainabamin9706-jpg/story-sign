import { Button, Menu, Pagination, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import { IoFunnelOutline } from "react-icons/io5";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import bookcheck from "../../assets/bookcheck.png";
import sun from "../../assets/sun.png";
import tick from "../../assets/tick.png";
import cancel from "../../assets/cancel.png";
import { requests } from "./data/requestData";
import { Request } from "./types/Request";
import CardLayout from "../../components/cardLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import { Link } from "react-router-dom";
import { AppShell } from "@mantine/core";
const AutographRequest = () => {
  const isSmallOrMedium = useMediaQuery("(max-width: 1023px)");
  const [opened, { toggle }] = useDisclosure();
  const [requestList, setRequestList] = useState<Request[]>(requests);
  const [search, setSearch] = useState("");
  const getStatus = (status: Request["status"]) => {
    if (status === "Delivered") {
      return " border border-[#08BF0E] text-[#08BF0E] bg-[#0C884C33]";
    }

    if (status === "Pending") {
      return " border border-[#FFEBBC] text-[#FFEBBC] bg-[#FFEBBC33]";
    }

    return "border border-[#D92828] text-[#D92828] bg-[#D928281A]";
  };
  const [filters, setFilters] = useState<Request["status"] | "All">("All");
  const filteredAuthors = requestList.filter((request) => {
    const matchesSearch =
      `${request.reader.name}${request.id}${request.author.name}${request.date}${request.status}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesFilter = filters === "All" || request.status === filters;
    return matchesSearch && matchesFilter;
  });
  const totalRequests = requestList.length;
  const DeliveredRequests = requestList.filter(
    (reader) => reader.status === "Delivered",
  ).length;
  const inProgressRequests = requestList.filter(
    (reader) => reader.status === "Pending",
  ).length;
  const RejectedRequests = requestList.filter(
    (authors) => authors.status === "Rejected",
  ).length;

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
          <NavbarBP title="Autograph Request" opened={opened} toggle={toggle} />
        </AppShell.Header>

        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black mb-4 gap-1 sm:gap-2 md:gap-3 w-auto ">
              <CardLayout
                title="Total Requests"
                value={totalRequests}
                icon={<img src={bookcheck} className="size-4.5" />}
                percentage="+15%"
                isIncreasing={true}
                linkText=""
                Link=""
              />
              <CardLayout
                title="  In Progress Requests"
                value={inProgressRequests}
                icon={<img src={sun} className="size-4.5" />}
                percentage="-3.5%"
                isIncreasing={false}
                linkText=""
                Link="#"
              />

              <CardLayout
                title="  Rejected Requests"
                value={RejectedRequests}
                icon={<img src={cancel} className="size-5" />}
                percentage="-3.5%"
                isIncreasing={true}
                linkText=""
                Link="#"
              />
              <CardLayout
                title=" Completed Requests"
                value={DeliveredRequests}
                icon={<img src={tick} className="size-5" />}
                percentage="+5%"
                isIncreasing={true}
                linkText=""
                Link="#"
              />
            </div>
            <div className="mt-6 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
              <div className="text-[#FFEBBC] font-bold text-[19px] font-['Nunito'] mb-5">
                All Authors
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

                    <Menu.Item onClick={() => setFilters("All")}>All</Menu.Item>

                    <Menu.Item onClick={() => setFilters("Delivered")}>
                      Delivered
                    </Menu.Item>

                    <Menu.Item onClick={() => setFilters("Pending")}>
                      Pending
                    </Menu.Item>

                    <Menu.Item onClick={() => setFilters("Rejected")}>
                      Rejected
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
            {isSmallOrMedium ? (
              <div className=" flex flex-col gap-3 mt-5">
                {filteredAuthors.map((request) => (
                  <div
                    key={request.id}
                    className="w-full bg-[#38383880] border border-[#CBCBCB30] rounded-xl p-4 font-['Nunito'] text-[11px] text-[#CCCCCC]"
                  >
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">ID</span>

                      <span>{request.id}</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Reader</span>

                      <div className="flex flex-row items-center gap-1.5 ">
                        <img
                          className="rounded-full h-7 w-7"
                          src={request.reader.img}
                        />
                        <span className="font-bold w-full lg:w-7">
                          {request.reader.name}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Author</span>

                      <div className="flex flex-row items-center gap-1.5 ">
                        <img
                          className="rounded-full h-7 w-7"
                          src={request.author.img}
                        />
                        <span className="font-bold w-full lg:w-7">
                          {request.author.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Book</span>

                      <span>{request.book}</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Date</span>

                      <span>{request.date}</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">
                        Book Status
                      </span>
                      <div
                        className={`border text-[11px] flex items-center justify-center font-bold py-1 min-w-18 w-20 rounded-lg ${getStatus(
                          request.status,
                        )}`}
                      >
                        {request.status}
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Actions</span>
                      <div className="flex gap-2">
                        <Link to={`/request/${request.id}`}>
                          <button
                            className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                            onClick={() => {}}
                          >
                            {request.action}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto mt-5">
                <table className=" w-full min-w-225 text-left font-['Nunito']">
                  <thead>
                    <tr className="text-[#FFEBBC] text-[17px] font-bold">
                      <th className="pb-3 px-2 ">ID</th>
                      <th className="pb-3 pl-5 ">Reader</th>
                      <th className="pb-3 pl-13 pr-4 ">Author</th>
                      <th className="pb-3 px-2 "> Book</th>
                      <th className="pb-3 px-2 ">Date</th>
                      <th className="pb-3 px-2 ">Status</th>
                      <th className="pb-3 ">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAuthors.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="py-10 text-center text-[#CCCCCC]"
                        >
                          No Requests found
                        </td>
                      </tr>
                    ) : (
                      filteredAuthors.map((request) => (
                        <tr
                          key={request.id}
                          className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[12px]"
                        >
                          <td className="py-3 px-2">{request.id}</td>
                          <td className="py-3 pl-5">
                            <div className="flex flex-row items-center gap-1.5 ">
                              <img
                                className="rounded-full h-7 w-7"
                                src={request.reader.img}
                              />
                              <span className="font-bold w-7">
                                {request.reader.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-5 pl-13 pr-4">
                            <div className="flex flex-row items-center gap-1.5 ">
                              <img
                                className="rounded-full h-7 w-7"
                                src={request.author.img}
                              />
                              <span className="font-bold  w-7">
                                {request.author.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-2 pb-3 px-2">{request.book}</td>
                          <td className="py-2 px-2">{request.date}</td>
                          <td className="py-2 pl-3 pr-4">
                            <div
                              className={`border text-[11px] flex items-center justify-center font-bold py-1 min-w-18 w-20 rounded-lg ${getStatus(
                                request.status,
                              )}`}
                            >
                              {request.status}
                            </div>
                          </td>
                          <td className="py-3  ">
                            <div className="flex gap-2">
                              <Link to={`/request/${request.id}`}>
                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {}}
                                >
                                  {request.action}
                                </button>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
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
        </AppShell.Main>
      </AppShell>
    </>
  );
};
export default AutographRequest;
