import React from "react";
import styles from "./canvas.module.css";
import Circle from "../Circle/Circle";
import RandomHex from "random-hex";

const Canvas = ({ circles, setCircles }) => {
  return (
    <div
      className={styles.container}
      onClick={(e) => {
        console.log(
          "mouse position",
          `clientX: ${e.clientX}, clientY ${e.clientY}`
        );
        setCircles((prevCircles) => {
          return [
            ...prevCircles,
            {
              clientX: e.clientX,
              clientY: e.clientY,
              backgroudColor: RandomHex.generate(),
            },
          ];
        });
      }}>
      {circles.map(({ clientX, clientY, backgroudColor }) => (
        <Circle
          key={`${clientX}${clientY}${Date().now}`}
          clientX={clientX}
          clientY={clientY}
          backgroundColor={backgroudColor}
        />
      ))}
    </div>
  );
};

export default Canvas;
