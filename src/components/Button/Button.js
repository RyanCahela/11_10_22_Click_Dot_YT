import React from "react";
import styles from "./button.module.css";

const Button = ({ setCircles, children }) => {
  return (
    <button className={styles.container} onClick={() => setCircles(() => [])}>
      {children}
    </button>
  );
};

export default Button;
