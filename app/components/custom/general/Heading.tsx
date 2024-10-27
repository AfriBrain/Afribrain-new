import React from "react";
interface HeadingProps {
  heading: string;
}
const Heading: React.FC<HeadingProps> = ({ heading }) => {
  return (
    <header className="gap-3 mx-auto mt-16 mb-6 flex-row-centered font-title  w-max capitalize">
      <span className="w-12 h-2 rounded-full bg-primary"></span>
      <span
        className={`font-title text-primary lowercase text-2xl tablet:text-6xl laptop:text-6xl font-extrabold `}
      >
        {heading}
      </span>
      <span className="w-12 h-2 rounded-full bg-primary"></span>
    </header>
  );
};

export default Heading;
