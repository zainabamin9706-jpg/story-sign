import { Button, Paper, SimpleGrid, TextInput, Textarea } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faqs } from "./data/questionData";
import { Faq } from "./types/FAQ";
import { notifications } from "@mantine/notifications";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const EditFAQ = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [answer, setAnswer] = useState("");
  const [titleError, setTitleError] = useState("");
  const [answerError, setAnswerError] = useState("");
  useEffect(() => {
    const savedQuestions: Faq[] = JSON.parse(
      sessionStorage.getItem("newQuestions") || "[]",
    );

    const questionToEdit =
      savedQuestions.find((question) => question.id === Number(id)) ||
      faqs.find((question) => question.id === Number(id));
    if (questionToEdit) {
      setTitle(questionToEdit.title);
      setAnswer(questionToEdit.answer);
    }
  }, [id]);
  const handleUpdateQuestion = () => {
    setTitleError("");
    setAnswerError("");

    let hasError = false;

    if (!title.trim()) {
      setTitleError("Please enter a question title.");
      hasError = true;
    }

    if (!answer.trim()) {
      setAnswerError("Please enter a question answer.");
      hasError = true;
    }
    if (hasError) {
      return;
    }
    const existingQuestions: Faq[] = JSON.parse(
      sessionStorage.getItem("newQuestions") || "[]",
    );
    const questionExists = existingQuestions.some(
      (question) => question.id === Number(id),
    );
    let updatedQuestions: Faq[];
    if (questionExists) {
      updatedQuestions = existingQuestions.map((question) =>
        question.id === Number(id)
          ? {
              ...question,
              title: title.trim(),
              answer: answer.trim(),
            }
          : question,
      );
    } else {
      updatedQuestions = [
        ...existingQuestions,
        {
          id: Number(id),
          title: title.trim(),
          answer: answer.trim(),
        },
      ];
    }
    sessionStorage.setItem("newQuestions", JSON.stringify(updatedQuestions));
    notifications.show({
      title: "Something went wrong!",
      color: "red",
      icon: <MdOutlineReportGmailerrorred />,
      message: "FAQ has been updated successfully.",
      position: "top-center",
    });

    navigate("/faqs");
  };

  return (
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
        <NavbarBP title="Edit FAQ" opened={opened} toggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar className="bg-[#313131]">
        <SidebarBP />
      </AppShell.Navbar>
      <AppShell.Main>
        <div className="w-full max-w-280 p-8 text-white bg-[#202020] rounded-xl">
          <div className="text-[20px] text-[#FFEBBC] font-semibold mb-6">
            Edit FAQ
          </div>

          <Paper radius="md" bg="#202020">
            <SimpleGrid cols={1} className="mb-3">
              <TextInput
                label="Question Title"
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
                  label="Answer"
                  placeholder="Write answer Here..."
                  value={answer}
                  onChange={(event) => {
                    setAnswer(event.currentTarget.value);
                    if (event.currentTarget.value.trim()) {
                      setAnswerError("");
                    }
                  }}
                  error={answerError}
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
                onClick={handleUpdateQuestion}
                styles={{
                  root: {
                    backgroundColor: "#81401F",
                    color: "#FFEBBC",
                    fontSize: "13px",
                    padding: "4px 40px",
                  },
                }}
              >
                Update Question
              </Button>

              <Button
                onClick={() => navigate("/faqs")}
                styles={{
                  root: {
                    backgroundColor: "#2C2C2C",
                    color: "#D4D4D4",
                    fontSize: "13px",
                    padding: "4px 40px",
                  },
                }}
              >
                Cancel
              </Button>
            </div>
          </Paper>
        </div>
      </AppShell.Main>
    </AppShell>
  );
};

export default EditFAQ;
