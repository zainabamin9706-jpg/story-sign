import { IconEye } from "@tabler/icons-react";
import Ebook from "../../../assets/Ebook.png";
import { ReaderBook } from "../types/readerDetail";
export const readerBooks: ReaderBook[] = [
  {
    cover: Ebook,
    name: "The Origin Of Species",
    signedBy: "Lisa Dinal",
    uploadedDate: "23 June, 2026",
    fee: 10,
    status: "Signed",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    cover: Ebook,
    name: "The Origin Of Species",
    signedBy: " ",
    uploadedDate: "2 May, 2026",
    status: "Unsigned",
    action: <IconEye className="text-[#FFEBBC] size-5 cursor-pointer" />,
  },
  {
    cover: Ebook,
    name: "The Origin Of Species",
    signedBy: "Alex dani",
    uploadedDate: "10 April, 2026",
    fee: 10,
    status: "Unsigned",
    action: <IconEye className="text-[#FFEBBC] cursor-pointer  size-5" />,
  },
  {
    cover: Ebook,
    name: "The Origin Of Species",
    signedBy: "Jennie kim",
    uploadedDate: "2 Nov, 2026",
    fee: 10,
    status: "Signed",
    action: <IconEye className="text-[#FFEBBC] cursor-pointer size-5" />,
  },
  {
    cover: Ebook,
    name: "The Origin Of Species",
    signedBy: "Eric Nam",
    uploadedDate: "12 Nov, 2025",
    fee: 10,
    status: "Signed",
    action: <IconEye className="text-[#FFEBBC] cursor-pointer size-5" />,
  },
];
