import { FC } from "react";
import { Logo } from "./Logo";
import { SideBarRoutes } from "./SideBarRoutes";
interface ISideBarProps { };

export const SideBar: FC<ISideBarProps> = () => {
    return (
        <div className="h-full border-r flex flex-col overflow-y-auto bg-grey shadow-md">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex flex-col w-full">
                <SideBarRoutes />
            </div>
        </div>
    );
}
