import { TextInput } from "@mantine/core";

import { Paper } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonLayout from "../../components/buttonsLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import Success from "../../components/success";

import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const UpdatedFee = () => {
  const [opened, { toggle }] = useDisclosure();
  const [fee, setFee] = useState("");
  const [feeError, setFeeError] = useState("");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleUpdateFee = () => {
    setFeeError("");

    if (!fee.trim()) {
      setFeeError("Please enter an autograph fee.");
      return;
    }
    sessionStorage.setItem("currentAutographFee", fee);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/autograph-fee");
  };
  const handleCancel = () => {
    navigate("/autograph-fee");
  };
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
          <NavbarBP title="Autograph Fee " opened={opened} toggle={toggle} />
        </AppShell.Header>

        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
            <div className="text-[20px] text-[#FFEBBC] font-semibold mb-6">
              Updated Autograph Fee
            </div>
            <TextInput
              placeholder="$12"
              value={fee}
              onChange={(event) => {
                setFee(event.currentTarget.value);

                if (event.currentTarget.value.trim()) {
                  setFeeError("");
                }
              }}
              error={feeError}
              w="100%"
              styles={{
                input: {
                  backgroundColor: "#313131",
                  color: "white",
                  fontSize: "12px",
                  border: "none",

                  "&:focus": {
                    border: "none",
                    outline: "none",
                  },

                  "&::placeholder": {
                    color: "white",
                    opacity: 1,
                    fontSize: "12px",
                  },
                },
              }}
            />
            <Paper radius="md" bg="#202020">
              <div className="mt-20 flex gap-3 mb-7">
                <ButtonLayout
                  title="Update Fee"
                  onClick={handleUpdateFee}
                  variant="primary"
                />
                <ButtonLayout
                  title=" Cancel"
                  onClick={handleCancel}
                  variant="secondary"
                />
              </div>
            </Paper>
          </div>
        </AppShell.Main>
      </AppShell>
      {showModal && (
        <Success
          title="Autograph fee plan has been Updated successfully"
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
export default UpdatedFee;
