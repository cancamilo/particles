import React, { useState, useEffect } from "react";
import { poems } from "../data/poems";

import styles from "./PoemBox.module.scss";

const url = "https://www.poemist.com/api/v1/randompoems";
export const PoemBox = ({ toggle }) => {
  const [currentPoem, setCurrentPoem] = useState({});
  useEffect(() => {
    function fetchData() {
      const length = poems.length;
      const poemId = Math.floor(Math.random() * length);
      console.log("randomly generated id:", poemId);
      console.log("poems length ", length);
      setCurrentPoem(poems[poemId]);
    }
    fetchData();
  }, [toggle]);

  return (
    <div className={styles.box}>
      <h1>{currentPoem.title || ""}</h1>
      <p>{currentPoem.content || ""}</p>
      <h5>{currentPoem.poet ? currentPoem.poet.name : ""}</h5>
    </div>
  );
};
