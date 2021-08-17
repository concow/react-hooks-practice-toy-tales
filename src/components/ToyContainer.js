import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  return (
    <div id="toy-collection">
      { toys.map( toy => 
      <ToyCard toy={toy} key={toy.id} />
      )})

      </div>
  );
}

export default ToyContainer;
