import React, {FC} from "react";
import {Outlet} from "react-router-dom";

export const NoLayout: FC = () => {
    return (
        <>
            <div className="flex bg-gray-100 min-h-screen w-screen ">
                <main className="w-full  container mx-auto">
                    <Outlet />
                </main>
            </div>
        </>
    );
}