import Image from "next/image";
import React from "react";
import SampleImage from "@/app/assets/Africa_1.jpeg";
interface ProfileProps {
  image: string;
}
const Profile: React.FC<ProfileProps> = ({ image }) => {
  return (
    <section className=" order-1 relative w-[80%] laptop:w-[40%]  order-1 object-cover z-10 mx-auto">
      <Image
        src={image}
        width={600}
        height={600}
        priority={true}
        className="w-full aspect-square rounded-lg"
        alt="This is a profile image"
      />
    </section>
  );
};

export default Profile;
