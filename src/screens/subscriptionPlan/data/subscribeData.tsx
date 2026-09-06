import { Subscribe } from "../types/Subscribe";
import author from "../../../assets/author.png";
export const subscription: Subscribe[] = [
  {
    authordetail: {
      img: author,
      name: "Cordell Edwards",
    },
    plan: "Premium",
    billing: "$9/m",
    started: "23 Jan,2026",
    nextbill: "4 May,2026",
    action: " View Profile",
  },
  {
    authordetail: {
      img: author,
      name: "Ella Gross",
    },
    plan: "Professional",
    billing: "$29/m",
    started: "18 April,2026",
    nextbill: "19 June,2026",
    action: "View Profile",
  },
  {
    authordetail: {
      img: author,
      name: "heather Grace",
    },
    plan: "Starter",
    billing: "$49/m",
    started: "6 june,2026",
    nextbill: "4 july,2026",
    action: "View Profile",
  },
];
