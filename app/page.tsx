import {
  AboutSection,
  HeroSection,
  WorkSection,
  Footer,
  ServiceSection,
} from "./sections";

export default async function Home() {
  const businessData = {
    firstName: "Afribrain",
    surname: "Bespoke",
    email: "afribrainbespoke@gmail.com",
    contact: "0114312815",
    description: "A tech startup",
    profile: {
      height: 387,
      width: 587,
      format: "png",
      folder: "sample_upload",
      publicID: "sample_upload/iazy9ilpb5r277ii4uzz",
      secure_url:
        "https://res.cloudinary.com/fredztech-ltd/image/upload/v1715364037/sample_upload/iazy9ilpb5r277ii4uzz.png",
    },
    occupation: "Tech startup",
    services: [
      {
        _id: "65e742d1ac8b4f38be0b3c18",
        title: "Virtual Care",
        description:
          "The Virtual Care is a comprehensive solution designed to support and empower pregnant individuals on their journey to a healthy and active pregnancy. This application aims to provide a personalized and safe fitness experience tailored to the unique needs and stages of pregnancy. By incorporating expert guidance, customizable workout plans, and health tracking features, our goal",
        userID: "65e742d1ac8b4f38be0b3c18",
      },
      {
        _id: "66a123d1ac8b4f38be0b3c19",
        title: "Health Tracker",
        description:
          "Health Tracker is a versatile application designed to help individuals monitor their daily health metrics. It offers personalized health recommendations, daily activity tracking, and integration with wearable devices to provide comprehensive health insights.\n\nTechnologies used include: Frontend: Vue.js; Backend: Django; Database: PostgreSQL; Authentication: JWT; Communication: REST API",
        userID: "66a123d1ac8b4f38be0b3c19",
      },
    ],
    works: [
      {
        _id: "668a87ebf2c6aedd6c66475f",
        banner: {
          height: 387,
          width: 587,
          format: "png",
          folder: "sample_upload",
          publicID: "sample_upload/iazy9ilpb5r277ii4uzz",
          secure_url:
            "https://res.cloudinary.com/fredztech-ltd/image/upload/v1715364037/sample_upload/iazy9ilpb5r277ii4uzz.png",
        },
        title: "AJA-pose",
        description:
          "AJA-pose helps you train, validate and test your animal pose estimation model.The model architecture uses Vision Transformers and HRNet(VHR)",
        socials: [
          {
            name: "website",
            link: "https://aja-pose.vercel.app/",
          },
          {
            name: "pypi",
            link: "https://pypi.org/project/aja-pose/",
          },
          {
            name: "github",
            link: "https://github.com/kaburia/AJA-pose",
          },
        ],
      },
      {
        _id: "668a88fbf2c6aedd6c66476f",
        banner: {
          height: 387,
          width: 587,
          format: "png",
          folder: "sample_upload",
          publicID: "sample_upload/iazy9ilpb5r277ii4uzz",
          secure_url:
            "https://res.cloudinary.com/fredztech-ltd/image/upload/v1715364037/sample_upload/iazy9ilpb5r277ii4uzz.png",
        },
        title: "FitTrack",
        description:
          "FitTrack is a fitness tracking application that enables users to log workouts, track progress, and achieve fitness goals. It features customizable workout plans, progress tracking, and social sharing capabilities.",
        socials: [
          {
            name: "website",
            link: "https://fittrack.example.com/",
          },
          {
            name: "github",
            link: "https://github.com/username/fittrack",
          },
        ],
      },
    ],
    github: "#",
    twitter: "#",
    linkedIn: "#",
    userID: "65e742d1ac8b4f38be0b3c18",
  };

  return (
    <section className="w-full border-black bg-custom-1  bg-center bg-cover max-h-screen overflow-y-scroll">
      <HeroSection />
      <AboutSection aboutData={businessData} />
      <ServiceSection servicesData={businessData.services} />
      <WorkSection worksData={businessData.works} />
      <Footer />
    </section>
  );
}
