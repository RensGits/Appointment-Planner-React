import React from "react";
import {Tile} from '../tile/Tile.js';

export const TileList = (props) => {
  
  const dataSet = props.data
 

  const items = dataSet.map(datapoint => <Tile datapoint = {datapoint}/>);


  return (
    <div>
      <div>
        {items}
      </div>
     
    </div>
  );
};
