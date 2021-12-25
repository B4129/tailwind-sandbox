import React, {FC,} from "react";
import {Outlet} from "react-router-dom";
import {SideMenu} from "./SideMenu";


export const DefaultLayout: FC = () => {
    return (
        <>
            <div className="flex flex-col bg-gray-100 h-full max-w-screen">
                <div className="flex flex-item justify-center bg-gray-400"><span>ヘッダー</span></div>
                <div className="flex flex-item">
                    <SideMenu/>
                    <main className=" container w-screen mx-auto flex flex-col  ">
                        <Outlet/>
                    </main>
                </div>
                <div className="flex flex-item justify-center bg-gray-400"><span>フッター</span></div>
            </div>
        </>
    );
}