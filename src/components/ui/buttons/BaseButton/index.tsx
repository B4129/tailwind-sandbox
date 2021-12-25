import React, {FC} from "react";
import { HiUser } from "react-icons/hi";
export const BaseButton: FC = () => {
    return (
        <>
            <button type="submit"
                    className="inline-flex items-center justify-center space-x-2 border border-transparent text-sm font-medium rounded-full w-12 h-12 text-white bg-green-600 hover:bg-green-700 transition-colors">
                <HiUser/>
            </button>
        </>
    );
}