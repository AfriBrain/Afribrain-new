"use client";
import { FC } from "react";
import Link from "next/link";
import UseSideBarState from "@/app/context/UseSideBarState";
interface NavBtnProps {
  to: string;
  text: string;
  category?: string;
}
const NavBtn: FC<NavBtnProps> = (props) => {
  const toggleNavbar = UseSideBarState((state) => state.toggleSideBar);
  if (props?.category === "external") {
    return (
      <a
        href={props.to}
        className="text-lg h-12 2xl:h-16 2xl:text-xl font-bold hover:bg-purpleish hover:rounded-lg text-white capitalize flex-row-centered px-2 "
      >
        <span>{props.text}</span>
      </a>
    );
  } else {
    return (
      <Link
        href={props.to}
        onClick={toggleNavbar}
        className="text-lg h-12 2xl:h-16 2xl:text-xl font-bold hover:bg-purpleish hover:rounded-lg text-white capitalize flex-row-centered px-2  "
      >
        {props.text}
      </Link>
    );
  }
};

export default NavBtn;
