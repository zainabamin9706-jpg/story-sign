import { PasswordInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BluePrint from "./bluePrint";
import { AppContext } from "../../hooks/context/context";
import AuthenticationButtonLayout from "./authenticationButtonLayout";
import TitleDescLayout from "../../components/titleDescLayout";

const NewPassword = () => {
  const navigate = useNavigate();
  interface FormValues {
    password: string;
    confirmPassword: string;
  }

  const form = useForm<FormValues>({
    mode: "uncontrolled",
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const handleValidationError = (errors: typeof form.errors) => {
    if (errors.password) {
      alert(errors.password);
      return;
    }
    if (errors.confirmPassword) {
      alert(errors.confirmPassword);
      return;
    }
  };
  const { setPassword } = useContext(AppContext);
  return (
    <BluePrint>
      <TitleDescLayout title="Reset Password" />

      <form
        onSubmit={form.onSubmit((values) => {
          setPassword(values.password);
          navigate("/dashboard");
        }, handleValidationError)}
      >
        <h3 className="block  text-md font-light text-[#FFEBBC] opacity-78 mb-1">
          Password:
        </h3>
        <PasswordInput
          placeholder="Password"
          fw={400}
          key={form.key("password")}
          {...form.getInputProps("password")}
          styles={{
            input: {
              backgroundColor: "transparent",
              color: "white",
              borderColor: "#D3D3D3",
              padding: 20,
              opacity: 0.6,
            },
          }}
        />
        <h3 className="block font-light text-[#FFEBBC] opacity-78  mb-1 mt-8 ">
          Confirm Password:
        </h3>
        <PasswordInput
          fw={400}
          mb="md"
          placeholder="Confirm password"
          key={form.key("confirmPassword")}
          {...form.getInputProps("confirmPassword")}
          styles={{
            input: {
              backgroundColor: "transparent",
              color: "white",
              borderColor: "#D3D3D3",
              padding: 20,
              opacity: 0.6,
            },
          }}
        />
        <AuthenticationButtonLayout title=" Update Password" />
      </form>
    </BluePrint>
  );
};

export default NewPassword;
