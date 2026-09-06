import { ReactNode } from "react";
export interface ReaderBook {
  cover: string;
  name: string;
  signedBy: string;
  uploadedDate: string;
  fee?: number;
  status: "Signed" | "Unsigned";
  action: ReactNode;
}
