import { Heading, ServiceCard } from "../components/custom";
import { FC } from "react";

interface ServiceSectionProps {
  servicesData: ServicesData[];
}
const ServiceSection: FC<ServiceSectionProps> = async ({ servicesData }) => {
  return (
    <section
      id="service"
      className="relative w-full h-full flex flex-col  bg-black/60 pb-12  "
    >
      <section className="absolute top-0 w-full h-5 rounded-b-full bg-white"></section>

      <Heading heading="services" />
      <section className="grid-lg gap-5 laptop:gap-10 p-5 laptop:p-10">
        {servicesData &&
          servicesData.map((serviceData, index) => {
            return (
              <ServiceCard
                key={index}
                index={index}
                heading={serviceData.title}
                body={serviceData.description}
              />
            );
          })}
      </section>
      <section className="absolute bottom-0 w-full h-5 rounded-t-full bg-white"></section>
    </section>
  );
};

export default ServiceSection;
