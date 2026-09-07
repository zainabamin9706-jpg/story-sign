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
  status: "Pending" | "Delivered" | "Rejected";
  action: ReactNode;
}
