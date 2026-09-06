import { PinInput } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BluePrint from "./bluePrint";
import AuthenticationButtonLayout from "./authenticationButtonLayout";
import TitleDescLayout from "../../components/titleDescLayout";

const OTP = () => {
  const [otp, setOtp] = useState<string>("");
  const navigate = useNavigate();
  <form
    onSubmit={(event) => {
      event.preventDefault();
      handleVerify();
    }}
  >
    <AuthenticationButtonLayout title="Verify OTP" />
  </form>;
  const handleVerify = () => {
    const correctOTP = "111111";
    if (otp.length !== 6) {
      alert("Please enter the complete 6-digit OTP");
      return;
    }
    if (otp !== correctOTP) {
      alert("Invalid OTP");
      return;
    }
    navigate("/new-password");
  };
  return (
    <BluePrint>
      <TitleDescLayout
        title="Enter OTP"
        description=" We've sent a 6-digit verification code to admin@storysign.com"
      />
      <h3 className="block font-light text-[#FFEBBC] opacity-78 mb-2">OTP</h3>
      <div className="flex justify-center mb-8">
        <PinInput
          size="md"
          length={6}
          placeholder=""
          type="number"
          gap="sm"
          autoFocus
          oneTimeCode
          value={otp}
          onChange={setOtp}
          styles={{
            input: {
              backgroundColor: "black",
              color: "white",
              borderColor: "gray",
            },
          }}
        />
      </div>
      <p className="text-center text-xs text-[#FFEBBC] opacity-60 mb-14">
        Didn't receive the code? Resend in{" "}
        <span className="font-bold">36s</span>
      </p>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleVerify();
        }}
      >
        <AuthenticationButtonLayout title="Verify OTP" />
      </form>
    </BluePrint>
  );
};

export default OTP;
