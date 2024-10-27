"use client";
import { FC } from "react";
import Image from "next/image";

interface WorkCardProps {
  position: number;
  socials: { name: string; link: string }[];
  heading: string;
  body: string;
  image: string | null;
}
const WorkCard: FC<WorkCardProps> = (props) => {
  return (
    <section
      className={`flex flex-col w-full rounded-lg  h-full bg-slate-200/10 p-4 text-white  border-primary bg-white/20 border-[1px] backdrop-blur-lg`}
    >
      {props.image && (
        <Image
          src={props.image}
          alt="Card Image"
          className="w-full h-64  object-cover rounded-lg"
          width={600}
          height={600}
          priority={true}
        />
      )}

      <figcaption className="w-full flex flex-col items-start justify-between pt-2 gap-3  tertiary bg-cream/10 text-black overflow-auto  ">
        <h3 className="uppercase mx-auto text-lg font-bold py-0.5 text-center text-primary font-title  text-cyan-200 font-bold">
          {props.heading}
        </h3>
        <p className="text-center w-full h-full overflow-auto text-black h-full">
          {props.body}
        </p>
        <p className="flex flex-row items-center justify-center w-full gap-2">
          {props.socials?.length > 0 &&
            props.socials.map((social, index) => {
              return (
                <a
                  key={index}
                  className="text-primary hover:text-primary/80 underline rounded-xl font-bold lowercase"
                  href={social.link}
                >
                  {social.name}
                </a>
              );
            })}
        </p>
      </figcaption>
    </section>
  );
};

export default WorkCard;
