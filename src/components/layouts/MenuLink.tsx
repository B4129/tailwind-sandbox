import {Link} from "react-router-dom";
import React from "react";

type MenuLinkProps = {
    name: string,
    to: string,
}

export function MenuLink(props: MenuLinkProps) {
    return (<div className="">
        <Link
            className="transition-all hover:bg-gray-300 hover:font-semibold flex items-center py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
            to={props.to}>{props.name}</Link>
    </div>)
}

export const menuLinks = [{
    name: "ホーム",
    to: "/",
}, {
    name: "サンドボックス",
    to: "/sandbox",
}]