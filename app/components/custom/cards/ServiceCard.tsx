import { FC } from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
interface ServiceCardProps {
  index: number;
  heading: string;
  body: string;
}
const ServiceCard: FC<ServiceCardProps> = (props) => {
  return (
    <section
      className={`flex flex-col w-full h-[420px] rounded-lg border-[1px]  items-start shadow-slate-300 gap-3 border-primary px-2 bg-slate-100/25 backdrop-blur-lg `}
    >
      <section className="p-2 tablet:p-4 rounded-b-lg  rounded-none bg-primary">
        <WrenchScrewdriverIcon className="w-8 tablet:w-9 aspect-square text-white" />
      </section>
      <h3
        className={` px-1 uppercase rounded-full text-lg font-bold text-white `}
      >
        {props.heading}
      </h3>
      <section
        className={`px-1 text-start flex flex-col justify-between items-start  w-full py-3 text-md h-[85%] overflow-auto text-white `}
      >
        {props.body}
      </section>
    </section>
  );
};

export default ServiceCard;
