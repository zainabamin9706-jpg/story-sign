import { ReactNode } from "react";
export interface Author {
  id: number;
  profile: {
    image: string;
    name: string;
  };
  plan: string;
  signedbook: number;
  pendingRequest: number;
  status: "Active" | "Inactive" | "Suspended";
  action: {
    icon1: ReactNode;
    icon2: ReactNode;
    icon3: ReactNode;
  };
}
