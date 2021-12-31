import React, {FC} from 'react';
import {TileMenu} from "../components/ui/TileMenu";

export const TileMenuPage: FC = () => {

  return (
    <div className="container mx-auto">
      <div className="flex flex-row ">
        <div className="flex-1">
          <TileMenu />
        </div>
      </div>
    </div>
  );
};
