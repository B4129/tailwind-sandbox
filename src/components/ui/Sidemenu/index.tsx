import React from "react";
import {MenuLink, menuLinks} from "./Menulink";

export function SideMenu() {
    return(
    <div className="bg-white w-60 h-screen sticky top-0">
        <nav className="mt-10">
            {menuLinks && menuLinks.map(({name,to,icon}) => (<MenuLink name={name} to={to} icon={icon}/>))}
        </nav>
    </div>
    )
}