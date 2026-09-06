import { ReactNode } from "react";
export interface Queries {
  username: {
    img: string;
    name: string;
  };
  role: string;
  subject: string;
  status: "Pending" | "In Process" | "Resolved";
  action: ReactNode;
}
