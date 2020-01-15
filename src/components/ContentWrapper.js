import React from "react";
import { PoemBox } from "./PoemBox";
import { FoxBox } from "./FoxBox";

export const ContentWrapper = ({ option, toggle }) => {
  return (
    <div>
      {option === 0 ? <PoemBox toggle={toggle} /> : <FoxBox toggle={toggle} />}
    </div>
  );
};
