import { Button, Menu, Modal, Pagination, TextInput } from "@mantine/core";
import { IconSearch, IconUserOff, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { FiUserCheck } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoFunnelOutline } from "react-icons/io5";
import { RiUserForbidLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { readers } from "./data/readerData";
import { Reader } from "./types/Reader";
import CardLayout from "../../components/cardLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import Success from "../../components/success";
const ReaderManagement = () => {
  const [readerList, setReaderList] = useState<Reader[]>(readers);
  const [successOpen, setSuccessOpen] = useState(false);
  const [suspendOpen, setSuspendOpen] = useState(false);
  const [activateOpen, setActivateOpen] = useState(false);
  const [deactivateOpen, setDeactivateOpen] = useState(false);
  const [selectedReader, setSelectedReader] = useState<Reader | null>(null);
  const [search, setSearch] = useState("");
  const getStatus = (status: Reader["status"]) => {
    if (status === "Active") {
      return " border border-[#08BF0E] text-[#08BF0E] bg-[#0C884C33]";
    }

    if (status === "Inactive") {
      return "border-[#E19A7A] text-[#E19A7A] bg-[#E19A7A1A]";
    }

    return "border-[#D92828] text-[#D92828] bg-[#D928281A]";
  };
  const suspendReader = () => {
    if (!selectedReader) return;

    setReaderList((current) =>
      current.map((reader) =>
        reader.id === selectedReader.id
          ? { ...reader, status: "Suspended" }
          : reader,
      ),
    );

    setSuspendOpen(false);
    setSelectedReader(null);
  };
  const deactivateReader = () => {
    if (!selectedReader) return;
    setReaderList((current) =>
      current.map((reader) =>
        reader.id === selectedReader.id
          ? { ...reader, status: "Inactive" }
          : reader,
      ),
    );

    setDeactivateOpen(false);
    setSelectedReader(null);
  };
  const activateReader = () => {
    if (!selectedReader) return;
    setReaderList((current) =>
      current.map((reader) =>
        reader.id === selectedReader.id
          ? { ...reader, status: "Active" }
          : reader,
      ),
    );
    setActivateOpen(false);
    setSuccessOpen(true);
  };
  const [filters, setFilters] = useState<Reader["status"] | "All">("All");
  const filteredReaders = readerList.filter((reader) => {
    const matchesSearch =
      `${reader.profile.name}${reader.email}${reader.book}${reader.id}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesFilter = filters === "All" || reader.status === filters;
    return matchesSearch && matchesFilter;
  });

  const totalReaders = readerList.length;
  const activeReaders = readerList.filter(
    (reader) => reader.status === "Active",
  ).length;
  const suspendedReaders = readerList.filter(
    (reader) => reader.status === "Suspended",
  ).length;
  const inactiveReaders = readerList.filter(
    (reader) => reader.status === "Inactive",
  ).length;

  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Reader Management">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black mb-4 gap-1 sm:gap-2 md:gap-3 w-auto ">
                  <CardLayout
                    title=" Total Readers"
                    value={totalReaders}
                    icon={<HiOutlineUsers className="size-5.5" />}
                    percentage="+15%"
                    isIncreasing={true}
                    linkText=""
                    Link=""
                  />
                  <CardLayout
                    title=" Active Readers"
                    value={activeReaders}
                    icon={<FiUserCheck className="size-5.5" />}
                    percentage="-3.5%"
                    isIncreasing={false}
                    linkText=""
                    Link="#"
                  />

                  <CardLayout
                    title=" Inactive Readers"
                    value={inactiveReaders}
                    icon={<IconUserOff className="size-5.5" />}
                    percentage="-3.5%"
                    isIncreasing={true}
                    linkText=""
                    Link="#"
                  />
                  <CardLayout
                    title=" Suspended Readers"
                    value={suspendedReaders}
                    icon={<RiUserForbidLine className="size-5.5" />}
                    percentage="+5%"
                    isIncreasing={true}
                    linkText=""
                    Link="#"
                  />
                </div>
                <div className="mt-6 flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
                  <div className="text-[#FFEBBC] font-bold text-[19px] font-['Nunito']">
                    All Readers
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mr-0 sm:mr-6 mt-3 md:mt-0">
                    <TextInput
                      placeholder="Search"
                      value={search}
                      onChange={(event) => setSearch(event.currentTarget.value)}
                      leftSection={<IconSearch size={14} stroke={2} />}
                      radius="xl"
                      className="w-full sm:w-50"
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

                        <Menu.Item onClick={() => setFilters("Active")}>
                          Active
                        </Menu.Item>

                        <Menu.Item onClick={() => setFilters("Inactive")}>
                          Inactive
                        </Menu.Item>

                        <Menu.Item onClick={() => setFilters("Suspended")}>
                          Suspended
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </div>
                </div>
                <div className="overflow-x-auto mt-5">
                  <table className="w-full min-w-225 font-['Nunito'] text-left">
                    <thead>
                      <tr className="text-[#FFEBBC] text-[15px] font-bold">
                        <th className="px-3 pb-4">ID</th>
                        <th className="px-3 pb-4">Profile</th>
                        <th className="pl-19 pr-4  pb-4">Email</th>
                        <th className="px-3 pb-4">Book</th>
                        <th className="px-3 pb-4">Status</th>
                        <th className="px-3 pb-4">Spent</th>
                        <th className="px-3 pb-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredReaders.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="py-10 text-center text-[#CCCCCC]"
                          >
                            No readers found
                          </td>
                        </tr>
                      ) : (
                        filteredReaders.map((reader) => (
                          <tr
                            className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[14px]"
                            key={reader.id}
                          >
                            <td className="font-bold px-2 py-7 ">
                              <Link to="/reader-detail-view">{reader.id}</Link>
                            </td>
                            <td className="px-3 py-4">
                              <div className="flex flex-row items-center gap-1.5 ">
                                <img
                                  className="rounded-full h-8 w-8"
                                  src={reader.profile.image}
                                />
                                <span className="font-bold text-[13px] w-3">
                                  <Link to="/reader-detail-view">
                                    {reader.profile.name}
                                  </Link>
                                </span>
                              </div>
                            </td>
                            <td className=" pl-19 pr-4 py-4 ">
                              {reader.email}
                            </td>
                            <td className="px-2 py-4">{reader.book}</td>
                            <td className="px-2 py-4">
                              <div
                                className={`border text-[11px] flex items-center justify-center font-bold px-2 py-1 w-18 rounded-lg ${getStatus(
                                  reader.status,
                                )}`}
                              >
                                {reader.status}
                              </div>
                            </td>
                            <td className="px-2 py-4 font-semibold">
                              {reader.spent}
                            </td>
                            <td className="px-2 py-4">
                              <div className="flex gap-2">
                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {
                                    setSelectedReader(reader);
                                    setSuspendOpen(true);
                                  }}
                                >
                                  {reader.actions.icon1}
                                </button>

                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {
                                    setSelectedReader(reader);
                                    setDeactivateOpen(true);
                                  }}
                                >
                                  {reader.actions.icon2}
                                </button>

                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {
                                    setSelectedReader(reader);
                                    setActivateOpen(true);
                                  }}
                                >
                                  {reader.actions.icon3}
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
              <div className=" flex items-center justify-center w-full text-[#FFEBBC] mt-10 mb-4 isActive:bg-[#81401F]  ">
                <Pagination
                  total={99}
                  // value={1}
                  // startValue={1}
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
      {suspendOpen && selectedReader && (
        <Modal
          title="Suspend User"
          icon={<IconX stroke={0.8} className="text-black size-5" />}
          description="Are you sure you want to suspend this user? The user will be suspended and
          access to their account."
          reason="reason"
          confirmationButtonContent="Suspend"
          onClose={() => setSuspendOpen(false)}
          onConfirmation={suspendReader}
        />
      )}
      {deactivateOpen && selectedReader && (
        <Modal
          title="Deactivate User"
          icon={<IconX stroke={0.8} className="text-black size-5" />}
          description="Are you sure you want to deactivate this user? The user will activated and
          access to their account."
          reason="reason"
          confirmationButtonContent="Deactivate"
          onClose={() => setDeactivateOpen(false)}
          onConfirmation={deactivateReader}
        />
      )}

      {activateOpen && selectedReader && (
        <Modal
          title="Activate User"
          icon={<IconX stroke={0.8} className="text-black size-5" />}
          description="Are you sure you want to active this user? The user will activated and
          access to their account."
          reason="reason"
          confirmationButtonContent="Activate"
          onClose={() => setActivateOpen(false)}
          onConfirmation={activateReader}
        />
      )}
      {successOpen && (
        <Success
          title="User has been activated successfully"
          onClose={() => {
            setSuccessOpen(false);
            setSelectedReader(null);
          }}
        />
      )}
    </>
  );
};
export default ReaderManagement;
