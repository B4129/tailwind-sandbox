import React, { FC, useState } from 'react';
import { HiCube, HiUser } from 'react-icons/hi';

export const Sandbox: FC = () => {
  const [iconColor, setIconColor] = useState('text-gray-700');
  return (
    <div className="container mx-auto">
      <div className="flex flex-row ">
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4 bg-gray-100 h-96 p-4">
            <div className="col-span-2  border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all">
              <div
                className="flex flex-row justify-center items-center h-full hover:cursor-pointer"
                onMouseEnter={() => setIconColor('text-gray-500')}
                onMouseLeave={() => setIconColor('text-gray-700')}>
                <HiUser className={`transition-all text-7xl ${iconColor}`} />
              </div>
            </div>
            <div className="col-span-2  border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
            <div className=" border border-gray-200 bg-white rounded hover:shadow-lg hover:border-blue-400 transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
            <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
            <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
            <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
            <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
            <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
            <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
            <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer">
              <div className="flex flex-row justify-center items-center h-full">
                <HiCube className="text-7xl text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
