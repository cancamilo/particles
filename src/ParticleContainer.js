import React, { useState } from "react";
import styles from "./ParticleContainer.module.scss";
import { PoemBox } from "./components/PoemBox";
import { FoxBox } from "./components/FoxBox";
import Particles from "react-particles-js";
import ParticlesBg from "particles-bg";
import heart from "./images/heart";
import { params } from "./data/particleParams";

const bgParams = {
  num: [4, 7],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-50, 50],
  alpha: [0.6, 0],
  scale: [0.1, 0.9],
  body: heart,
  position: "all",
  //color: ["random", "#ff0000"],
  cross: "dead",
  random: 10
};

export const ParticleContainer = () => {
  const [option, setOption] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [paramId, setParamId] = useState(0);

  const buttonClicked = (e, optionId) => {
    e.preventDefault();
    const rand = Math.floor(Math.random() * params.length);
    setParamId(rand);
    setOption(optionId);
    setToggle(!toggle);
  };

  return (
    <div className={styles.container}>
      <Particles
        params={params[2]}
        style={{
          position: "fixed",
          width: "100%"
        }}
      />

      <div className={styles.centerFrame}>
        <div className={styles.controls}>
          <h3>Show me new!!</h3>
          <div>
            <button onClick={e => buttonClicked(e, 0)}>Poem!</button>
            <button onClick={e => buttonClicked(e, 1)}>Fox!!</button>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          {option === 0 ? (
            <PoemBox toggle={toggle} />
          ) : (
            <FoxBox toggle={toggle} />
          )}
        </div>
      </div>
    </div>
  );
};
