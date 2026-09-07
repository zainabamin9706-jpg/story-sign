import { PasswordInput, TextInput } from "@mantine/core";
import { formRootRule, isNotEmpty, useForm } from "@mantine/form";
import { useContext } from "react";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import TitleDescLayout from "../../components/titleDescLayout";
import { AppContext } from "../../hooks/context/context";
import { notifications } from "@mantine/notifications";
import AuthenticationButtonLayout from "../../components/authenticationButtonLayout";
import BluePrint from "../../components/bluePrint";
const LoginPage = () => {
  const navigate = useNavigate();
  const form = useForm<{
    user: {
      Email: string;
      Password: string;
    };
  }>({
    mode: "uncontrolled",
    initialValues: {
      user: {
        Email: "",
        Password: "",
      },
    },
    validate: {
      user: {
        [formRootRule]: (value) =>
          value.Email.trim().length > 0 && value.Email === value.Password
            ? "Email and Password cannot be same"
            : null,
        Email: isNotEmpty("Email is required"),
        Password: isNotEmpty("Password is required"),
      },
    },
  });
  const { setEmail, setPassword } = useContext(AppContext);
  const handleSubmit = (values: {
    user: {
      Email: string;
      Password: string;
    };
  }) => {
    const registeredEmail = "john@gmail.com";
    const registeredPassword = "12";
    if (
      values.user.Email !== registeredEmail ||
      values.user.Password !== registeredPassword
    ) {
      notifications.show({
        title: "Something went wrong!",
        color: "red",
        icon: <MdOutlineReportGmailerrorred />,
        message: "Invalid Email or Password",
        position: "top-center",
      });

      return;
    }
    setEmail(values.user.Email);
    setPassword(values.user.Password);

    navigate("/dashboard");
  };
  return (
    <>
      <BluePrint>
        <TitleDescLayout title="Login Your Account" />

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <div className="block font-light text-[#FFEBBC] opacity-78 mb-1">
            Email:
          </div>
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
          <div className="block font-light text-[#FFEBBC] opacity-78 mb-1 ">
            Password:
          </div>
          <PasswordInput
            fw={400}
            placeholder="Password"
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
            {...form.getInputProps("user.Password")}
          />
          <AuthenticationButtonLayout title="LOGIN" />

          <div className="text-right mt-2 mb-3">
            <Link
              className="text-[#FFEBBC] text-xs underline opacity-90 hover:text-white"
              to="/forgot-password"
            >
              Reset Your Password
            </Link>
          </div>
        </form>
      </BluePrint>
    </>
  );
};

export default LoginPage;
