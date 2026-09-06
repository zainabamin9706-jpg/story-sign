import { ReactNode } from "react";
export interface AuthorBook {
  reader: {
    img: string;
    name: string;
  };

  bookDetail: {
    img: string;
    name: string;
  };
  date: string;
  status: "Pending" | "Rejected" | "Delivered";
  action: ReactNode;
}
