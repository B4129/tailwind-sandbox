import React, {FC} from 'react';
import {UserCard} from "../components/models/User/Card";

export const UserCardPage: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="flex-1 mt-5">
          <UserCard/>
        </div>
      </div>
    </div>
  );
};
