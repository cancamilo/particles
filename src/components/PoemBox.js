import React, { useEffect } from "react";
import axios from "axios";
import { poems } from "../data/poems";

const url = "https://www.poemist.com/api/v1/randompoems";
export const PoemBox = () => {
  useEffect(() => {
    async function fetchData() {
      //const data = await axios.get(url);
      //console.log(data);

      const length = poems.length;
      const poemId = Math.floor(Math.random() * length);
      console.log("randomly generated id:", poemId);

      // TODO: put poem into state
      // extract title, content, and author data.
      // try different poems to check if all content fits
      // check if html syntax is correctly rendered.
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>title</h1>
      <p>Content</p>
      <h5>footer</h5>
    </div>
  );
};
