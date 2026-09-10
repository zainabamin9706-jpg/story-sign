import { Pagination, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notification } from "./data/notificationData";
import { Notification } from "./types/Notification";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
const NotificationManagement = () => {
  const [opened, { toggle }] = useDisclosure();
  const [notificationList, setNotificationList] =
    useState<Notification[]>(notification);
  useEffect(() => {
    const savedNotifications = sessionStorage.getItem("newNotifications");
    if (savedNotifications) {
      const newNotifications: Notification[] = JSON.parse(savedNotifications);
      setNotificationList([...newNotifications, ...notification]);
    }
  }, []);
  const [search, setSearch] = useState("");
  const filteredNotification = notificationList.filter((notification) => {
    const matchesSearch =
      `${notification.title}${notification.id}${notification.recipient}`
        .toLowerCase()
        .includes(search.toLowerCase());
    return matchesSearch;
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
            title="Notification Management"
            opened={opened}
            toggle={toggle}
          />
        </AppShell.Header>

        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
            <div className=" flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
              <div className="text-[#FFEBBC] font-bold text-[22px] font-['Nunito'] mb-1">
                All Notifications
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
                <Link to="/add-notification">
                  <div className="bg-[#81401F] text-center flex items-center text-[#FFEBBC] text-[10px] lg:text-[12px] rounded-2xl font-bold px-3 h-7.5 cursor-pointer ">
                    Send Notifications
                  </div>
                </Link>
              </div>
            </div>

            <div className="">
              {filteredNotification.map((notification) => (
                <div
                  key={notification.id}
                  className="flex flex-col justify-between border-b border-[#3A3A3A] py-3"
                >
                  <div className="text-[#FFEBBC] font-semibold text-[14px]">
                    {notification.title}
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[#BDBDBD] text-[12px] mt-4">
                      {notification.message}
                    </div>
                    <div className="text-[#C8C8C8] text-[12px] mt-4">
                      {notification.date}
                    </div>
                  </div>
                </div>
              ))}
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
        </AppShell.Main>
      </AppShell>
    </>
  );
};
export default NotificationManagement;
