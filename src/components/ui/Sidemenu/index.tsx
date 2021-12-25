import React from "react";
import {MenuLink, menuLinks} from "./Menulink";

export function SideMenu() {
    return(
    <div className="bg-white w-60 h-screen sticky top-0">
        <nav className="mt-10">
            {menuLinks && menuLinks.map(link => (<MenuLink name={link.name} to={link.to}/>))}
        </nav>
    </div>
    )
}