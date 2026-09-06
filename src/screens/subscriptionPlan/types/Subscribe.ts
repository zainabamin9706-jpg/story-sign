export interface Subscribe {
  authordetail: {
    img: string;
    name: string;
  };
  plan: "Starter" | "Professional" | "Premium";
  billing: string;
  started: string;
  nextbill: string;
  action: string;
}
