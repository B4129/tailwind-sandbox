import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { TileMenuPage } from '../pages/TileMenuPage';

import { Main } from '../pages/Main';
import {NoLayout} from "../components/layouts/NoLayout";
import {UserCardPage} from "../pages/UserCardPage";
import {HoverUnderLine} from "../pages/HoverUnderLine";
import {HiCube, HiHome, HiPencil, HiUser} from "react-icons/hi";
import React from "react";

export const rootPath = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
    ],
  },
  {
    path: '/*',
    element: <NoLayout />,
    children: [
      {
        path: 'tile-menu',
        element: <TileMenuPage />,
      },
      {
        path: 'user-card',
        element: <UserCardPage />,
      },
      {
        path: 'hover-under-line',
        element: <HoverUnderLine />,
      },
    ],
  },
];

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
