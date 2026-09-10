import { RequestData } from "../types/Request";
import imgage from "../../../assets/imgage.png";
import person2 from "../../../assets/person2.png";
export const requests: RequestData[] = [
  {
    id: 742942,
    bookName: "Things Fall Apart",
    reader: { image: imgage, name: "Cassius Thorne" },
    bookStatus: "Pending",
    author: { image: person2, name: "Cassius Thorne" },
  },
  {
    id: 578443,
    bookName: "Things Fall Apart",
    reader: { image: imgage, name: "Emma Thorne" },

    bookStatus: "Pending",
    author: { image: person2, name: "Cassius Thorne" },
  },
  {
    id: 745342,
    bookName: "Things Fall Apart",
    reader: { image: imgage, name: "Enid Thorne" },
    bookStatus: "Delivered",
    author: { image: person2, name: "Cassius Thorne" },
  },
  {
    id: 365945,
    bookName: "Things Fall Apart",
    reader: { image: imgage, name: "Catherine Thorne" },
    bookStatus: "Rejected",
    author: { image: person2, name: "Cassius Thorne" },
  },
];
