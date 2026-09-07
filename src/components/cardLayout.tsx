import { ReactNode } from "react";
import { IconArrowDownLeft, IconArrowUpRight } from "@tabler/icons-react";
interface CardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  percentage: string;
  isIncreasing: boolean;
  showIncreasing?: boolean;
  linkText: string;
  Link?: string;
}
const CardLayout = ({
  title,
  value,
  icon,
  percentage,
  isIncreasing,
  showIncreasing = true,
  linkText,
  Link,
}: CardProps) => {
  return (
    <div className="bg-[#FFEBBC] rounded-2xl pt-3 px-4 font-['Nunito']">
      <div className="flex justify-between items-center">
        <h6 className="font-semibold text-[13px] text-[#454545] mb-1 mt-1">
          {title}
        </h6>
        <div className="text-black rounded-full">{icon}</div>
      </div>
      <p className="font-bold text-[16px] mb-1 text-[#202020]">{value}</p>
      {showIncreasing && (
        <div className="flex flex-row justify-between gap-2 font-semibold text-[12px] mb-2 mt-1">
          <div className="flex gap-1 items-center">
            <div
              className={`rounded-full flex items-center justify-center w-4.5
          ${isIncreasing ? "bg-[#0C884C33] text-[#0C884C]" : "bg-[#C8323C33] text-[#C8323C]"}`}
            >
              {isIncreasing ? (
                <IconArrowUpRight className="size-2.5" stroke={3.5} />
              ) : (
                <IconArrowDownLeft className="size-2.5" stroke={3.5} />
              )}
            </div>
            <p
              className={`font-bold ${isIncreasing ? "text-[#0C884C]" : "text-[#C8323C]"}`}
            >
              {" "}
              {percentage}
            </p>
          </div>
          <a
            href={Link}
            className="text-[10px] underline text-[#81401F] cursor-pointer"
          >
            {linkText}
          </a>
        </div>
      )}
    </div>
  );
};

export default CardLayout;
