import { Pagination } from "@mantine/core";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line, RiPencilLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { faqs } from "./data/questionData";
import { Faq } from "./types/FAQ";
import NavbarBP from "../../components/navbarBP";
import SidebarBP from "../../components/sidebarBP";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
const FAQ = () => {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const [questionList, setQuestionList] = useState<Faq[]>(faqs);

  useEffect(() => {
    const savedQuestions: Faq[] = JSON.parse(
      sessionStorage.getItem("newQuestions") || "[]",
    );
    const deletedQuestions: number[] = JSON.parse(
      sessionStorage.getItem("deletedQuestions") || "[]",
    );
    const defaultQuestions = faqs
      .filter((question) => !deletedQuestions.includes(question.id))
      .map((question) => {
        const editedQuestion = savedQuestions.find(
          (saved) => saved.id === question.id,
        );

        return editedQuestion || question;
      });
    const newQuestions = savedQuestions.filter(
      (question) => !faqs.some((faq) => faq.id === question.id),
    );
    const allQuestions = [...defaultQuestions, ...newQuestions];
    setQuestionList(allQuestions);
  }, []);

  const handleDelete = (id: number) => {
    const savedQuestions: Faq[] = JSON.parse(
      sessionStorage.getItem("newQuestions") || "[]",
    );

    const isNewQuestion = savedQuestions.some((question) => question.id === id);

    if (isNewQuestion) {
      const updatedQuestions = savedQuestions.filter(
        (question) => question.id !== id,
      );
      sessionStorage.setItem("newQuestions", JSON.stringify(updatedQuestions));
    } else {
      const deletedQuestions: number[] = JSON.parse(
        sessionStorage.getItem("deletedQuestions") || "[]",
      );

      if (!deletedQuestions.includes(id)) {
        deletedQuestions.push(id);
      }

      sessionStorage.setItem(
        "deletedQuestions",
        JSON.stringify(deletedQuestions),
      );
    }

    setQuestionList((currentQuestions) =>
      currentQuestions.filter((question) => question.id !== id),
    );
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
          <NavbarBP title="FAQ Management" opened={opened} toggle={toggle} />
        </AppShell.Header>
        <AppShell.Navbar className="bg-[#313131]">
          <SidebarBP />
        </AppShell.Navbar>
        <AppShell.Main>
          <div className="w-full max-w-280 p-6 text-white bg-[#202020] rounded-xl">
            <div className=" flex-row  font-['Nunito'] flex justify-between pt-1 w-full h-auto">
              <div className="text-[#FFEBBC] font-bold text-[22px] font-['Nunito'] mb-1">
                All FAQs
              </div>
              <div className="flex gap-5  ">
                <Link to="/add-faq">
                  <div className="bg-[#81401F] text-center flex items-center text-[#FFEBBC] text-[12px] rounded-2xl font-bold px-7 h-7.5 cursor-pointer ">
                    Add Question
                  </div>
                </Link>
              </div>
            </div>

            <div className="">
              {questionList.map((faq, index) => (
                <div
                  key={faq.id}
                  className="flex flex-col justify-between border-b border-[#3A3A3A] py-3"
                >
                  <div className="text-[#FFEBBC] font-semibold text-[16px]">
                    {index + 1}. {faq.title}
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[#BDBDBD] text-[14px] mt-2 leading-5 whitespace-pre-line">
                      {faq.answer}
                    </div>
                    <div className="flex gap-3 ml-20">
                      <button
                        className="border border-[#FFEBBC] text-[#FFEBBC] p-1.5 h-7 w-7 flex items-center  cursor-pointer
                          rounded-full"
                        onClick={() => handleDelete(faq.id)}
                      >
                        <RiDeleteBin6Line />
                      </button>
                      <button
                        onClick={() => navigate(`/edit-faq/${faq.id}`)}
                        className="border border-[#FFEBBC] text-[#FFEBBC] p-1.5 h-7 w-7 flex items-center  cursor-pointer
                          rounded-full"
                      >
                        <RiPencilLine />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" flex items-center justify-center w-full text-[#FFEBBC] mt-10  mb-3 isActive:bg-[#81401F]  ">
            <Pagination
              total={99}
              color="#81401F"
              autoContrast={true}
              radius="sm"
              styles={{
                control: {
                  backgroundColor: "#FFEBBCB2",
                  color: "black",
                  border: "1px solid #FFEBBC",
                },
              }}
            />
          </div>
        </AppShell.Main>
      </AppShell>
    </>
  );
};
export default FAQ;
