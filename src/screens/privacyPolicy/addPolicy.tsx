import { TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Paper, SimpleGrid } from "@mantine/core";
import NavbarBP from "../navbarBP";
import SidebarBP from "../sidebarBP";
import Success from "../success";
import ButtonLayout from "../buttonsLayout";
const AddPolicy = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleSendPolicy = () => {
    setTitleError("");
    setDescriptionError("");
    let hasError = false;
    if (!title.trim()) {
      setTitleError("Please enter the title.");
      hasError = true;
    }
    if (!description.trim()) {
      setDescriptionError("Please enter the description.");
      hasError = true;
    }
    if (hasError) {
      return;
    }
    const existingPolicy = JSON.parse(
      sessionStorage.getItem("newPrivacy") || "[]",
    );
    const newPolicy = {
      id: Date.now(),
      title: title,
      Description: description,
    };
    const updatedPolicies = [newPolicy, ...existingPolicy];
    sessionStorage.setItem("newPrivacy", JSON.stringify(updatedPolicies));
    setShowSuccessModal(true);
  };
  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Privacy Policy">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
                <div className="text-[20px] text-[#FFEBBC] font-semibold mb-6">
                  Add Policy
                </div>
                <Paper radius="md" bg="#202020">
                  <SimpleGrid cols={1} className="mb-3">
                    <TextInput
                      label=" Policy Title"
                      value={title}
                      onChange={(event) => {
                        setTitle(event.currentTarget.value);
                        if (event.currentTarget.value.trim()) {
                          setTitleError("");
                        }
                      }}
                      error={titleError}
                      styles={{
                        label: {
                          color: "#FFEBBC",
                          marginBottom: "12px",
                          fontSize: "15px",
                        },
                        input: {
                          backgroundColor: "#313131",
                          color: "#FFFFFF",
                          border: "none",

                          "&::placeholder": {
                            color: "#CCCCCC",
                            opacity: 1,
                          },
                        },
                      }}
                      placeholder="Title"
                      className="text-[#FFEBBC] font-['Nunito'] font-medium text-[18px]"
                    />
                  </SimpleGrid>
                  <div className="flex w-full gap-4  items-start">
                    <div className="flex-1">
                      <Textarea
                        label="Description"
                        placeholder="Write Description Here..."
                        value={description}
                        onChange={(event) => {
                          setDescription(event.currentTarget.value);
                          if (event.currentTarget.value.trim()) {
                            setDescriptionError("");
                          }
                        }}
                        error={descriptionError}
                        styles={{
                          label: {
                            marginBottom: "12px",
                            color: "#FFEBBC",
                            fontSize: "15px",
                          },
                          input: {
                            backgroundColor: "#313131",
                            color: "#FFFFFF",
                            border: "none",
                            fontSize: "14px",
                            lineHeight: "1.8",
                            resize: "none",
                            height: "150px",
                            "&::placeholder": {
                              color: "#CCCCCC !important",
                              opacity: 1,
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-20 flex gap-3 mb-3">
                    <ButtonLayout
                      title="  Add Policy"
                      onClick={handleSendPolicy}
                      variant="primary"
                    />
                    <ButtonLayout
                      title="  Cancel"
                      onClick={() => navigate("/privacy-policy")}
                      variant="secondary"
                    />
                  </div>
                </Paper>
              </div>
            </div>
          </div>
        </NavbarBP>
      </div>
      {showSuccessModal && (
        <Success
          title="Privacy Policy has been added successfully"
          onClose={() => navigate("/privacy-policy")}
        />
      )}
    </>
  );
};
export default AddPolicy;
