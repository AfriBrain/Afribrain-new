import { FC } from "react";
import { Profile } from "@/app/components/custom";
interface AboutSectionProps {
  aboutData: UserData;
}
const AboutSection: FC<AboutSectionProps> = async (props) => {
  const { profile, firstName, surname, occupation, description } =
    props.aboutData;

  return (
    <article className="w-full relative bg-white backdrop-blur-lg">
      <section
        id="about"
        className="flex min-h-[100vh] w-full flex-col laptop:flex-row laptop:items-center justify-center gap-10 p-5 border-none "
      >
        <figcaption className="w-full laptop:w-[60%] text-md laptop:text-lg flex flex-col gap-3 items-center laptop:items-start  order-2 laptop:order-1 pb-10">
          <h2 className="text-primary font-title capitalize font-bold text-xl tablet:text-2xl laptop:text-6xl">
            {`${firstName} ${surname}`}
          </h2>
          <h3 className="capitalize font-bold text-slate-700 text-md tablet:text-xl laptop:text-2xl">
            {occupation}
          </h3>
          <p className="text-center laptop:text-start py-2 text-white">
            {description}
          </p>
        </figcaption>
        <Profile image={profile.secure_url} />
      </section>
    </article>
  );
};

export default AboutSection;
