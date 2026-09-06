import { ReactNode } from "react";
export interface Ebooks {
  id: String;
  bookdetails: {
    img: string;
    name: string;
  };
  uploadedby: {
    img: string;
    name: string;
  };
  date: string;
  status: "Signed" | "Unsigned" | "Rejected";
  action: {
    icon1: ReactNode;
    icon2: ReactNode;
  };
}
