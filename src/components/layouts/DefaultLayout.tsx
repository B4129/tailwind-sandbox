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
            <div className="flex flex-col bg-gray-100 min-h-screen w-screen ">
                <div className="flex container ">
                    <header className="container  mx-auto flex justify-between items-center text-white">aa</header>
                    <SideMenu/>
                    <main className="w-full ">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </>
    );
}