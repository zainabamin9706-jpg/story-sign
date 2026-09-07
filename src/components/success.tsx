import { TbRosetteDiscountCheck } from "react-icons/tb";
type SuccessProps = {
  title: string;
  onClose: () => void;
};

const Success = ({ onClose, title }: SuccessProps) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-[#FFEBBC] p-12 flex flex-col justify-center items-center w-auto rounded-xl">
        <div className="text-[#81401F]">
          <TbRosetteDiscountCheck size={40} />
        </div>
        <div className="font-['Nunito'] font-semibold text-[15px] mt-5 w-full text-[#202020]">
          {title}
        </div>
        <button
          onClick={onClose}
          className="bg-[#81401F] py-2 px-10 rounded-lg text-[#FFEBBC] cursor-pointer mt-8"
        >
          Okay
        </button>
      </div>
    </div>
  );
};
export default Success;
