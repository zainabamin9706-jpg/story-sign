import { Button, Paper, SimpleGrid, TextInput } from "@mantine/core";
import { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import readerdetail from "../../assets/readerdetail.png";
import ButtonLayout from "../../components/buttonsLayout";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import Success from "../../components/success";

const Profile = () => {
  const savedProfile = JSON.parse(
    sessionStorage.getItem("profile") ||
      JSON.stringify({
        fullName: "Alexa Rawles",
        emailAddress: "alexarawles@gmail.com",
      }),
  );
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [fullName, setFullName] = useState(savedProfile.fullName);
  const [fullNameError, setFullNameError] = useState("");
  const [emailAddress, setEmailAddress] = useState(savedProfile.emailAddress);
  const [emailAddressError, setEmailAddressError] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    const savedProfile = JSON.parse(
      sessionStorage.getItem("profile") ||
        JSON.stringify({
          fullName: "Alexa Rawles",
          emailAddress: "alexarawles@gmail.com",
        }),
    );
    setFullName(savedProfile.fullName);
    setEmailAddress(savedProfile.emailAddress);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setFullNameError("");
    setEmailAddressError("");
    setOldPasswordError("");
    setNewPasswordError("");
    setConfirmPasswordError("");
    setIsEditing(false);
  };
  const handleUpdateProfile = () => {
    setFullNameError("");
    setEmailAddressError("");
    setOldPasswordError("");
    setNewPasswordError("");
    setConfirmPasswordError("");

    let hasError = false;

    if (!fullName.trim()) {
      setFullNameError("Please enter your full name.");
      hasError = true;
    }

    if (!emailAddress.trim()) {
      setEmailAddressError("Please enter your email address.");
      hasError = true;
    }

    const isChangingPassword =
      oldPassword.trim() || newPassword.trim() || confirmPassword.trim();
    if (isChangingPassword) {
      if (!oldPassword.trim()) {
        setOldPasswordError("Please enter your old password.");
        hasError = true;
      }
      if (!newPassword.trim()) {
        setNewPasswordError("Please enter a new password.");
        hasError = true;
      }
      if (!confirmPassword.trim()) {
        setConfirmPasswordError("Please confirm your new password.");
        hasError = true;
      }
      if (
        newPassword.trim() &&
        confirmPassword.trim() &&
        newPassword !== confirmPassword
      ) {
        setConfirmPasswordError(
          "New password and confirm password do not match.",
        );
        hasError = true;
      }
    }
    if (hasError) {
      return;
    }
    const updatedProfile = {
      fullName: fullName.trim(),
      emailAddress: emailAddress.trim(),
    };
    sessionStorage.setItem("profile", JSON.stringify(updatedProfile));
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setIsEditing(false);
    setShowSuccessModal(true);
  };

  return (
    <>
      <div className="bg-[#313131] min-h-screen w-full ">
        <NavbarBP Title="Profile">
          <div className="flex flex-row gap-8 w-full">
            <SidebarBP />
            <div className="flex flex-col flex-1 mr-9 items-center">
              <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
                <div className="flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <img
                      src={readerdetail}
                      alt="profile"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className=" flex flex-col">
                      <div className="font-['Nunito'] font-semibold text-[18px] text-[#FFEBBC]">
                        {fullName}
                      </div>
                      <div className="font-['Nunito'] font-normal text-[#FFEBBC] text-[12px]">
                        {emailAddress}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="bg-[#81401F] p-2 rounded-full text-[#FFEBBC] cursor-pointer hover:opacity-90 transition"
                  >
                    <RiPencilLine size={18} />{" "}
                  </button>
                </div>
                <div className="mt-5">
                  <Paper radius="md" bg="#202020">
                    <SimpleGrid cols={2} className="mb-3">
                      <TextInput
                        className="text-[#FFEBBC] font-['Nunito'] font-medium text-[18px]"
                        label="Full Name"
                        value={fullName}
                        disabled={!isEditing}
                        error={fullNameError}
                        onChange={(event) => {
                          setFullName(event.currentTarget.value);

                          if (event.currentTarget.value.trim()) {
                            setFullNameError("");
                          }
                        }}
                        styles={{
                          label: {
                            color: "#FFEBBC",
                            marginBottom: "12px",
                            fontSize: "13px",
                            fontWeight: 400,
                          },
                          input: {
                            backgroundColor: "#313131",
                            color: "#FFFFFF",
                            border: "none",
                            "&:disabled": {
                              backgroundColor: "#313131",
                              color: "#FFFFFF",
                              opacity: 1,
                            },

                            "&::placeholder": {
                              color: "#CCCCCC",
                              opacity: 1,
                            },
                          },
                        }}
                      />
                      <TextInput
                        className="text-[#FFEBBC] font-['Nunito'] font-medium text-[18px]"
                        label="Email Address"
                        value={emailAddress}
                        error={emailAddressError}
                        disabled={!isEditing}
                        onChange={(event) => {
                          setEmailAddress(event.currentTarget.value);

                          if (event.currentTarget.value.trim()) {
                            setEmailAddressError("");
                          }
                        }}
                        styles={{
                          label: {
                            color: "#FFEBBC",
                            marginBottom: "12px",
                            fontSize: "13px",
                            fontWeight: 400,
                          },
                          input: {
                            backgroundColor: "#313131",
                            color: "#FFFFFF",
                            border: "none",
                            "&:disabled": {
                              backgroundColor: "#313131",
                              color: "#FFFFFF",
                              opacity: 1,
                            },

                            "&::placeholder": {
                              color: "#CCCCCC",
                              opacity: 1,
                            },
                          },
                        }}
                      />
                    </SimpleGrid>
                  </Paper>
                </div>
                <div className="my-8 text-[#FFEBBC] font-semibold w-full">
                  Change Password
                </div>
                <Paper radius="md" bg="#202020">
                  <SimpleGrid cols={3} className="mb-3">
                    <TextInput
                      type="password"
                      label="Old Password"
                      value={oldPassword}
                      error={oldPasswordError}
                      disabled={!isEditing}
                      onChange={(event) => {
                        setOldPassword(event.currentTarget.value);

                        if (event.currentTarget.value.trim()) {
                          setOldPasswordError("");
                        }
                      }}
                      className="text-[#FFEBBC] font-['Nunito'] font-medium text-[18px]"
                      styles={{
                        label: {
                          color: "#FFEBBC",
                          marginBottom: "12px",
                          fontSize: "13px",
                          fontWeight: 400,
                        },
                        input: {
                          backgroundColor: "#313131",
                          color: "#FFFFFF",
                          border: "none",

                          "&::placeholder": {
                            color: "#CCCCCC",
                            opacity: 1,
                          },
                          "&:disabled": {
                            backgroundColor: "#313131",
                            color: "#FFFFFF",
                            opacity: 1,
                          },
                        },
                      }}
                    />

                    <TextInput
                      label="New Password"
                      type="password"
                      value={newPassword}
                      error={newPasswordError}
                      disabled={!isEditing}
                      onChange={(event) => {
                        const value = event.currentTarget.value;
                        setNewPassword(value);
                        if (value.trim()) {
                          setNewPasswordError("");
                        }
                        if (value === confirmPassword) {
                          setConfirmPasswordError("");
                        }
                      }}
                      styles={{
                        label: {
                          color: "#FFEBBC",
                          marginBottom: "12px",
                          fontSize: "13px",
                          fontWeight: 400,
                        },
                        input: {
                          backgroundColor: "#313131",
                          color: "#FFFFFF",
                          border: "none",

                          "&::placeholder": {
                            color: "#CCCCCC",
                            opacity: 50,
                          },
                          "&:disabled": {
                            backgroundColor: "#313131",
                            color: "#FFFFFF",
                            opacity: 1,
                          },
                        },
                      }}
                      className="text-[#FFEBBC] font-['Nunito'] font-medium text-[18px]"
                    />
                    <TextInput
                      type="password"
                      label="Confirm Password"
                      disabled={!isEditing}
                      value={confirmPassword}
                      error={confirmPasswordError}
                      onChange={(event) => {
                        const value = event.currentTarget.value;
                        setConfirmPassword(value);
                        if (!value.trim()) {
                          setConfirmPasswordError(
                            "Please confirm your new password.",
                          );
                        } else if (value !== newPassword) {
                          setConfirmPasswordError(
                            "New password and confirm password do not match.",
                          );
                        } else {
                          setConfirmPasswordError("");
                        }
                      }}
                      styles={{
                        label: {
                          color: "#FFEBBC",
                          marginBottom: "12px",
                          fontSize: "13px",
                          fontWeight: 400,
                        },
                        input: {
                          backgroundColor: "#313131",
                          color: "#FFFFFF",
                          border: "none",
                          "&:disabled": {
                            backgroundColor: "#313131",
                            color: "#FFFFFF",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  </SimpleGrid>
                  {isEditing && (
                    <div className="mt-20 flex gap-3 mb-7">
                      <ButtonLayout
                        title=" Update Profile"
                        onClick={handleUpdateProfile}
                        variant="primary"
                      />
                      <ButtonLayout
                        title=" Cancel"
                        onClick={handleCancel}
                        variant="secondary"
                      />
                    </div>
                  )}
                </Paper>
              </div>
            </div>
          </div>
        </NavbarBP>
      </div>
      {showSuccessModal && (
        <Success
          title="Your Profile has been updated successfully"
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </>
  );
};
export default Profile;
