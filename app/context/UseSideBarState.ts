"use client";
import { create } from "zustand";

type SideBarState = {
    isSideBarOpen: boolean;
    toggleSideBar: () => void;
};


const UseSideBarState = create<SideBarState>((set) => ({
    isSideBarOpen: false,
    toggleSideBar: () =>
        set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
}));

export default UseSideBarState;
