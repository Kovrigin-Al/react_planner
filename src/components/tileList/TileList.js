import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.list.map((object, index) => {
        return <Tile key={index} number={index + 1} object={object} />;
      })}
    </div>
  );
};
