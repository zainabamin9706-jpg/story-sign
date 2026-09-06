import { Author } from "../types/Author";
import imgage from "../../../assets/imgage.png";
import ricon1 from "../../../assets/ricon1.png";
import ricon2 from "../../../assets/ricon2.png";
import ricon3 from "../../../assets/ricon3.png";
export const authors: Author[] = [
  {
    id: 123456,
    profile: {
      image: imgage,
      name: "Cordell Edwards",
    },
    plan: "Pro",
    signedbook: 235,
    pendingRequest: 23,
    status: "Active",
    action: {
      icon1: (
        <img src={ricon1} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon2: (
        <img src={ricon2} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon3: (
        <img src={ricon3} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
    },
  },
  {
    id: 654321,
    profile: {
      image: imgage,
      name: "Emma Edwards",
    },
    plan: "Pro",
    signedbook: 220,
    pendingRequest: 26,
    status: "Inactive",
    action: {
      icon1: (
        <img src={ricon1} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon2: (
        <img src={ricon2} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon3: (
        <img src={ricon3} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
    },
  },
  {
    id: 231459,
    profile: {
      image: imgage,
      name: "john Edwards",
    },
    plan: "Pro",
    signedbook: 200,
    pendingRequest: 28,
    status: "Suspended",
    action: {
      icon1: (
        <img src={ricon1} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon2: (
        <img src={ricon2} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon3: (
        <img src={ricon3} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
    },
  },
  {
    id: 786543,
    profile: {
      image: imgage,
      name: "Conor Eden",
    },
    plan: "Pro",
    signedbook: 189,
    pendingRequest: 20,
    status: "Active",
    action: {
      icon1: (
        <img src={ricon1} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon2: (
        <img src={ricon2} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon3: (
        <img src={ricon3} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
    },
  },
  {
    id: 234521,
    profile: {
      image: imgage,
      name: "Carmen James",
    },
    plan: "Pro",
    signedbook: 235,
    pendingRequest: 23,
    status: "Inactive",
    action: {
      icon1: (
        <img src={ricon1} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon2: (
        <img src={ricon2} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
      icon3: (
        <img src={ricon3} className="text-[#FFEBBC] bg-[#FFEBBC1A] size-5" />
      ),
    },
  },
];
