import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {Object.values(props.object).map((value, index) => {
        if (index === 0) {
          return (
            <p
              key={index}
              className="tile-title"
            >{`${props.number}. ${value}`}</p>
          );
        } else {
          return (
            <p key={index} className="tile">
              {value}
            </p>
          );
        }
      })}
    </div>
  );
};
