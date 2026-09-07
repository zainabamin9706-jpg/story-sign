import { Pagination, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { privacy } from "./data/privacyData";
import { Privacy } from "./types/Privacy";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [privacyList, setPrivacyList] = useState<Privacy[]>(privacy);
  useEffect(() => {
    const savedPrivacy = sessionStorage.getItem("newPrivacy");
    if (savedPrivacy) {
      const newPrivacy: Privacy[] = JSON.parse(savedPrivacy);
      setPrivacyList(
        privacy
          .map((defaultPolicy) => {
            const updatedPolicy = newPrivacy.find(
              (policy) => policy.id === defaultPolicy.id,
            );
            return updatedPolicy || defaultPolicy;
          })
          .concat(
            newPrivacy.filter(
              (policy) =>
                !privacy.some(
                  (defaultPolicy) => defaultPolicy.id === policy.id,
                ),
            ),
          ),
      );
    }
  }, []);
  const [search, setSearch] = useState("");
  const filteredPrivacy = privacyList.filter((privacy) => {
    const matchesSearch = `${privacy.title}${privacy.id}`
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesSearch;
  });

  const HandleDelete = (id: number) => {
    const updatedList = privacyList.filter((policy) => policy.id !== id);
    setPrivacyList(updatedList);
    sessionStorage.setItem("newPrivacy", JSON.stringify(updatedList));
  };
  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Privacy Policy">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
                <div className=" flex-col md:flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
                  <div className="text-[#FFEBBC] font-bold text-[22px] font-['Nunito'] mb-1">
                    All Policies
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
                    <Link to="/add-policy">
                      <div className="bg-[#81401F] text-center flex items-center text-[#FFEBBC] text-[12px] rounded-2xl font-bold px-7 h-7.5 cursor-pointer ">
                        Add Policy
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="">
                  {filteredPrivacy.map((privacy) => (
                    <div
                      key={privacy.id}
                      className="flex flex-col justify-between border-b border-[#3A3A3A] py-3"
                    >
                      <div className="text-[#FFEBBC] font-semibold text-[16px]">
                        {privacy.title}
                      </div>
                      <div className="flex justify-between">
                        <div className="text-[#BDBDBD] text-[14px] mt-2 leading-5 whitespace-pre-line">
                          {privacy.Description}
                        </div>
                        <div className="flex gap-3 ml-20">
                          <button
                            className="border border-[#FFEBBC] text-[#FFEBBC] p-1.5 h-7 w-7 flex items-center  cursor-pointer
                          rounded-full"
                            onClick={() => HandleDelete(privacy.id)}
                          >
                            <RiDeleteBin6Line />
                          </button>
                          <button
                            onClick={() =>
                              navigate(`/edit-policy/${privacy.id}`)
                            }
                            className="border border-[#FFEBBC] text-[#FFEBBC] p-1.5 h-7 w-7 flex items-center  cursor-pointer
                          rounded-full"
                          >
                            <RiPencilLine />
                          </button>
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
            </div>
          </div>
        </NavbarBP>
      </div>
    </>
  );
};
export default PrivacyPolicy;
