import React, { useEffect, useState } from "react";
import axios from "axios";

const factUrl = "https://quotes.rest/qod";
const foxUrl = "https://randomfox.ca/floof";

const foxIds = [
  119,
  12,
  82,
  62,
  94,
  76,
  52,
  80,
  121,
  12,
  57,
  32,
  24,
  60,
  39,
  120,
  4,
  116
];

export const FoxBox = ({ toggle }) => {
  const [foxSrc, setFoxSrc] = useState("");

  useEffect(() => {
    function fetchData() {
      const length = foxIds.length;
      const rdn = Math.floor(Math.random() * length);
      const foxId = foxIds[rdn];
      setFoxSrc(`https://randomfox.ca/images/${foxId}.jpg`);
    }

    fetchData();
  }, [toggle]);
  return (
    <div>
      <img alt="fox" style={{ width: "400px" }} src={foxSrc} />
    </div>
  );
};
