import { Plan } from "../types/Plan";

export const defaultPlans: Plan[] = [
  {
    name: "Starter",
    type: "Monthly",
    charges: "$9",
    features: [
      "25 Signature per month",
      "Signed ebooks with messages",
      "Approve and reject autograph request",
      "Manage profile",
      "Email support",
    ],
  },
  {
    name: "Pro",
    type: "Monthly",
    charges: "$29",
    features: [
      "100 Signature per month",
      "Signed ebooks with messages",
      "Approve and reject autograph request",
      "Manage profile",
      "Email support",
    ],
  },
  {
    name: "Premium",
    type: "Monthly",
    charges: "$49",
    features: [
      "Unlimited Signature per month",
      "Signed ebooks with messages",
      "Approve and reject autograph request",
      "Manage profile",
      "Email support",
    ],
  },
];
