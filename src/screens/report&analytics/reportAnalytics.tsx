import { BarChart, LineChart } from "@mantine/charts";
import { useState } from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { LuBadgeDollarSign, LuUserCheck } from "react-icons/lu";
import bookmarked from "../../assets/bookmarked.png";
import { artist } from "./data/artistData";
import { revenuedata } from "./data/revenueData";
import { useMediaQuery } from "@mantine/hooks";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { userGrowthData } from "./data/userGrowthData";
import { Artist } from "./types/Artist";
import CardLayout from "../../components/cardLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
const data3 = [
  { month: "Jan", requests: 68 },
  { month: "Feb", requests: 40 },
  { month: "Mar", requests: 56 },
  { month: "Apr", requests: 40 },
  { month: "May", requests: 56 },
  { month: "Jun", requests: 70 },
];
const ReportAnalytics = () => {
  const isSmallOrMedium = useMediaQuery("(max-width: 1023px)");
  const [opened, { toggle }] = useDisclosure();
  const [artistList, setArtistList] = useState<Artist[]>(artist);

  const [revenueMonths, setRevenueMonths] = useState(6);
  const [requestMonths, setRequestMonths] = useState(6);
  const totalAuthors = 30;
  const totalReaders = " 3,455";
  const signedEbooks = 243;
  const totalRevenue = "$3,248";

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
            title="Report & Analytics"
            opened={opened}
            toggle={toggle}
          />
        </AppShell.Header>
        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className=" w-full p-6 mr-4 text-white h-full bg-[#202020] rounded-xl ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black mb-4 gap-1 sm:gap-2 md:gap-3 w-auto ">
              <CardLayout
                title="  Total Revenue"
                value={totalRevenue}
                icon={<LuBadgeDollarSign className="size-5.5" />}
                percentage="+15%"
                isIncreasing={true}
                linkText=""
                Link=""
              />
              <CardLayout
                title="Signed Ebooks"
                value={signedEbooks}
                icon={<img src={bookmarked} className="size-5" />}
                percentage="-3.5%"
                isIncreasing={false}
                linkText=""
                Link="#"
              />

              <CardLayout
                title=" Total Reader"
                value={totalReaders}
                icon={<HiOutlineUsers className="size-5.5" />}
                percentage="-3.5%"
                isIncreasing={true}
                linkText=""
                Link="#"
              />
              <CardLayout
                title="Total Authors"
                value={totalAuthors}
                icon={<LuUserCheck className="size-5.5" />}
                percentage="+5%"
                isIncreasing={true}
                linkText=""
                Link="#"
              />
            </div>
            <div className="w-full h-auto bg-[#38383880] rounded-xl  p-6 font-['Nunito'] font-bold text-sm text-[#FFEBBC]">
              <div className="flex flex-col md:flex-row w-full">
                <div className="w-full md:w-1/2">
                  <div className="flex justify-between mx-3 ">
                    <div className=" text-[13px] lg:text-[16px] mx-3">
                      Revenue Analytics
                    </div>
                    <select
                      value={revenueMonths}
                      onChange={(e) => setRevenueMonths(Number(e.target.value))}
                      className=" font-normal rounded-2xl mx-3 font-['Nunito'] bg-[#38383880] text-[#CCCCCC] border border-[#CCCCCC] px-1.5  placeholder:text-xs"
                    >
                      <option className="bg-transparent" value={6}>
                        6 Months
                      </option>
                      <option className="" value={5}>
                        5 Months
                      </option>
                      <option className=" " value={4}>
                        4 Months
                      </option>
                      <option className="" value={3}>
                        3 Months
                      </option>
                      <option className="" value={2}>
                        2 Months
                      </option>
                      <option className="" value={1}>
                        1 Month
                      </option>
                    </select>
                  </div>
                  <div className=" p-2 text-[#CCCCCC] ">
                    <LineChart
                      p="lg"
                      unit="k"
                      h={280}
                      data={revenuedata.slice(-revenueMonths)}
                      dataKey="Month"
                      series={[
                        { name: "Reader", color: "#81401F" },
                        { name: "Author", color: "#FFEBBC" },
                      ]}
                      yAxisLabel="Revenue (Dollars)"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full md:w-1/2 ">
                  <div className="text-[13px] lg:text-[16px] mx-3">
                    User Growth
                  </div>
                  <div className="p-2 text-[#CCCCCC] ">
                    <BarChart
                      p="lg"
                      h={280}
                      data={userGrowthData}
                      dataKey="month"
                      unit="k"
                      type="stacked"
                      series={[
                        { name: "Reader", color: "#81401F" },
                        { name: "Author", color: "#FFEBBC" },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-8 justify-center mt-2">
                <div className="flex gap-2 items-center">
                  <div className="bg-[#81401F] rounded-full w-3 h-3"></div>
                  <div>Reader</div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-[#FFEBBC] rounded-full w-3 h-3"></div>
                  <div>Author</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 items-stretch">
              <div className="mt-5 w-full flex flex-col h-full">
                <div className="flex  justify-between items-center mb-4">
                  <div className="text-[#FFEBBC] font-bold text-[21px] font-['Nunito']">
                    Top Artist By Requests
                  </div>
                </div>
                {isSmallOrMedium ? (
                  <div className=" flex flex-col gap-3 mt-5">
                    {artistList.map((artist) => (
                      <div
                        key={artist.index}
                        className="w-full bg-[#38383880] border border-[#CBCBCB30] rounded-xl p-4 font-['Nunito'] text-[11px] text-[#CCCCCC]"
                      >
                        <div className="flex justify-between items-center py-2">
                          <span className="text-[#FFEBBC] font-bold">
                            Index
                          </span>

                          <span>{artist.index}</span>
                        </div>

                        <div className="flex justify-between items-center py-2">
                          <span className="text-[#FFEBBC] font-bold">
                            Profile
                          </span>

                          <div className="flex items-center gap-2">
                            <img
                              className="rounded-full h-6 w-6"
                              src={artist.profile.img}
                            />
                            <div>
                              <span className="text-[12px]">
                                {artist.profile.name}
                              </span>
                              <div className="text-[12px]">
                                {artist.profile.email}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center py-2">
                          <span className="text-[#FFEBBC] font-bold">
                            Sign Request
                          </span>

                          <span>{artist.signedrequest}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="overflow-x-auto flex-1 mt-5">
                    <table className="w-full text-left font-['Nunito']">
                      <thead>
                        <tr className="text-[#FFEBBC] text-[16px] font-normal">
                          <th className="pb-3 px-2 ">Index</th>
                          <th className="pb-3 px-2  ">Profile</th>
                          <th className="pb-3 px-2">Sign Requests</th>
                        </tr>
                      </thead>
                      <tbody>
                        {artistList.map((artist, index) => (
                          <tr
                            key={index}
                            className="border-b border-[#CBCBCB80] text-[#CCCCCC] "
                          >
                            <td className="py-4 px-2 text-[#FFEBBC] font-bold text-[14px] ">
                              {artist.index}
                            </td>

                            <td className="py-4 px-2">
                              <div className="flex items-center gap-2">
                                <img
                                  className="rounded-full h-6 w-6"
                                  src={artist.profile.img}
                                />
                                <div>
                                  <span className="text-[12px]">
                                    {artist.profile.name}
                                  </span>
                                  <div className="text-[12px]">
                                    {artist.profile.email}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="py-4 px-2 text-[12px]">
                              {artist.signedrequest}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              <div className="mt-5 w-full flex flex-col ">
                <div className="bg-[#38383880] p-5 rounded-lg">
                  <div className="flex justify-between mx-3 mb-9 mt-3 ">
                    <div className="text-[13px] lg:text-[16px] mx-3 text-[#FFEBBC] font-bold font-['Nunito']">
                      Autograph Requests
                    </div>
                    <select
                      value={requestMonths}
                      onChange={(e) => setRequestMonths(Number(e.target.value))}
                      className=" font-normal rounded-2xl mx-3 font-['Nunito'] bg-[#38383880] text-[#CCCCCC] border border-[#CCCCCC] px-1.5  placeholder:text-xs"
                    >
                      <option className="bg-transparent" value={6}>
                        6 Months
                      </option>
                      <option className="" value={5}>
                        5 Months
                      </option>
                      <option className=" " value={4}>
                        4 Months
                      </option>
                      <option className="" value={3}>
                        3 Months
                      </option>
                      <option className="" value={2}>
                        2 Months
                      </option>
                      <option className="" value={1}>
                        1 Month
                      </option>
                    </select>
                  </div>
                  <BarChart
                    h={235}
                    unit="k"
                    data={data3.slice(-requestMonths)}
                    dataKey="month"
                    series={[{ name: "requests", color: "#81401F" }]}
                    yAxisLabel="Requests"
                  />
                </div>
              </div>
            </div>
          </div>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default ReportAnalytics;
