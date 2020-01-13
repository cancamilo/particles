import React, { useEffect, useState } from "react";
import axios from "axios";

const factUrl = "https://quotes.rest/qod";
const foxUrl = "https://randomfox.ca/floof";
export const FoxBox = () => {
  const [foxSrc, setfoxSrc] = useState("");

  useEffect(() => {
    async function fetchData() {
      const randomFact = await axios.get(factUrl);
      //console.log(randomFact);

      const randomImg = await axios.get(foxUrl);
      console.log(randomImg);
    }

    fetchData();
  }, []);
  return (
    <div>
      <img
        alt="fox"
        style={{ width: "400px" }}
        src={"https://randomfox.ca/images/47.jpg"}
      />
    </div>
  );
};
