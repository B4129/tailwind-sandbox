import React, {FC} from 'react';
import {Outlet} from 'react-router-dom';
import {SideMenu} from '../models/Sidemenu';
import {BaseHeader} from '../models/Header';
import {BaseFooter} from "../models/Footer";

export const DefaultLayout: FC = () => {
  return (
    <>
      <div className="flex justify-center items-stretch items-center  h-16 z-10">
          <BaseHeader />
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="flex overflow-x-hidden">
            <div className="flex-none w-3/12  bg-gray-100 h-screen">
              <SideMenu />
            </div>
            <main className="flex flex-auto container justify-center items-center bg-gray-100 ">
              <div className="basis-5/6 h-5/6 bg-white rounded">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="flex">
        <BaseFooter />
      </div>
    </>
  );
};
