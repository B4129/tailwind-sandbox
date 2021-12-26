import React from "react";

export const BaseFooter = () => {
    return (
        <>
            <div className="flex flex-row">
                <div className="flex-1 border-t bg-gray-900"/>
            </div>
            <div className="flex flex-row">
                <div className="flex-1 justify-center bg-gray-900 h-64 z-10">
                    <span>フッター</span>
                </div>
            </div>
        </>
    );
}