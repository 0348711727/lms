import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface ICoursesProps {};

const CoursesPage: FC<ICoursesProps> = (props) => {
    return (
        <div className="p-7">
            <Link href='/teacher/create'>
                <Button><PlusCircle className="mr-2"/> Create New</Button>
            </Link>
        </div>
    );
}

export default CoursesPage