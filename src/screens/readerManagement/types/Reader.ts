import { ReactNode } from "react";

export interface Reader {
  id: number;
  book: string;
  email: string;
  profile: {
    image: string;
    name: string;
  };
  actions: {
    icon1: ReactNode;
    icon2: ReactNode;
    icon3: ReactNode;
  };
  status: "Active" | "Inactive" | "Suspended";
  spent: string;
}
