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
      <div id={`tour-item-para-${tour.id}`}>
        <p>{showMore ? tour.info : tour.info.slice(0, 200)}...</p>
        <button id={`see-more-${tour.id}`} onClick={toggleInfo}>
          {showMore ? "See less" : "See more"}
        </button>
      </div>
      <button id={`delete-btn-${tour.id}`} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Tour;
