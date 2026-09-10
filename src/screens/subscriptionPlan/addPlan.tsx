import {
  Button,
  Paper,
  Select,
  SimpleGrid,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plan } from "./types/Plan";
import ButtonLayout from "../../components/buttonsLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import Success from "../../components/success";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const AddPlan = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const [planName, setPlanName] = useState("");
  const [planNameError, setPlanNameError] = useState("");
  const [planType, setPlanType] = useState<string | null>(null);
  const [planTypeError, setPlanTypeError] = useState("");
  const [planCharges, setPlanCharges] = useState("");
  const [planChargesError, setPlanChargesError] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [featuresError, setFeaturesError] = useState("");
  const [showNewPlan, setShowNewPlan] = useState(false);
  const handleAddPlan = () => {
    setPlanNameError("");
    setPlanTypeError("");
    setPlanChargesError("");
    setFeaturesError("");
    let hasError = false;

    if (!planName.trim()) {
      setPlanNameError("Please enter the plan name.");
      hasError = true;
    }
    if (!planType) {
      setPlanTypeError("Please select the plan type.");
      hasError = true;
    }

    if (!planCharges.trim()) {
      setPlanChargesError("Please enter the plan charges.");
      hasError = true;
    }

    const validFeatures = features.filter((feature) => feature.trim() !== "");
    if (validFeatures.length === 0) {
      setFeaturesError("Please add at least one feature.");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const newPlan: Plan = {
      name: planName,
      type: planType,
      charges: planCharges,
      features: validFeatures,
    };
    const existingPlans = JSON.parse(sessionStorage.getItem("plans") || "[]");
    sessionStorage.setItem(
      "plans",
      JSON.stringify([...existingPlans, newPlan]),
    );

    setShowNewPlan(true);
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
          <NavbarBP title="Subscription Plan" opened={opened} toggle={toggle} />
        </AppShell.Header>

        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
            <div className="text-[20px] text-[#FFEBBC] font-semibold mb-6">
              Add Plan
            </div>
            <Paper radius="md" bg="#202020">
              <SimpleGrid cols={3} className="mb-3">
                <TextInput
                  label="Plan Name"
                  value={planName}
                  error={planNameError}
                  onChange={(event) => {
                    setPlanName(event.currentTarget.value);

                    if (event.currentTarget.value.trim()) {
                      setPlanNameError("");
                    }
                  }}
                  placeholder="Starter"
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
                  className="text-[#FFEBBC] font-['Nunito'] font-medium text-[18px]"
                />

                <Select
                  label="Plan Type"
                  data={["Monthly", "Yearly"]}
                  value={planType}
                  error={planTypeError}
                  onChange={(value) => {
                    setPlanType(value);

                    if (value) {
                      setPlanTypeError("");
                    }
                  }}
                  placeholder="Monthly"
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
                    dropdown: {
                      backgroundColor: "#313131",
                      border: "none",
                    },
                    option: {
                      backgroundColor: "#313131",
                      color: "#FFFFFF",
                    },
                  }}
                />

                <TextInput
                  label="Plan Charges"
                  value={planCharges}
                  error={planChargesError}
                  onChange={(event) => {
                    setPlanCharges(event.currentTarget.value);

                    if (event.currentTarget.value.trim()) {
                      setPlanChargesError("");
                    }
                  }}
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
                        opacity: 50,
                      },
                    },
                  }}
                  placeholder="$29"
                  className="text-[#FFEBBC] font-['Nunito'] font-medium text-[18px]"
                />
              </SimpleGrid>
              <div className="flex w-full gap-4 items-start">
                <div className="flex-1">
                  <Textarea
                    label="Features"
                    value={features.join("\n")}
                    error={featuresError}
                    onChange={(event) => {
                      const value = event.currentTarget.value;

                      setFeatures(value.split("\n"));

                      if (value.trim()) {
                        setFeaturesError("");
                      }
                    }}
                    minRows={1}
                    rows={Math.max(features.length, 1)}
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
                      },
                    }}
                  />
                </div>

                <div className="pt-9">
                  <Button
                    onClick={() => {
                      setFeatures((prev) => [...prev, ""]);
                    }}
                    styles={{
                      root: {
                        backgroundColor: "#FFEBBC",
                        color: "#81401F",
                        fontSize: "13px",
                        fontWeight: 700,
                      },
                    }}
                  >
                    Add More
                  </Button>
                </div>
              </div>
              <div className="mt-20 flex gap-3 mb-7">
                <ButtonLayout
                  title="Add Plan "
                  onClick={handleAddPlan}
                  variant="primary"
                />
                <ButtonLayout
                  title="Cancel"
                  onClick={() => navigate("/subscription")}
                  variant="secondary"
                />
              </div>
            </Paper>
          </div>
        </AppShell.Main>
      </AppShell>
      {showNewPlan && (
        <Success
          title="Subscription plan has been added successfully"
          onClose={() => navigate("/subscription")}
        />
      )}
    </>
  );
};
export default AddPlan;
