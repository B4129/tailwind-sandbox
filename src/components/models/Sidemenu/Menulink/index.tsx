import { Link } from 'react-router-dom';
import React, { ReactElement } from 'react';
import {HiCube, HiHome, HiPencil, HiUser} from 'react-icons/hi';

export type MenuLinkProps = {
  name: string;
  to: string;
  icon: ReactElement;
};

export function MenuLink(props: MenuLinkProps) {
  return (
    <div className="flex-1">
      <div className="flex flex-row transition-all hover:bg-gray-200 hover:font-semibold  bg-gray-100 text-gray-700 hover:border-r-4 border-gray-400 justify-center h-12 items-center">
        <div className="flex-none ">
          <span className="text-2xl ml-auto">{props.icon}</span>
        </div>
        <div className="flex-none">
          <Link className="text-xl" to={props.to}>
            {props.name}
          </Link>
        </div>
      </div>
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
    name: 'タイルメニュー',
    to: '/tile-menu',
    icon: <HiCube />,
  },
  {
    name: 'ユーザーカード',
    to: '/user-card',
    icon: <HiUser />,
  },
  {
    name: 'ユーザーカード',
    to: '/hover-under-line',
    icon: <HiPencil />,
  },
];
