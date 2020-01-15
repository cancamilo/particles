import React, { useState } from "react";
import styles from "./ParticleContainer.module.scss";
import { PoemBox } from "./components/PoemBox";
import { FoxBox } from "./components/FoxBox";
import Particles from "react-particles-js";
import { params } from "./data/particleParams";

export const ParticleContainer = () => {
  const [option, setOption] = useState(0);
  const [toggle, setToggle] = useState(true);

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
            <button
              onClick={e => {
                setOption(0);
                setToggle(!toggle);
              }}
            >
              Poem!
            </button>
            <button
              onClick={e => {
                setOption(1);
                setToggle(!toggle);
              }}
            >
              Fox!!
            </button>
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
