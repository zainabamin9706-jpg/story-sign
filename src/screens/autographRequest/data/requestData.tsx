import { Request } from "../types/Request";
import woman from "../../../assets/woman.jpg";
import { IconEye } from "@tabler/icons-react";
import imgage from "../../../assets/imgage.png";

export const requests: Request[] = [
  {
    id: 123456,
    reader: {
      img: imgage,
      name: "Cordell Edwards",
    },

    author: {
      img: woman,
      name: "Emma Watson",
    },
    book: "Things Fall Apart",
    date: "23 March,2026",
    status: "In Progress",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    id: 654321,
    reader: {
      img: imgage,
      name: "Kate Bush",
    },
    author: {
      img: woman,
      name: "Ellen Mark",
    },
    book: "Things Fall Apart",
    date: "3 March,2026",
    status: "Rejected",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    id: 231459,
    reader: {
      img: imgage,
      name: "Omar Williams",
    },
    author: {
      img: woman,
      name: "Ellen Mark",
    },
    book: "Things Fall Apart",
    date: " 2 Nov,2025",
    status: "Delivered",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    id: 786543,
    reader: {
      img: imgage,
      name: "Sarah Williams",
    },
    author: {
      img: woman,
      name: "Ellen Mark",
    },
    book: "Things Fall Apart",
    date: "3 August,2026",
    status: "Delivered",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    id: 234521,
    reader: {
      img: imgage,
      name: "Brian Swift",
    },
    author: {
      img: woman,
      name: "Ellen Mark",
    },
    book: "Things Fall Apart",
    date: "31 Jan,2026",
    status: "Delivered",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
];
