import { useState } from "react";
import { requests } from "./data/requestData";
import { LuBadgeDollarSign } from "react-icons/lu";
import { LuUsersRound } from "react-icons/lu";
import { LiaBookReaderSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import img from "../../assets/img.png";
import { LineChart } from "@mantine/charts";
import { BarChart } from "@mantine/charts";
import { User } from "./types/User";
import { revenuedata } from "./data/revenueData";
import { RequestData } from "./types/Request";
import { IconEye } from "@tabler/icons-react";
import { usersdata } from "./data/userData";
import { userGrowthData } from "./data/userGrowthData";
import CardLayout from "../../components/cardLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
const Dashboard = () => {
  const [userList, setUserList] = useState<User[]>(usersdata);
  const [requestList, setRequestList] = useState<RequestData[]>(requests);
  const [months, setMonths] = useState(6);
  const totalAuthors = userList.filter((user) => user.role === "Author").length;
  const totalReaders = userList.filter((user) => user.role === "Reader").length;
  const newRequests = requestList.length;
  const totalRevenue = 25100;
  const getStatus = (status: RequestData["bookStatus"]) => {
    if (status === "Delivered") {
      return " border-[#0C884C] text-[#0C884C] bg-[#0C884C33]";
    }
    if (status === "In Progress") {
      return "border-[#FFEBBC] text-[#FFEBBC] bg-[#FFEBBC33]";
    }
    return "border-[#C8323C] text-[#C8323C] bg-[#C8323C33]";
  };
  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full">
        <NavbarBP Title="Dashboard">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />

            <div className="flex flex-col flex-1  items-center">
              <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black mb-4 gap-1 sm:gap-2 md:gap-3 w-auto">
                  <CardLayout
                    title="Total Revenue"
                    value={totalRevenue}
                    icon={<LuBadgeDollarSign className="size-5.5" />}
                    percentage="+15%"
                    isIncreasing={true}
                    linkText="This Month"
                    Link="#"
                  />
                  <CardLayout
                    title="Total Authors"
                    value={totalAuthors}
                    icon={<HiOutlineUsers className="size-5" />}
                    percentage="-3.5%"
                    isIncreasing={false}
                    linkText="View More"
                    Link="/author-management"
                  />
                  <CardLayout
                    title="Total Readers"
                    value={totalReaders}
                    icon={<LiaBookReaderSolid className="size-6" />}
                    percentage="+15%"
                    isIncreasing={true}
                    linkText="View More"
                    Link="/reader-management"
                  />
                  <CardLayout
                    title="New Requests"
                    value={newRequests}
                    icon={<img src={img} alt="" className="size-5" />}
                    percentage="+15%"
                    isIncreasing={true}
                    linkText="View More"
                    Link="#"
                  />
                </div>
                <div className="w-full h-auto bg-[#38383880] rounded-xl flex flex-col md:flex-row  p-6 font-['Nunito'] font-bold text-sm text-[#FFEBBC]">
                  <div className=" w-1/4 md:w-2/6 lg:w-1/2 ">
                    <div className="flex justify-between mx-3 ">
                      <div className="text-[16px] mx-3">Revenue Analytics</div>
                      <select
                        value={months}
                        onChange={(e) => setMonths(Number(e.target.value))}
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
                        data={revenuedata.slice(-months)}
                        dataKey="Month"
                        series={[
                          { name: "Author", color: "#FFEBBC" },
                          { name: "Reader", color: "#81401F" },
                        ]}
                      />
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
                  </div>

                  <div className="flex flex-col w-1/4 md:w-1/2 ">
                    <div className="text-[16px] mx-3">User Growth</div>
                    <div className="p-2 text-[#CCCCCC] ">
                      <BarChart
                        p="lg"
                        h={280}
                        data={userGrowthData}
                        dataKey="month"
                        unit="k"
                        type="stacked"
                        series={[
                          { name: "Author", color: "#FFEBBC" },
                          { name: "Reader", color: "#81401F" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-5">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[#FFEBBC] font-bold text-sm font-['Nunito']">
                      Recent Requests
                    </p>
                    <a className="text-[#FFEBBC] text-xs underline font-normal cursor-pointer">
                      view all
                    </a>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[750px] text-left font-['Nunito']">
                      <thead>
                        <tr className="text-[#FFEBBC] text-[12px] font-normal">
                          <th className="pb-3 px-2 ">ID</th>
                          <th className="pb-3 px-2">Reader</th>
                          <th className="pb-3 px-2">Author</th>
                          <th className="pb-3 px-2  ">Book Name</th>
                          <th className="pb-3 px-2">Book Status</th>
                          <th className="pb-3 px-2 ">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {requestList.map((request) => (
                          <tr
                            key={request.id}
                            className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[11px]"
                          >
                            <td className="py-3 px-2">{request.id}</td>

                            <td className="py-3 px-2">
                              <div className="flex items-center gap-2">
                                <img
                                  className="rounded-full h-6 w-6"
                                  src={request.reader.image}
                                  alt={request.reader.name}
                                />
                                <span>{request.reader.name}</span>
                              </div>
                            </td>

                            <td className="py-3 px-2">
                              <div className="flex items-center gap-2">
                                <img
                                  className="rounded-full h-6 w-6"
                                  src={request.author.image}
                                  alt={request.author.name}
                                />
                                <span>{request.author.name}</span>
                              </div>
                            </td>

                            <td className="py-3 px-2">{request.bookName}</td>
                            <td className="py-3 px-2">
                              <div
                                className={`flex items-center justify-center border px-2 py-1 w-20 rounded-lg text-[10px] 
                              ${getStatus(request.bookStatus)}`}
                              >
                                {request.bookStatus}
                              </div>
                            </td>

                            <td className="py-3 px-2">
                              <button className="border border-[#FFEBBC] h-6 w-6 flex items-center justify-center rounded-full cursor-pointer">
                                <IconEye className="text-[#FFEBBC] size-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-white h-auto w-1/8 flex ">
              <div className="flex flex-col text-[#FFEBBC] font-bold  font-['Nunito'] justify-between ">
                <h6 className="mb-5">Users</h6>
                {userList.map((users) => (
                  <div className=" flex gap-2 mb-4">
                    <img
                      className="rounded-full w-8 h-8  border border-[#CCCCCC]"
                      src={users.image}
                      alt=""
                    />
                    <div className=" flex flex-col ">
                      <p className="font-Poppins font-light text-xs  text-[#FFEBBC] flex-col">
                        {users.name}
                      </p>
                      <p className="font-Poppins font-light text-[10px]  text-[#CCCCCC] flex-col">
                        {users.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </NavbarBP>
      </div>
    </>
  );
};

export default Dashboard;
