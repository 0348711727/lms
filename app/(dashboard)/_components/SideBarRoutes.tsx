'use client';

import { BarChart, Compass, Layout, List } from "lucide-react";
import { FC } from "react";
import { SideBarItem } from "./SideBarItem";
import { usePathname } from "next/navigation";
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

const teacherRoutes = [
    {
        icon: List,
        href: '/teacher/courses',
        label: "Courses"
    },
    {
        icon: BarChart,
        href: '/teacher/analytics',
        label: "Analytic"
    },
]

export const SideBarRoutes: FC<ISideBarRoutesProps> = (props) => {
    const pathName = usePathname();
    const isTeacherPage = pathName?.includes('/teacher/');
    
    const routes = isTeacherPage ? teacherRoutes :guestRoutes;
    return (
        <div>

            {routes.length && routes.map(({ icon, href, label }) => {
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
