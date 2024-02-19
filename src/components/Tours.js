import React from "react";
import Tour from "./Tour";

function Tours({ tours, deleteTour }) {
  return (
    <div id="tours_container">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} deleteTour={deleteTour} />
      ))}
    </div>
  );
}

export default Tours;
