import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import {BaseHeader} from "../models/Header";
import {BaseFooter} from "../models/Footer";

export const NoLayout: FC = () => {
  return (
    <>
        <div className="flex flex-col items-stretch">
            <div className="flex-1 sticky top-0">
                <BaseHeader />
            </div>
            <div className="flex-1 ">
                <div className="flex flex-row overflow-x-hidden min-h-screen justify-center">
                    <div className="flex-1 container ">
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
