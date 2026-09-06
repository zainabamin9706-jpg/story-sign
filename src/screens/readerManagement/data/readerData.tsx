import imgage from "../../../assets/imgage.png";
import ricon1 from "../../../assets/ricon1.png";
import ricon2 from "../../../assets/ricon2.png";
import { Reader } from "../types/Reader";
import ricon3 from "../../../assets/ricon3.png";
export const readers: Reader[] = [
  {
    id: 675942,
    book: "Things Fall Apart",
    profile: { image: imgage, name: "Emma Edwards" },
    actions: {
      icon1: <img src={ricon1} className="text-[#FFEBBC]  size-5" />,
      icon2: <img src={ricon2} className="text-[#FFEBBC] size-5" />,
      icon3: <img src={ricon3} className="text-[#FFEBBC]  size-5" />,
    },
    status: "Active",
    email: "Emma@gmail.com",
    spent: "$40.00",
  },
  {
    id: 990942,
    book: "Things Fall Apart",
    profile: { image: imgage, name: "Zain Edwards" },
    actions: {
      icon1: <img src={ricon1} className="text-[#FFEBBC]  size-5" />,
      icon2: <img src={ricon2} className="text-[#FFEBBC]  size-5" />,
      icon3: <img src={ricon3} className="text-[#FFEBBC] size-5" />,
    },
    status: "Active",
    email: "Zain@gmail.com",
    spent: "$40.00",
  },
  {
    id: 223945,
    book: "Things Fall Apart",
    profile: { image: imgage, name: "Elif Edwards" },
    actions: {
      icon1: <img src={ricon1} className="text-[#FFEBBC]  size-5" />,
      icon2: <img src={ricon2} className="text-[#FFEBBC]  size-5" />,
      icon3: <img src={ricon3} className="text-[#FFEBBC]  size-5" />,
    },
    status: "Inactive",
    email: "Elif@gmail.com",
    spent: "$40.00",
  },
  {
    id: 443943,
    book: "Things Fall Apart",
    profile: { image: imgage, name: "john Edwards" },
    actions: {
      icon1: <img src={ricon1} className="text-[#FFEBBC]  size-5" />,
      icon2: <img src={ricon2} className="text-[#FFEBBC] size-5" />,
      icon3: <img src={ricon3} className="text-[#FFEBBC]  size-5" />,
    },
    status: "Suspended",
    email: "John@gmail.com",
    spent: "$40.00",
  },
  {
    id: 742943,
    book: "Things Fall Apart",
    profile: { image: imgage, name: "Cordell Edwards" },
    actions: {
      icon1: <img src={ricon1} className="text-[#FFEBBC]  size-5" />,
      icon2: <img src={ricon2} className="text-[#FFEBBC]  size-5" />,
      icon3: <img src={ricon3} className="text-[#FFEBBC]  size-5" />,
    },
    status: "Active",
    email: "croldel@gmail.com",
    spent: "$40.00",
  },
  {
    id: 321944,
    book: "Things Fall Apart",
    profile: { image: imgage, name: "Collen Edwards" },
    actions: {
      icon1: <img src={ricon1} className="text-[#FFEBBC]  size-5" />,
      icon2: <img src={ricon2} className="text-[#FFEBBC]  size-5" />,
      icon3: <img src={ricon3} className="text-[#FFEBBC]  size-5" />,
    },
    status: "Suspended",
    email: "collen@gmail.com",
    spent: "$40.00",
  },
  {
    id: 742645,
    book: "Things Fall Apart",
    profile: { image: imgage, name: "jude Edwards" },
    actions: {
      icon1: <img src={ricon1} className="text-[#FFEBBC]  size-5" />,
      icon2: <img src={ricon2} className="text-[#FFEBBC]  size-5" />,
      icon3: <img src={ricon3} className="text-[#FFEBBC]  size-5" />,
    },
    status: "Inactive",
    email: "jude@gmail.com",
    spent: "$40.00",
  },
];
