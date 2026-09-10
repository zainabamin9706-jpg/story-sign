import { Button, Menu, Pagination, TextInput } from "@mantine/core";
import { IconSearch, IconUserOff } from "@tabler/icons-react";
import { useState } from "react";
import { FiUserCheck } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoFunnelOutline } from "react-icons/io5";
import { RiUserForbidLine } from "react-icons/ri";
import { queries } from "./data/queriesData";
import { Queries } from "./types/Queries";

import { useMediaQuery } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import CardLayout from "../../components/cardLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";

const Queries = () => {
  const isSmallOrMedium = useMediaQuery("(max-width: 1023px)");
  const [opened, { toggle }] = useDisclosure();
  const [queryList, setQueryList] = useState<Queries[]>(queries);
  const [search, setSearch] = useState("");
  const getStatus = (status: Queries["status"]) => {
    if (status === "Resolved") {
      return " border border-[#08BF0E] text-[#08BF0E] bg-[#0C884C33]";
    }

    if (status === "In Process") {
      return "border-[#FFEBBC] text-[#FFEBBC] bg-[#FFEBBC1A]";
    }

    return "border-[#D92828] text-[#D92828] bg-[#D928281A]";
  };
  const [filters, setFilters] = useState<Queries["status"] | "All">("All");
  const filteredQueries = queryList.filter((queries) => {
    const matchesSearch = `${queries.username.name}${queries.status}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filters === "All" || queries.status === filters;
    return matchesSearch && matchesFilter;
  });
  const totalQueries = queryList.length;
  const ResolutionRate = "2.4h";
  const avgTime = "1 d";
  const pendingQueries = queryList.filter(
    (query) => query.status === "Pending",
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
          <NavbarBP title="Query Management" opened={opened} toggle={toggle} />
        </AppShell.Header>

        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black mb-4 gap-1 sm:gap-2 md:gap-3 w-auto ">
              <CardLayout
                title=" Total Queries"
                value={totalQueries}
                icon={<HiOutlineUsers className="size-5.5" />}
                percentage=""
                showIncreasing={false}
                isIncreasing={true}
                linkText=""
                Link=""
              />
              <CardLayout
                title=" Pending Queries"
                value={pendingQueries}
                icon={<FiUserCheck className="size-5.5" />}
                percentage=""
                showIncreasing={false}
                isIncreasing={false}
                linkText=""
                Link="#"
              />

              <CardLayout
                title="  Resolution Rate"
                value={ResolutionRate}
                icon={<IconUserOff className="size-5.5" />}
                percentage=""
                showIncreasing={false}
                isIncreasing={true}
                linkText=""
                Link="#"
              />
              <CardLayout
                title="   Avg Time Response"
                value={avgTime}
                icon={<RiUserForbidLine className="size-5.5" />}
                percentage=""
                showIncreasing={false}
                isIncreasing={true}
                linkText=""
                Link="#"
              />
            </div>
            <div className="mt-10 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
              <div className="text-[#FFEBBC] font-bold text-[21px] font-['Nunito'] mb-5">
                All Queries
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

                    <Menu.Item onClick={() => setFilters("Resolved")}>
                      Resolved
                    </Menu.Item>

                    <Menu.Item onClick={() => setFilters("In Process")}>
                      In Process
                    </Menu.Item>

                    <Menu.Item onClick={() => setFilters("Pending")}>
                      Pending
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
              {/* <div className="overflow-x-auto mt-5"></div> */}
            </div>
            {isSmallOrMedium ? (
              <div className=" flex flex-col gap-3 mt-3">
                {filteredQueries.map((queries, index) => (
                  <div
                    key={index}
                    className="w-full bg-[#38383880] border border-[#CBCBCB30] rounded-xl p-4 font-['Nunito'] text-[11px] text-[#CCCCCC]"
                  >
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">UserName</span>

                      <div className="flex flex-row items-center gap-1.5 ">
                        <img
                          className="rounded-full h-7 w-7 bg-white"
                          src={queries.username.img}
                        />
                        <span className=" text-[11px] w-7">
                          {queries.username.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Role</span>

                      <div>{queries.role}</div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Subject</span>

                      <span>{queries.subject}</span>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Status</span>
                      <div
                        className={`border text-[11px] flex items-center justify-center font-bold px-2 py-1 w-18 rounded-lg ${getStatus(
                          queries.status,
                        )}`}
                      >
                        {queries.status}
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Action</span>
                      <div className="flex gap-2">
                        <button
                          className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                          onClick={() => {}}
                        >
                          {queries.action}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto mt-5">
                <table className=" w-full min-w-225 text-left font-['Nunito']">
                  <thead>
                    <tr className="text-[#FFEBBC] text-[15px] ">
                      <th className="pb-3 px-2 font-bold">UserName</th>
                      <th className="pb-3 pl-12 font-bold">Role</th>
                      <th className="pb-3 pl-15 font-bold">Subject</th>
                      <th className="pb-3 px-2 font-bold">Status</th>
                      <th className="pb-3  pl-10 font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredQueries.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="py-10 text-center text-[#CCCCCC]"
                        >
                          No Queries found
                        </td>
                      </tr>
                    ) : (
                      filteredQueries.map((queries, index) => (
                        <tr
                          key={index}
                          className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[12px]"
                        >
                          <td className="py-5.5 pb-3 px-2">
                            <div className="flex flex-row items-center gap-1.5 ">
                              <img
                                className="rounded-full h-7 w-7 bg-white"
                                src={queries.username.img}
                              />
                              <span className=" text-[11px] w-7">
                                {queries.username.name}
                              </span>
                            </div>
                          </td>
                          <td className="py-5.5  pl-12">{queries.role}</td>
                          <td className="py-5.5 pl-15 ">{queries.subject}</td>
                          <td className="py-5.5 px-2">
                            <div
                              className={`border text-[11px] flex items-center justify-center font-bold px-2 py-1 w-18 rounded-lg ${getStatus(
                                queries.status,
                              )}`}
                            >
                              {queries.status}
                            </div>
                          </td>
                          <td className="py-3 pl-10">
                            <div className="flex gap-2">
                              <button
                                className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                onClick={() => {}}
                              >
                                {queries.action}
                              </button>
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
          <div className=" flex items-center justify-center w-full text-[#FFEBBC] mt-15  mb-3 isActive:bg-[#81401F]  ">
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
export default Queries;
