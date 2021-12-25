import React from "react";
import {MenuLink, menuLinks , MenuLinkProps} from "./Menulink";

export function SideMenu() {
    return(
    <div className="bg-gray-100 w-60 h-screen  shadow">
        <nav className="mt-10">
            {menuLinks && menuLinks.map(({name,to,icon}:MenuLinkProps) => (<MenuLink name={name} to={to} icon={icon}/>))}
        </nav>
    </div>
    )
}