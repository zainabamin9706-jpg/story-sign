import { TextInput, Select, Button } from "@mantine/core";
import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import ButtonLayout from "../../components/buttonsLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const Settings = () => {
  const [opened, { toggle }] = useDisclosure();
  const [platformName, setPlatformName] = useState("Storysign");
  const [email, setEmail] = useState("sign@gmail.com");
  const [url, setUrl] = useState("www.storysign.com");
  const [format, setFormat] = useState("PDF");
  const [isEditing, setIsEditing] = useState(false);
  const [draftPlatformName, setDraftPlatformName] = useState(platformName);
  const [draftEmail, setDraftEmail] = useState(email);
  const [draftUrl, setDraftUrl] = useState(url);
  const [draftFormat, setDraftFormat] = useState(format);
  const handleEdit = () => {
    setDraftPlatformName(platformName);
    setDraftEmail(email);
    setDraftUrl(url);
    setDraftFormat(format);
    setIsEditing(true);
  };
  const handleUpdate = () => {
    setPlatformName(draftPlatformName);
    setEmail(draftEmail);
    setUrl(draftUrl);
    setFormat(draftFormat);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setDraftPlatformName(platformName);
    setDraftEmail(email);
    setDraftUrl(url);
    setDraftFormat(format);
    setIsEditing(false);
  };
  return (
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
        <NavbarBP title="Platform Settings" opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar className="bg-[#313131]">
        <SidebarBP />
      </AppShell.Navbar>
      <AppShell.Main>
        <div className="w-full p-7 mr-4 text-white h-full bg-[#202020] rounded-xl">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-xl font-medium text-[#FFEBBC]">
              Configure Platform Settings
            </h1>
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="text-[#FFEBBC] bg-[#81401F] p-2 rounded-full cursor-pointer"
              >
                <LuPencil className="size-4" />
              </button>
            )}
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="text-[14px] lg:text-12 text-[#FFEBBC] w-1/3">
              Platform Name
            </div>
            {isEditing ? (
              <TextInput
                value={draftPlatformName}
                onChange={(event) =>
                  setDraftPlatformName(event.currentTarget.value)
                }
                className="w-1/3"
                styles={{
                  input: {
                    backgroundColor: "#313131",
                    color: "white",
                    border: "none",
                    fontSize: "12px",
                    padding: "12px",
                  },
                }}
              />
            ) : (
              <div className="w-1/3 rounded-md bg-[#313131]  px-3.5 py-2 text-[13px] text-[#FFEBBC]">
                {platformName}
              </div>
            )}
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="text-[14px] lg:text-12 text-[#FFEBBC] w-1/3">
              Support Email
            </div>
            {isEditing ? (
              <TextInput
                value={draftEmail}
                onChange={(event) => setDraftEmail(event.currentTarget.value)}
                className="w-1/3"
                styles={{
                  input: {
                    backgroundColor: "#313131",
                    color: "white",
                    border: "none",
                    fontSize: "12px",
                    padding: "12px",
                  },
                }}
              />
            ) : (
              <div className="w-1/3 rounded-md bg-[#313131]   px-3.5 py-2 text-[13px]  text-[#FFEBBC]">
                {email}
              </div>
            )}
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="text-[14px] lg:text-12 text-[#FFEBBC] w-1/3">
              Platform URL
            </div>

            {isEditing ? (
              <TextInput
                value={draftUrl}
                onChange={(event) => setDraftUrl(event.currentTarget.value)}
                className="w-1/3"
                styles={{
                  input: {
                    backgroundColor: "#313131",
                    color: "white",
                    border: "none",
                    fontSize: "12px",
                    padding: "12px",
                  },
                }}
              />
            ) : (
              <div className="w-1/3 rounded-md bg-[#313131]   px-3.5 py-2 text-[13px]  text-[#FFEBBC]">
                {url}
              </div>
            )}
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="text-[14px] lg:text-12 text-[#FFEBBC] w-1/3">
              Ebooks Format Allowed
            </div>

            {isEditing ? (
              <Select
                value={draftFormat}
                onChange={(value) => setDraftFormat(value || "PDF")}
                data={["PDF", "EPUB", "MOBI"]}
                className="w-1/3"
                styles={{
                  input: {
                    backgroundColor: "#313131",
                    color: "white",
                    border: "none",
                    fontSize: "12px",
                    padding: "12px",
                  },

                  dropdown: {
                    backgroundColor: "#313131",
                    border: "none",
                  },

                  option: {
                    backgroundColor: "#313131",
                    color: "white",
                    fontSize: "12px",
                  },
                }}
              />
            ) : (
              <div className="w-1/3 rounded-md bg-[#313131]  px-3.5 py-2 text-[13px]  text-[#FFEBBC]">
                {format}
              </div>
            )}
          </div>
          {isEditing && (
            <div className="mt-20 flex gap-3 mb-3">
              <ButtonLayout
                title="Update"
                variant="primary"
                onClick={handleUpdate}
              />
              <ButtonLayout
                title="Cancel"
                variant="secondary"
                onClick={handleCancel}
              />
            </div>
          )}
        </div>
      </AppShell.Main>
    </AppShell>
  );
};

export default Settings;
