const SectionTitle = ({ heading, subHeading, titleHeading }) => {
  return (
    <div>
      <div className="flex items-center gap-2.5 ">
        <div className="w-5 h-10 bg-[#DB4444] rounded">{heading}</div>
        <h3 className="leading-5 font-semibold text-base text-[#DB4444]">
          {subHeading}
        </h3>
      </div>
      <h2 className="text-[36px] leading-[48px] mt-5 font-semibold mb-[60px]">
        {titleHeading}
      </h2>
    </div>
  );
};

export default SectionTitle;
