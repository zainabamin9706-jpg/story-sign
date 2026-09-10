import { IconLayout2Filled, IconUserFilled } from "@tabler/icons-react";
import { FaBook } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import icon1 from "../assets/icon1.png";
import { Link, useMatch } from "react-router-dom";
import { MdSubscriptions } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { IconGraphFilled } from "@tabler/icons-react";
import icon2 from "../assets/icon2.png";
import { MdPrivacyTip } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const list = [
  {
    name: "Dashboard",
    icon: <IconLayout2Filled />,
    link: "/dashboard",
  },
  {
    name: "Reader",
    icon: <IconUserFilled />,
    link: "/reader-management",
  },
  {
    name: "Author",
    icon: <FaUserCheck className="size-5.5" />,
    link: "/author-management",
  },
  {
    name: "Ebooks",
    icon: <FaBook className="size-5.5" />,
    link: "/ebook-management",
  },
  {
    name: "Requests",
    icon: "requestImage",
    link: "/autograph-request",
  },
  {
    name: "Subscription",
    icon: <MdSubscriptions className="size-6" />,
    link: "/subscription",
  },
  {
    name: "Autograph Fee",
    icon: <BiSolidDollarCircle className="size-7" />,
    link: "/autograph-fee",
  },
  {
    name: "Notifications",
    icon: <FaBell className="size-5.5" />,
    link: "/notification-management",
  },
  {
    name: "Analytics",
    icon: <IconGraphFilled className="size-7" />,
    link: "/report-analytics",
  },
  {
    name: "Queries",
    icon: <img src={icon2} className="size-7" />,
    link: "/queries",
  },
  {
    name: "Settings",
    icon: <IoMdSettings className="size-5.5" />,
    link: "/settings",
  },
  {
    name: "Privacy Policy",
    icon: <MdPrivacyTip className="size-5.5" />,
    link: "/privacy-policy",
  },
  {
    name: "FAQs",
    icon: <AiFillQuestionCircle className="size-5.5" />,
    link: "/faqs",
  },
  {
    name: "Profile",
    icon: <FaCircleUser className="size-5.5" />,
    link: "/profile",
  },
];

const SidebarBP = () => {
  return (
    <div className="h-full mt-3">
      <div className="h-full p-2 overflow-y-auto no-scrollbar  overflow-x-hidden  flex flex-col gap-3.5 items-center">
        {list.map((ele) => {
          const readerActive =
            ele.link === "/reader-management" &&
            (useMatch("/reader-management") || useMatch("/reader-detail-view"));

          const authorActive =
            ele.link === "/author-management" &&
            (useMatch("/author-management") || useMatch("/author-detail-view"));

          const ebookActive =
            ele.link === "/ebook-management" &&
            (useMatch("/ebook-management") ||
              useMatch("/ebook-request") ||
              useMatch("/ebook-request/:id"));

          const autographRequestActive =
            ele.link === "/autograph-request" &&
            (useMatch("/autograph-request") ||
              useMatch("/request") ||
              useMatch("/request/:id"));
          const subscriptionActive =
            ele.link === "/subscription" &&
            (useMatch("/subscription") || useMatch("/add-plan"));

          const autographFeeActive =
            ele.link === "/autograph-fee" &&
            (useMatch("/autograph-fee") || useMatch("/updated-fee"));
          const notificationActive =
            ele.link === "/notification-management" &&
            (useMatch("/notification-management") ||
              useMatch("/add-notification"));
          const privacyActive =
            ele.link === "/privacy-policy" &&
            (useMatch("/privacy-policy") || useMatch("/add-policy"));
          const faqActive =
            ele.link === "/faqs" && (useMatch("/faqs") || useMatch("/add-faq"));
          const normalActive =
            ele.link !== "/reader-management" &&
            ele.link !== "/author-management" &&
            ele.link !== "/ebook-management" &&
            ele.link !== "/autograph-request" &&
            ele.link !== "/subscription" &&
            ele.link !== "/autograph-fee" &&
            ele.link !== "/notification-management" &&
            ele.link !== "/privacy-policy" &&
            ele.link !== "/faqs" &&
            !!useMatch(ele.link);

          const active =
            readerActive ||
            authorActive ||
            ebookActive ||
            subscriptionActive ||
            autographFeeActive ||
            notificationActive ||
            privacyActive ||
            faqActive ||
            autographRequestActive ||
            normalActive;

          return active ? (
            <div
              key={ele.name}
              className="flex flex-col items-center justify-center"
            >
              <button className="text-[#81401F] bg-[#FFEBBC] p-2 rounded-full cursor-pointer">
                {ele.icon === "requestImage" ? (
                  <img
                    src={icon1}
                    className="size-5.5"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(24%) sepia(35%) saturate(1000%) hue-rotate(345deg)",
                    }}
                  />
                ) : ele.name === "Queries" ? (
                  <img
                    src={icon2}
                    className="size-5.5"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(24%) sepia(35%) saturate(1000%) hue-rotate(345deg)",
                    }}
                  />
                ) : (
                  ele.icon
                )}
              </button>

              <div className=" text-center font-semibold text-sm py-2 mt-3  ml-3 rounded-2xl bg-[#81401F] text-[#FFEBBC] w-full whitespace-nowrap">
                <div className="px-4">{ele.name}</div>
              </div>
            </div>
          ) : (
            <Link key={ele.name} to={ele.link}>
              <button className="text-[#FFEBBC] cursor-pointer">
                {ele.icon === "requestImage" ? (
                  <img src={icon1} className="size-5.5" />
                ) : ele.name === "Queries" ? (
                  <img
                    src={icon2}
                    className="size-5.5"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(92%) sepia(12%) saturate(650%) hue-rotate(350deg) brightness(105%) contrast(105%)",
                    }}
                  />
                ) : (
                  ele.icon
                )}
              </button>
            </Link>
          );
        })}
        <div className="mt-4 flex items-center justify-center gap-1 text-[#FFEBBC] cursor-pointer pb-2">
          <Link to="/">
            <MdLogout className="size-5 font-bold cursor-pointer" />
          </Link>
          <Link to="/">
            {" "}
            <div className="text-[12.5px] font-bold font-['Nunito']">
              Log Out
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarBP;
