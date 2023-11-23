import { FC } from "react";
import { Logo } from "./Logo";
import { SideBarRoutes } from "./SideBarRoutes";
interface ISideBarProps { };

const SideBar: FC<ISideBarProps> = (props) => {
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

export default SideBar;