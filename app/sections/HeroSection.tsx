import { FC } from "react";

const HeroSection: FC = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-start items-center  relative">
      <section className="w-full flex-row-centered h-[100vh] bg-transparent">
        <section className="flex flex-col justify-center items-center gap-2 w-full h-full bg-black/40 ">
          <span className="text-primary uppercase text-[24px] tablet:text-[48px] laptop:text-[96px]  p-4 px-10 border-4">
            Afribrain Bespoke
          </span>
          <p className="text-[12px] tablet:text-[20px] laptop:text-[32px] text-white py-10 font-bold">
            Design . Develop . Thrive
          </p>
          <button className="button">Start project</button>
        </section>
      </section>
      <section className="absolute bottom-0 w-full h-5 rounded-t-full bg-white"></section>
    </section>
  );
};

export default HeroSection;
