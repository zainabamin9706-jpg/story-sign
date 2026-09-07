import { TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TitleDescLayout from "../../components/titleDescLayout";
import { AppContext } from "../../hooks/context/context";
import { notifications } from "@mantine/notifications";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import AuthenticationButtonLayout from "../../components/authenticationButtonLayout";
import BluePrint from "../../components/bluePrint";
interface FormValues {
  user: {
    Email: string;
  };
}
const ForgotPassword = () => {
  const { setEmail } = useContext(AppContext);
  const navigate = useNavigate();
  const form = useForm<FormValues>({
    mode: "uncontrolled",
    initialValues: {
      user: {
        Email: "",
      },
    },
    validate: {
      user: {
        Email: isNotEmpty("Email is required"),
      },
    },
  });

  const handleSubmit = (values: FormValues) => {
    const registeredEmail = "john@gmail.com";

    if (values.user.Email !== registeredEmail) {
      notifications.show({
        title: "Something went wrong!",
        color: "red",
        icon: <MdOutlineReportGmailerrorred />,
        message: "Email is not registered",
        position: "top-center",
      });
      return;
    }
    navigate("/Otp");
    setEmail(values.user.Email);
  };

  return (
    <BluePrint>
      <TitleDescLayout
        title="Forget Password"
        description="Don’t worry! Enter your registered email address, and we’ll  send you a link 
to reset your password."
      />
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <h3 className="block font-light text-[#FFEBBC] opacity-[0.78] mb-1">
          Email
        </h3>

        <TextInput
          fw={400}
          placeholder="johnsmith@gmail.com"
          mb="xl"
          styles={{
            input: {
              backgroundColor: "transparent",
              color: "white",
              borderColor: "#D3D3D3",
              padding: 20,
              opacity: 0.6,
            },
          }}
          {...form.getInputProps("user.Email")}
        />

        <AuthenticationButtonLayout title="LOGIN" />
      </form>
    </BluePrint>
  );
};

export default ForgotPassword;
