import Image from "next/image";
import { FC } from "react";
import logo from '../../../public/logo.svg';
interface ILogoProps { };

export const Logo: FC<ILogoProps> = (props) => {
    return (
        <div>
            <Image height={50} width={50} src={logo} alt="logo" />
        </div>
    );
}
