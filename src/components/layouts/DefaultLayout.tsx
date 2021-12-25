import React, {FC,} from "react";
import {Link, Outlet} from "react-router-dom";


function SideMenu() {
    return <aside className="bg-white w-60 h-screen sticky top-0">
        <nav className="mt-10">
            <div>

                <Link className="flex items-center py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700" to="/sandbox">Sandbox</Link>
            </div>
            <div>

                <Link
                    className="flex items-center py-2 px-8 bg-gray-200 text-gray-700 border-r-4 border-gray-700"
                    to="/"
                >
                    ホーム
                </Link>
            </div>
        </nav>
    </aside>;
}

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