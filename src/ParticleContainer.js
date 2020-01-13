import React, { useState } from "react";
import { ContentWrapper } from "./components/ContentWrapper";
import styles from "./ParticleContainer.module.scss";

export const ParticleContainer = () => {
  const [option, setOption] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.centerFrame}>
        <ContentWrapper option={option} />
        <div>
          show me a new:
          <button onClick={e => setOption(0)}>Poem!</button>
          <button onClick={e => setOption(1)}>Fox!!</button>
        </div>
      </div>
    </div>
  );
};
