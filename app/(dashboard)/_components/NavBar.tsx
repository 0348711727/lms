import { FC } from "react";
import { MobileSideBar } from "./MobileSideBar";
import { NavBarRoutes } from "@/components/NavBarRoutes";
interface INavbarProps {};

export const Navbar: FC<INavbarProps> = (props) => {
    return (
        <div className="border-b p-4 h-full flex items-center bg-white shadow-sm">
            <MobileSideBar />
            <NavBarRoutes />
        </div>
    );
}
