import { TextInput, Textarea, Button, Paper, SimpleGrid } from "@mantine/core";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { privacy } from "./data/privacyData";
import NavbarBP from "../navbarBP";
import SidebarBP from "../sidebarBP";
import { Privacy } from "./types/Privacy";

const EditPolicy = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  useEffect(() => {
    const savedPolicies = JSON.parse(
      sessionStorage.getItem("newPrivacy") || "[]",
    );
    const allPolicies = [...privacy, ...savedPolicies];
    const policyToEdit = allPolicies.find(
      (policy: Privacy) => policy.id === Number(id),
    );
    if (policyToEdit) {
      setTitle(policyToEdit.title);
      setDescription(policyToEdit.Description);
    }
  }, [id]);
  const handleUpdatePolicy = () => {
    setTitleError("");
    setDescriptionError("");

    let hasError = false;

    if (!title.trim()) {
      setTitleError("Please enter a policy title.");
      hasError = true;
    }

    if (!description.trim()) {
      setDescriptionError("Please enter a policy description.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const existingPolicies: Privacy[] = JSON.parse(
      sessionStorage.getItem("newPrivacy") || "[]",
    );
    const policyExists = existingPolicies.some(
      (policy) => policy.id === Number(id),
    );
    let updatedPolicies: Privacy[];
    if (policyExists) {
      updatedPolicies = existingPolicies.map((policy) =>
        policy.id === Number(id)
          ? {
              ...policy,
              title: title,
              Description: description,
            }
          : policy,
      );
    } else {
      updatedPolicies = [
        ...existingPolicies,
        {
          id: Number(id),
          title: title,
          Description: description,
        },
      ];
    }

    sessionStorage.setItem("newPrivacy", JSON.stringify(updatedPolicies));

    alert("Privacy Policy has been updated successfully.");

    navigate("/privacy-policy");
  };

  return (
    <div className="bg-[#313131] min-h-screen w-full">
      <NavbarBP Title="Privacy Policy">
        <div className="flex flex-row gap-4 w-full">
          <SidebarBP />

          <div className="flex flex-col flex-1 mr-4 items-center">
            <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
              <div className="text-[20px] text-[#FFEBBC] font-semibold mb-6">
                Edit Policy
              </div>

              <Paper radius="md" bg="#202020">
                <SimpleGrid cols={1} className="mb-3">
                  <TextInput
                    label="Policy Title"
                    placeholder="Title"
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
                      },
                    }}
                  />
                </SimpleGrid>

                <div className="flex w-full gap-4 items-start">
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
                        },
                      }}
                    />
                  </div>
                </div>

                <div className="mt-20 flex gap-3 mb-3">
                  <Button
                    onClick={handleUpdatePolicy}
                    styles={{
                      root: {
                        backgroundColor: "#81401F",
                        color: "#FFEBBC",
                        fontSize: "13px",
                        padding: "4px 64px",
                      },
                    }}
                  >
                    Update Policy
                  </Button>

                  <Button
                    onClick={() => navigate("/privacy-policy")}
                    styles={{
                      root: {
                        backgroundColor: "#2C2C2C",
                        color: "#D4D4D4",
                        fontSize: "13px",
                        padding: "4px 64px",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </NavbarBP>
    </div>
  );
};

export default EditPolicy;
