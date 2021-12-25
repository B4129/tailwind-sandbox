import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SideMenu } from '../models/Sidemenu';
import { BaseHeader } from '../models/Header';

function BaseFooter() {
  return (
    <div className="flex flex-item justify-center bg-gray-100 h-64 z-10">
      <span>フッター</span>
    </div>
  );
}

export const DefaultLayout: FC = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 h-full">
        <BaseHeader />
        <div className="flex flex-item">
          <SideMenu />
          <main className="container w-screen mx-auto flex flex-col  ">
            <Outlet />
          </main>
        </div>
        <BaseFooter />
      </div>
    </>
  );
};
