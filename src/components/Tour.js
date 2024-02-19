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
        {showMore ? (
          <>
            {tour.info}
            <button id={`see-more-${tour.id}`} onClick={toggleInfo}>
              Show less
            </button>
          </>
        ) : (
          <>
            {tour.info.slice(0, 200)}...
            <button id={`see-less-${tour.id}`} onClick={toggleInfo}>
              Show more
            </button>
          </>
        )}
      </div>
      <button id={`delete-btn-${tour.id}`} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Tour;
