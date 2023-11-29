"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
interface INavBarRoutesProps { };

export const NavBarRoutes: FC<INavBarRoutesProps> = (props) => {
    const pathName = usePathname();
    const router = useRouter();

    const isTeacherPage = pathName?.includes('/teacher');
    const isPlayerPage = pathName?.includes('/chapter');

    return (
        <div className="gap-x-3 flex ml-auto">
            {isTeacherPage || isPlayerPage ? (
                <Link href="/">
                    <Button>
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>

            ) :
                (
                    <Link href="/teacher/courses">
                        <Button size='sm'>Teacher Mode</Button>
                    </Link>
                )
            }
            <UserButton />
        </div>
    );
}
