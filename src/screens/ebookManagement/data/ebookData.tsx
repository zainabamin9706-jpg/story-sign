import { IconEye } from "@tabler/icons-react";
import { MdRequestPage } from "react-icons/md";
import { Ebooks } from "../types/Ebooks";
import woman from "../../../assets/woman.jpg";
import Ebbok from "../../../assets/Ebbok.png";
export const ebooks: Ebooks[] = [
  {
    id: "0123452",
    bookdetails: {
      img: Ebbok,
      name: "The Origin of Species",
    },

    uploadedby: {
      img: woman,
      name: "Emma Watson",
    },
    date: "23 March,2026",
    status: "Signed",
    action: {
      icon1: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
    },
  },
  {
    id: "0123453",
    bookdetails: {
      img: Ebbok,
      name: "The Origin of Species",
    },

    uploadedby: {
      img: woman,
      name: "Catherine Williams",
    },
    date: "9 May,2026",
    status: "Unsigned",
    action: {
      icon1: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
    },
  },
  {
    id: "0123454",
    bookdetails: {
      img: Ebbok,
      name: "The Origin of Species",
    },

    uploadedby: {
      img: woman,
      name: "Laura James",
    },
    date: "14 August,2026",
    status: "Signed",
    action: {
      icon1: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
    },
  },
  {
    id: "0123455",
    bookdetails: {
      img: Ebbok,
      name: "The Origin of Species",
    },

    uploadedby: {
      img: woman,
      name: "Brittney Spears",
    },
    date: "9 April,2026",
    status: "Unsigned",
    action: {
      icon1: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
    },
  },
  {
    id: "0123456",
    bookdetails: {
      img: Ebbok,
      name: "The Origin of Species",
    },

    uploadedby: {
      img: woman,
      name: "Claire Johns",
    },
    date: "22 Jan,2026",
    status: "Signed",
    action: {
      icon1: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
    },
  },
];
