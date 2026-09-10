import { Button, Menu, Pagination, TextInput } from "@mantine/core";
import { IconPencil, IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { IoFunnelOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Fee } from "./data/autographfeeData";
import { AutographFee } from "./types/AutographFee";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
const AutographFee = () => {
  const isSmallOrMedium = useMediaQuery("(max-width: 1023px)");
  const [opened, { toggle }] = useDisclosure();
  const [feeList, setFeeList] = useState<AutographFee[]>(Fee);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<AutographFee["autographfee"] | "All">(
    "All",
  );
  const filteredFee = feeList.filter((Fee) => {
    const matchesSearch = `${Fee.updatedby}${Fee.autographfee}${Fee.date}`
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filters === "All" || Fee.autographfee === filters;
    return matchesSearch && matchesFilter;
  });
  const [currentFee, setCurrentFee] = useState("$10");
  useEffect(() => {
    const savedFee = sessionStorage.getItem("currentAutographFee");
    if (savedFee) {
      setCurrentFee(savedFee);
    }
  }, []);
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
            title="Autograph Fee Management"
            opened={opened}
            toggle={toggle}
          />
        </AppShell.Header>

        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
            <div className=" text-[#FFEBBC] font-bold font-['Nunito'] text-[16px] lg:text-[20px] mb-5">
              Current Autograph Fee
            </div>
            <div className="flex justify-between bg-[#FFEBBC] p-3 lg:p-4 rounded-xl items-center">
              <div className="text-[#454545] font-medium text-[13px] lg:text-[16px]">
                Autograph Fee
              </div>
              <div className="text-[#202020] font-semibold text-[14px] lg:text-[20px]">
                {currentFee}
              </div>
              <div className="text-[#81401F] ">
                <Link to="/updated-fee">
                  <IconPencil className=" size-5 lg:size-7  font-bold" />{" "}
                </Link>
              </div>
            </div>

            <div className="mt-6 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
              <div className="text-[#FFEBBC] font-bold text-[13px] lg:text-[19px] font-['Nunito'] mb-5">
                Autograph Fee Histroy
              </div>
              <div className="flex gap-5  ">
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
                    <Menu.Item onClick={() => setFilters("$9/m")}>$9</Menu.Item>
                    <Menu.Item onClick={() => setFilters("$10/m")}>
                      $10
                    </Menu.Item>
                    <Menu.Item onClick={() => setFilters("$12/m")}>
                      $12
                    </Menu.Item>

                    <Menu.Item onClick={() => setFilters("$14/m")}>
                      $14
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
            {isSmallOrMedium ? (
              <div className=" flex flex-col gap-3 mt-5">
                {filteredFee.map((Fee, index) => (
                  <div
                    key={index}
                    className="w-full bg-[#38383880] border border-[#CBCBCB30] rounded-xl p-4 font-['Nunito'] text-[11px] text-[#CCCCCC]"
                  >
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">
                        Autograph Fee
                      </span>

                      <div className=" font-bold text-[14px] text-[#81401F] ">
                        {Fee.autographfee}
                      </div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">
                        Updated By
                      </span>

                      <div className="">{Fee.updatedby}</div>
                    </div>

                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#FFEBBC] font-bold">Date</span>

                      <span> {Fee.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto mt-5">
                <table className=" w-full min-w-225 text-left font-['Nunito']">
                  <thead>
                    <tr className="text-[#FFEBBC] text-[17px] font-bold">
                      <th className="pb-3 px-2 ">Autograph Fee</th>
                      <th className="pb-3 pl-50">Updated By</th>
                      <th className="pb-3 pl-15  ">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredFee.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="py-10 text-center text-[#CCCCCC]"
                        >
                          No Autograph Fee found
                        </td>
                      </tr>
                    ) : (
                      filteredFee.map((Fee, index) => (
                        <tr
                          key={index}
                          className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[12px]"
                        >
                          <td className="py-3 pl-5">
                            <div className=" font-bold text-[14px] text-[#81401F] ">
                              {Fee.autographfee}
                            </div>
                          </td>
                          <td className="py-2 pl-50 font-semibold text-[#CCCCCC] text-[12px]">
                            {Fee.updatedby}
                          </td>
                          <td className="py-2 pl-15 ">
                            <div className=" text-[11px]  font-semibold  ">
                              {Fee.date}
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
export default AutographFee;
