type ButtonProps = {
  title: string;
};
const AuthenticationButtonLayout = ({ title }: ButtonProps) => {
  return (
    <button
      className="w-full text-[26px] bg-[#81401F] text-[#FFEBBC] font-extrabold py-2 mt-5 mb-3 rounded-lg active:scale-99 "
      type="submit"
    >
      {title}
    </button>
  );
};
export default AuthenticationButtonLayout;
