import React from "react";
import styles from "./circle.module.css";

const Circle = ({ clientX, clientY, backgroundColor }) => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundColor,
        position: "absolute",
        insetBlockStart: clientY - 25,
        insetInlineStart: clientX - 25,
      }}></div>
  );
};

export default Circle;
