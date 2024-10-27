"use client";
import React from "react";
import { NavBtn } from "@/app/components/custom";
import UseSideBarState from "@/app/context/UseSideBarState";

interface Props {
  userData: UserData;
}
const Navbar: React.FC<Props> = (props) => {
  const isSideBarOpen = UseSideBarState((state) => state.isSideBarOpen);
  return (
    <article
      className={`${
        isSideBarOpen ? "fixed" : "hidden"
      } self-end laptop:justify-end w-[95vw] tablet:w-[40vw] laptop:w-full laptop:flex fixed top-14 laptop:top-0 right-3 laptop:right-0 flex flex-col laptop:flex-row tablet:gap-2 rounded-lg laptop:rounded-none p-2 z-50 bg-tertiary/80 laptop:bg-transparent`}
    >
      <NavBtn to="/" text="about" />
      <NavBtn to="/work" text="projects" />
      <NavBtn to="/contact" text="contact" />
    </article>
  );
};

export default Navbar;
