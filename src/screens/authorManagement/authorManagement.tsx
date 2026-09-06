import { Button, Menu, Pagination, TextInput } from "@mantine/core";
import { IconSearch, IconUserOff, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { FiUserCheck } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoFunnelOutline } from "react-icons/io5";
import { RiUserForbidLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import CardLayout from "../cardLayout";
import NavbarBP from "../navbarBP";
import SidebarBP from "../sidebarBP";
import Success from "../success";
import { authors } from "./data/authorData";
import { Author } from "./types/Author";
import Modal from "../modal";
const AuhtorManagement = () => {
  const [authorList, setAuthorList] = useState<Author[]>(authors);
  const [successOpen, setSuccessOpen] = useState(false);
  const [suspendOpen, setSuspendOpen] = useState(false);
  const [activateOpen, setActivateOpen] = useState(false);
  const [deactivateOpen, setDeactivateOpen] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  const [search, setSearch] = useState("");
  const getStatus = (status: Author["status"]) => {
    if (status === "Active") {
      return " border border-[#08BF0E] text-[#08BF0E] bg-[#0C884C33]";
    }

    if (status === "Inactive") {
      return "border-[#E19A7A] text-[#E19A7A] bg-[#E19A7A1A]";
    }

    return "border-[#D92828] text-[#D92828] bg-[#D928281A]";
  };
  const suspendReader = () => {
    if (!selectedAuthor) return;
    setAuthorList((current) =>
      current.map((reader) =>
        reader.id === selectedAuthor.id
          ? { ...reader, status: "Suspended" }
          : reader,
      ),
    );

    setSuspendOpen(false);
    setSelectedAuthor(null);
  };
  const deactivateReader = () => {
    if (!selectedAuthor) return;

    setAuthorList((current) =>
      current.map((reader) =>
        reader.id === selectedAuthor.id
          ? { ...reader, status: "Inactive" }
          : reader,
      ),
    );

    setDeactivateOpen(false);
    setSelectedAuthor(null);
  };
  const activateReader = () => {
    if (!selectedAuthor) return;
    setAuthorList((current) =>
      current.map((reader) =>
        reader.id === selectedAuthor.id
          ? { ...reader, status: "Active" }
          : reader,
      ),
    );
    setActivateOpen(false);
    setSuccessOpen(true);
  };
  const [filters, setFilters] = useState<Author["status"] | "All">("All");
  const filteredAuthors = authorList.filter((authors) => {
    const matchesSearch =
      `${authors.profile.name}${authors.id}${authors.plan}${authors.signedbook}`
        .toLowerCase()
        .includes(search.toLowerCase());
    const matchesFilter = filters === "All" || authors.status === filters;
    return matchesSearch && matchesFilter;
  });
  const totalAuthors = authorList.length;
  const activeAuthors = authorList.filter(
    (reader) => reader.status === "Active",
  ).length;
  const suspendedAuthors = authorList.filter(
    (reader) => reader.status === "Suspended",
  ).length;
  const inactiveAuthors = authorList.filter(
    (authors) => authors.status === "Inactive",
  ).length;

  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Author Management">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-black mb-4 gap-1 sm:gap-2 md:gap-3 w-auto ">
                  <CardLayout
                    title="  Total Authors"
                    value={totalAuthors}
                    icon={<HiOutlineUsers className="size-5.5" />}
                    percentage="+15%"
                    isIncreasing={true}
                    linkText=""
                    Link=""
                  />
                  <CardLayout
                    title=" Active Authors"
                    value={activeAuthors}
                    icon={<FiUserCheck className="size-5.5" />}
                    percentage="-3.5%"
                    isIncreasing={false}
                    linkText=""
                    Link="#"
                  />

                  <CardLayout
                    title=" Inactive Authors"
                    value={inactiveAuthors}
                    icon={<IconUserOff className="size-5.5" />}
                    percentage="-3.5%"
                    isIncreasing={true}
                    linkText=""
                    Link="#"
                  />
                  <CardLayout
                    title=" Suspended Authors"
                    value={suspendedAuthors}
                    icon={<RiUserForbidLine className="size-5.5" />}
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
                  <table className=" w-full min-w-225 text-left font-['Nunito']">
                    <thead>
                      <tr className="text-[#FFEBBC] text-[15px] font-normal">
                        <th className="pb-3 px-2 font-normal">ID</th>
                        <th className="pb-3 pl-5 font-normal">Profile</th>
                        <th className="pb-3 pl-15 pr-10 font-normal">Plan</th>
                        <th className="pb-3  font-normal">Signed Book</th>
                        <th className="pb-3 pl-4  font-normal">
                          Pending Request
                        </th>
                        <th className="pb-3 px-2 font-normal">Status</th>
                        <th className="pb-3  pl-10 font-normal">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAuthors.length === 0 ? (
                        <tr>
                          <td
                            colSpan={7}
                            className="py-10 text-center text-[#CCCCCC]"
                          >
                            No Authors found
                          </td>
                        </tr>
                      ) : (
                        filteredAuthors.map((authors) => (
                          <tr
                            key={authors.id}
                            className="border-b border-[#CBCBCB80] text-[#CCCCCC] text-[12px]"
                          >
                            <td className="py-8 px-2">
                              <Link to="/author-detail-view">{authors.id}</Link>
                            </td>
                            <td className="py-8 pl-5">
                              <div className="flex flex-row items-center gap-1.5 ">
                                <img
                                  className="rounded-full h-7 w-7"
                                  src={authors.profile.image}
                                />
                                <span className="font-bold text-[13.5px] w-7">
                                  <Link to="/author-detail-view">
                                    {authors.profile.name}
                                  </Link>
                                </span>
                              </div>
                            </td>
                            <td className="py-3 pb-3 pl-15">{authors.plan}</td>
                            <td className="py-3 px-2">{authors.signedbook}</td>
                            <td className="py-3 pl-5">
                              {authors.pendingRequest}
                            </td>
                            <td className="py-3 px-2">
                              <div
                                className={`border text-[11px] flex items-center justify-center font-bold px-2 py-1 w-18 rounded-lg ${getStatus(
                                  authors.status,
                                )}`}
                              >
                                {authors.status}
                              </div>
                            </td>
                            <td className="py-3 pl-10">
                              <div className="flex gap-2">
                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {
                                    setSelectedAuthor(authors);
                                    setSuspendOpen(true);
                                  }}
                                >
                                  {authors.action.icon1}
                                </button>

                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {
                                    setSelectedAuthor(authors);
                                    setDeactivateOpen(true);
                                  }}
                                >
                                  {authors.action.icon2}
                                </button>

                                <button
                                  className="border border-[#FFEBBC] h-7 w-7 flex items-center justify-center rounded-full cursor-pointer"
                                  onClick={() => {
                                    setSelectedAuthor(authors);
                                    setActivateOpen(true);
                                  }}
                                >
                                  {authors.action.icon3}
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
      {suspendOpen && selectedAuthor && (
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
      {deactivateOpen && selectedAuthor && (
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

      {activateOpen && selectedAuthor && (
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
            setSelectedAuthor(null);
          }}
        />
      )}
    </>
  );
};
export default AuhtorManagement;
