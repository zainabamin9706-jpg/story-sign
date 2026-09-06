import { Button, Menu, Pagination, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { IoFunnelOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import NavbarBP from "../navbarBP";
import SidebarBP from "../sidebarBP";
import { defaultPlans } from "./data/planData";
import { subscription } from "./data/subscribeData";
import { Plan } from "./types/Plan";
import { Subscribe } from "./types/Subscribe";

const SubscriptionPlan = () => {
  const [plans, setPlans] = useState<Plan[]>(defaultPlans);
  useEffect(() => {
    const savedPlans = JSON.parse(sessionStorage.getItem("plans") || "[]");
    setPlans([...defaultPlans, ...savedPlans]);
  }, []);
  const [subscriberList, setSubscriberList] =
    useState<Subscribe[]>(subscription);

  const [search, setSearch] = useState("");

  const getplan = (plan: Subscribe["plan"]) => {
    if (plan === "Starter") {
      return " border border-[#FFEBBC] text-[#FFEBBC] bg-[#FFEBBC33]";
    }

    if (plan === "Professional") {
      return " border border-[#E39B79] text-[#E39B79] bg-[#E39B7933]";
    }
    return "border border-[#81401F] text-[#81401F] bg-[#81401F1A]";
  };
  const [filters, setFilters] = useState<Subscribe["plan"] | "All">("All");
  const filteredSubscriptions = subscriberList.filter((subscribe) => {
    const matchesSearch =
      `${subscribe.authordetail.name}${subscribe.plan}${subscribe.started}${subscribe.nextbill}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesFilter = filters === "All" || subscribe.plan === filters;
    return matchesSearch && matchesFilter;
  });
  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Subscription Plans">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black mb-4 gap-1 sm:gap-2 md:gap-3 w-auto">
                  {plans.map((plan, index) => (
                    <div
                      key={index}
                      className="bg-[#FFEBBC] rounded-2xl pt-3 px-6 font-['Nunito']"
                    >
                      <div className="flex justify-between items-center">
                        <h6 className="font-bold text-[19px] text-[#202020] mb-1 mt-1">
                          {plan.name}
                        </h6>

                        <div className="flex">
                          <div className="text-[#202020] text-[18px] font-bold">
                            {plan.charges}
                          </div>

                          <div className="text-[#454545] text-[18px] font-semibold">
                            {plan.type === "Monthly" ? "/m" : "/y"}
                          </div>
                        </div>
                      </div>

                      <div className="font-bold text-[14px] mt-2 mb-3 tracking-wide text-[#454545]">
                        {plan.type}
                      </div>

                      <div className="flex flex-col font-normal text-[#454545] text-[14px] gap-3 pb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex}>{feature}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
                  <div className="text-[#FFEBBC] font-bold text-[19px] font-['Nunito'] mb-5">
                    All Subscribers
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

                        <Menu.Item onClick={() => setFilters("All")}>
                          All
                        </Menu.Item>
                        <Menu.Item onClick={() => setFilters("Starter")}>
                          Starter
                        </Menu.Item>
                        <Menu.Item onClick={() => setFilters("Professional")}>
                          Professional
                        </Menu.Item>

                        <Menu.Item onClick={() => setFilters("Premium")}>
                          Premium
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                    <div className="bg-[#81401F] text-[#FFEBBC] flex items-center rounded-2xl text-[13px] py-2 px-4 h-7">
                      <button className="cursor-pointer  font-bold ">
                        <Link to="/add-plan">Add Plan</Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto mt-3">
                  <table className=" w-full min-w-225 text-left font-['Nunito']">
                    <thead>
                      <tr className="text-[#FFEBBC] text-[17px] font-bold">
                        <th className="pb-3 px-2 ">Author Detail</th>
                        <th className="pb-3 pl-15 pr-5 ">Plan</th>
                        <th className="pb-3 pl-13 pr-4 ">Billing</th>
                        <th className="pb-3 pl-13 pr-4 ">Started</th>
                        <th className="pb-3 pl-13 pr-4 ">Next Bill</th>
                        <th className="pb-3 pl-13 pr-4 ">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSubscriptions.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="py-10 text-center text-[#CCCCCC]"
                          >
                            No Subscriptions found
                          </td>
                        </tr>
                      ) : (
                        filteredSubscriptions.map((subscribe, index) => (
                          <tr
                            key={index}
                            className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[12px]"
                          >
                            <td className="py-3 pl-5">
                              <div className="flex flex-row items-center gap-2 ">
                                <img
                                  className=" h-8 w-8 bg-white rounded-full"
                                  src={subscribe.authordetail.img}
                                />
                                <span className="font-bold w-7">
                                  {subscribe.authordetail.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-2 pl-15 pr-5 ">
                              <div
                                className={`border text-[11px] flex items-center justify-center font-bold py-1 min-w-18 w-20 rounded-lg ${getplan(
                                  subscribe.plan,
                                )}`}
                              >
                                {subscribe.plan}
                              </div>
                            </td>

                            <td className="py-2 pl-13 pr-4 font-bold text-[#FFEBBC] text-[13px]">
                              {subscribe.billing}
                            </td>
                            <td className="py-2 pl-13 pr-4 ">
                              {subscribe.started}
                            </td>
                            <td className="py-2 pl-13 pr-4 ">
                              {subscribe.nextbill}
                            </td>
                            <td className="py-2 pl-13 pr-4 underline text-[#FFEBBC] ">
                              {subscribe.action}
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
export default SubscriptionPlan;
