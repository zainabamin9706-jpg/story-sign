import { IconEye } from "@tabler/icons-react";
import { AuthorBook } from "../types/AuthorBook";
import author from "../../../assets/author.png";
import Ebook from "../../../assets/Ebook.png";
export const authorBooks: AuthorBook[] = [
  {
    reader: {
      img: author,
      name: "Cordell Edwards",
    },
    bookDetail: {
      img: Ebook,
      name: "The Origin Of Species",
    },
    date: "23 June,2026",
    status: "Pending",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    reader: {
      img: author,
      name: "Conor Edwards",
    },
    bookDetail: {
      img: Ebook,
      name: "The Origin Of Species",
    },
    date: "12 May,2026",
    status: "Delivered",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    reader: {
      img: author,
      name: "Jasper Williams",
    },
    bookDetail: {
      img: Ebook,
      name: "The Origin Of Species",
    },
    date: "9 Nov,2026",
    status: "Delivered",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    reader: {
      img: author,
      name: "Hena Collen",
    },
    bookDetail: {
      img: Ebook,
      name: "The Origin Of Species",
    },
    date: "11 March,2026",
    status: "Rejected",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    reader: {
      img: author,
      name: "Omar Jacob",
    },
    bookDetail: {
      img: Ebook,
      name: "The Origin Of Species",
    },
    date: "1 jan,2026",
    status: "Pending",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
];
