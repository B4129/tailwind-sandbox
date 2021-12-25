import { Link } from 'react-router-dom';
import React, { ReactElement } from 'react';
import { HiCube, HiHome } from 'react-icons/hi';

export type MenuLinkProps = {
  name: string;
  to: string;
  icon: ReactElement;
};

export function MenuLink(props: MenuLinkProps) {
  return (
    <div className="flex-1 ">
      {props.icon}
      <Link
        className=" transition-all hover:bg-gray-200 hover:font-semibold  bg-gray-100 text-gray-700 hover:border-r-4 border-gray-400 "
        to={props.to}>
        {props.name}
      </Link>
    </div>
  );
}

export const menuLinks = [
  {
    name: 'ホーム',
    to: '/',
    icon: <HiHome />,
  },
  {
    name: 'サンドボックス',
    to: '/sandbox',
    icon: <HiCube />,
  },
];
