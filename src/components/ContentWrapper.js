import React, { useState } from "react";
import { PoemBox } from "./PoemBox";
import { FoxBox } from "./FoxBox";

export const ContentWrapper = ({ option }) => {
  if (option === 0) {
    return <PoemBox />;
  }
  if (option === 1) {
    return <FoxBox />;
  }
};
