import { Menu } from "lucide-react";
import { FC } from "react";
interface IMobileSideBarProps { };

import { SideBar } from "./SideBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const MobileSideBar: FC<IMobileSideBarProps> = (props:any) => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden ">
                <Menu />
            </SheetTrigger>
            <SheetContent side='left' className='p-0 bg-white'>
                <SideBar />
            </SheetContent>
        </Sheet>
    );
}
