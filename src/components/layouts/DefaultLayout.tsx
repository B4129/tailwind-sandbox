import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { SideMenu } from '../models/Sidemenu';
import { BaseHeader } from '../models/Header';
import { BaseFooter } from '../models/Footer';

export const DefaultLayout: FC = () => {
  return (
    <>
      <div className="flex flex-col items-stretch">
        <div className="flex-1">
          <BaseHeader />
        </div>
        <div className="flex-1">
          <div className="flex flex-row overflow-x-hidden">
            <div className="flex-none w-3/12  bg-gray-100 min-h-screen">
              <SideMenu />
            </div>
            <div className="flex-auto container bg-gray-100 min-h-screen">
              <main className="flex flex-row justify-center h-full items-center">
                <div className="w-5/6 h-5/6 bg-white rounded p-6">
                  <Outlet />
                </div>
              </main>

            </div>
          </div>
        </div>
        <div className="flex-1">
          <BaseFooter />
        </div>
      </div>
    </>
  );
};
