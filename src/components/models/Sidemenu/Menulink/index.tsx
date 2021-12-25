import {Link} from "react-router-dom";
import React, {ReactElement} from "react";
import {HiCube, HiHome} from "react-icons/hi";

export type MenuLinkProps = {
    name: string,
    to: string,
    icon: ReactElement,
}

export function MenuLink(props: MenuLinkProps) {
    return (<div className="">
        <Link
            className="transition-all hover:bg-gray-300 hover:font-semibold flex items-center py-2 px-8 bg-gray-200 text-gray-700 hover:border-r-4 border-gray-400 "
            to={props.to}>{props.icon} <span className="ml-2">{props.name}</span></Link>
    </div>)
}

export const menuLinks = [{
    name: "ホーム",
    to: "/",
    icon: <HiHome />,
}, {
    name: "サンドボックス",
    to: "/sandbox",
    icon: <HiCube />,
}]