import { Button, Menu, Pagination, TextInput } from "@mantine/core";
import { IconSearch, IconUserOff } from "@tabler/icons-react";
import { useState } from "react";
import { FiUserCheck } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoFunnelOutline } from "react-icons/io5";
import { RiUserForbidLine } from "react-icons/ri";
import { queries } from "./data/queriesData";
import { Queries } from "./types/Queries";
import CardLayout from "../../components/cardLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";

const Queries = () => {
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
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Query Management">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
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

                        <Menu.Item onClick={() => setFilters("All")}>
                          All
                        </Menu.Item>

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
                <div className="overflow-x-auto mt-2">
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
            </div>
          </div>
        </NavbarBP>
      </div>
    </>
  );
};
export default Queries;
