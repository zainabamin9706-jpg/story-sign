export interface RequestData {
  id: number;
  bookName: string;
  reader: {
    image: string;
    name: string;
  };
  author: {
    image: string;
    name: string;
  };
  bookStatus: "Delivered" | "Pending" | "Rejected";
}
