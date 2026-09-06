type titleDescProps = {
  title: string;
  description?: string;
};

const TitleDescLayout = ({ title, description }: titleDescProps) => {
  return (
    <>
      <h1 className="text-[26px] tracking-wide font-bold text-[#FFEBBC] text-center mb-7 mt-3 sm:mt-0 ">
        {title}
      </h1>
      {description && (
        <p className="font-light text-[#FFEBBC] opacity-50 text-sm text-center mb-9 mx-auto max-w-[250px]">
          {description}
        </p>
      )}
    </>
  );
};

export default TitleDescLayout;
