'use client';

import { LucideIcon } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
interface ISideBarItemProps {
    label: string,
    icon: LucideIcon,
    href: string
};

export const SideBarItem = ({ label, icon: Icon, href }: ISideBarItemProps) => {
    const pathName = usePathname();
    const router = useRouter();

    const isActive = (pathName === '/' && href === '/') ||
        pathName === href ||
        pathName?.startsWith(`${href}`)

    const onClick = () => {
        router.push(href);
    }
    return (
        <button onClick={onClick} type="button" className={cn('flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600')}>
            {label}
        </button>
        // <div>
        //     {href}
        // </div>
    );
}
