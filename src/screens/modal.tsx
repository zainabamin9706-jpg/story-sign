import { ReactNode } from "@tabler/icons-react";
import { Textarea } from "@mantine/core";
type ActivateUserProps = {
  title: string;
  icon: ReactNode;
  description: string;
  reason: string;
  onClose: () => void;
  onConfirmation: () => void;
  confirmationButtonContent: string;
};
const Modal = ({
  title,
  icon,
  description,
  reason,
  onClose,
  onConfirmation,
  confirmationButtonContent,
}: ActivateUserProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#FFEBBC] p-8 flex flex-col w-[90%] md:w-1/2 rounded-xl z-20 ">
        <div className="flex justify-between font-['Nunito'] w-full">
          <div className="font-semibold text-xl text-[#202020] pt-1">
            {title}
          </div>
          <button
            type="button"
            className="border border-black flex items-center p-1.5 rounded-full cursor-pointer"
            onClick={onClose}
          >
            {icon}
          </button>
        </div>
        <div className="font-['Nunito'] font-medium text-[14px] mt-5 w-3/4 text-[#202020]">
          {description}
        </div>
        <div className="mt-4 ">
          <div className="text-[14px] text-[#202020] font-['Nunito'] font-normal opacity-78">
            {reason}
          </div>
          <Textarea
            size="md"
            mt={5}
            placeholder="Write reason here...."
            styles={{
              input: {
                border: "1px solid #BCBCBC",
                backgroundColor: "#FFEBBC",
                color: "#202020",
                "&::placeholder": {
                  fontSize: "12px",
                  color: "#202020",
                  opacity: 0.5,
                },
              },
            }}
          />
        </div>
        <div className="mt-6 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5">
          <button
            onClick={onConfirmation}
            className="bg-[#81401F] py-2 px-9 text-[#FFEBBC] rounded-lg cursor-pointer"
          >
            {confirmationButtonContent}
          </button>
          <button
            onClick={onClose}
            className="bg-[#2C2C2C] py-2 px-10 rounded-lg text-[#D4D4D4] cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
