import React, {FC} from 'react';
import {UnderLabel} from "../components/ui/Labels/UnderLabel";

export const HoverUnderLine: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="flex-1 mt-5">
          <UnderLabel />
        </div>
      </div>
    </div>
  );
};
