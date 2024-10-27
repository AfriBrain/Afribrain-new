import { Heading, WorkCard } from "@/app/components/custom";
import { FC } from "react";
interface WorkSectionProps {
  worksData: WorksData[];
}
const WorkSection: FC<WorkSectionProps> = async ({ worksData }) => {
  return (
    <section
      id="work"
      className="relative w-full h-full flex flex-col  bg-black/60  pb-12 bg-white  "
    >
      <header>
        <Heading heading="work" />
      </header>
      <section className="grid-lg gap-5 laptop:gap-10 p-5 laptop:p-10">
        {worksData &&
          worksData.map((workData, index) => {
            return (
              <WorkCard
                heading={workData.title}
                body={workData.description}
                image={workData?.banner?.secure_url || null}
                socials={workData.socials}
                position={index}
                key={index}
              />
            );
          })}
      </section>
    </section>
  );
};

export default WorkSection;
