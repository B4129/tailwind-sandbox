import React from 'react';
import { MenuLink, menuLinks, MenuLinkProps } from './Menulink';

export function SideMenu() {
  return (

      <nav className="mt-10 flex flex-col">
        {menuLinks &&
          menuLinks.map(({ name, to, icon }: MenuLinkProps) => (
            <MenuLink name={name} to={to} icon={icon} />
          ))}
      </nav>

  );
}
