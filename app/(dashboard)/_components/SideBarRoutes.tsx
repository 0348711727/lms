'use client';

import { Compass, Layout } from "lucide-react";
import { FC } from "react";
import { SideBarItem } from "./SideBarItem";
interface ISideBarRoutesProps { };

const guestRoutes = [
    {
        icon: Layout,
        href: '/',
        label: "Dashboard"
    },
    {
        icon: Compass,
        href: '/search',
        label: "Browse"
    },
]

export const SideBarRoutes: FC<ISideBarRoutesProps> = (props) => {
    const routes = guestRoutes;
    return (
        <div>
            {routes.length && routes.map(({ icon, href, label }, index: number) => {
                return (
                    <SideBarItem
                        key={href}
                        href={href}
                        icon={icon}
                        label={label}
                    />
                )
            })}
        </div>
    );
}
