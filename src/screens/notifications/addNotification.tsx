import { TextInput, Textarea } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, SimpleGrid, Select } from "@mantine/core";
import ButtonLayout from "../../components/buttonsLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import Success from "../../components/success";
const AddNotification = () => {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [recipientError, setRecipientError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const handleSendNotification = () => {
    setRecipientError("");
    setTitleError("");
    setMessageError("");

    let hasError = false;

    if (!recipient) {
      setRecipientError("Please select a recipient.");
      hasError = true;
    }

    if (!title.trim()) {
      setTitleError("Please enter the title.");
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError("Please enter the message.");
      hasError = true;
    }
    if (hasError) {
      return;
    }

    const existingNotifications = JSON.parse(
      sessionStorage.getItem("newNotifications") || "[]",
    );
    const newNotification = {
      id: Date.now(),
      recipient: recipient,
      title: title,
      message: message,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
    const updatedNotifications = [newNotification, ...existingNotifications];
    sessionStorage.setItem(
      "newNotifications",
      JSON.stringify(updatedNotifications),
    );
    setShowSuccessModal(true);
  };
  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Notification Management">
          <div className="flex flex-row gap-4 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-4 items-center">
              <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
                <div className="text-[20px] text-[#FFEBBC] font-semibold mb-6">
                  Add Notification
                </div>
                <Paper radius="md" bg="#202020">
                  <SimpleGrid cols={1} className="mb-3">
                    <Select
                      label="Recipients"
                      data={["Authors", "Readers"]}
                      placeholder="Authors"
                      value={recipient}
                      onChange={(value) => {
                        setRecipient(value);
                        if (value) {
                          setRecipientError("");
                        }
                      }}
                      error={recipientError}
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
                      label="Title"
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
                            opacity: 50,
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
                        label="Message"
                        placeholder="Write Message Here..."
                        value={message}
                        onChange={(event) => {
                          setMessage(event.currentTarget.value);

                          if (event.currentTarget.value.trim()) {
                            setMessageError("");
                          }
                        }}
                        error={messageError}
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
                    <ButtonLayout
                      title=" Send Notification"
                      onClick={handleSendNotification}
                      variant="primary"
                    />
                    <ButtonLayout
                      title=" Cancel"
                      onClick={() => navigate("/notification-management")}
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
          title="Subscription plan has been added successfully"
          onClose={() => navigate("/notification-management")}
        />
      )}
    </>
  );
};
export default AddNotification;
