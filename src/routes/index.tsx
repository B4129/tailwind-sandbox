import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { TileMenuPage } from '../pages/TileMenuPage';

import { Main } from '../pages/Main';
import {NoLayout} from "../components/layouts/NoLayout";
import {UserCardPage} from "../pages/UserCardPage";

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
    ],
  },
];
