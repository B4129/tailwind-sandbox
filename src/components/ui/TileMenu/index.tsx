import { HiCube, HiUser } from 'react-icons/hi';
import React from 'react';

export function TileMenu() {
  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-100 h-96 p-4">
      <div className="group col-span-2  border border-gray-200 bg-white rounded hover:border-blue-200 hover:shadow-lg transition-all shadow">
        <div className="flex flex-row h-full justify-center items-center hover:cursor-pointer group-hover:bg-blue-50">
          <div className="flex-grow w-full">
            <HiUser className="transition-all mx-auto text-7xl text-gray-700 group-hover:text-gray-800 " />
          </div>
          <div className="flex-grow w-0 invisible group-hover:visible group-hover:w-full transition-all opacity-0 group-hover:opacity-100 h-auto ">
            <span className="text-3xl text-gray-600 whitespace-nowrap">ユーザー情報</span>
          </div>
        </div>
      </div>
      <div className="col-span-2  border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700 " />
        </div>
      </div>
      <div className=" border border-gray-200 bg-white rounded hover:shadow-lg hover:border-blue-400 transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700" />
        </div>
      </div>
      <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700" />
        </div>
      </div>
      <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700" />
        </div>
      </div>
      <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700" />
        </div>
      </div>
      <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700" />
        </div>
      </div>
      <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700" />
        </div>
      </div>
      <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700" />
        </div>
      </div>
      <div className=" border border-gray-200 bg-white rounded hover:border-blue-400 hover:shadow-lg transition-all hover:cursor-pointer shadow">
        <div className="flex flex-row justify-center items-center h-full">
          <HiCube className="text-7xl text-gray-700" />
        </div>
      </div>
    </div>
  );
}
