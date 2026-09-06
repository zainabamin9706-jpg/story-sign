import { ReactNode } from "react";
export interface Request {
  id: number;
  reader: {
    img: string;
    name: string;
  };
  author: {
    img: string;
    name: string;
  };
  book: string;
  date: string;
  status: "In Progress" | "Delivered" | "Rejected";
  action: ReactNode;
}
