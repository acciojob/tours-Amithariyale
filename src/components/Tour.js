import React, { useState } from "react";

function Tour({ tour, deleteTour }) {
  const [showMore, setShowMore] = useState(false);
  const toggleInfo = () => {
    setShowMore(!showMore);
  };
  const handleDelete = () => {
    deleteTour(tour.id);
  };
  return (
    <div className="tour">
      <img src={tour.image} alt={tour.name} />
      <div>
        <p>{tour.name}</p>
        <p>{tour.price}</p>
      </div>
      {showMore ? (
        <div>
          {tour.info}
          <button onClick={toggleInfo}>Show less</button>
        </div>
      ) : (
        <div>
          {tour.info.slice(0, 20)}...
          <button onClick={toggleInfo}>Show more</button>
        </div>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Tour;
