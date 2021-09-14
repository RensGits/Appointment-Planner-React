import React from "react";

export const Tile = (props) => {

  const pointArray = Object.values(props.datapoint)

    
  return (
  
    <div>
      {pointArray.map((point,index) => <p className = {index === 0 ? 'tile-title' : 'tile'}>{point}</p>)}
    </div>
   
  );
};
