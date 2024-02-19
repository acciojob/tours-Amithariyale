import React, { useEffect, useState } from "react";
import Tours from "./Tours.js";
import Loading from "./Loading.js";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState(data);

  const handleRefresh = () => {
    setTours([...data]);
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, tours);

  const deleteTour = (tourId) => {
    setTours(tours.filter((tour) => tour.id !== tourId));
  };

    return(
      <main id="main">
        {loading ? (
        <Loading />
      ) : tours.length ? (
        <Tours tours={tours} deleteTour={deleteTour} />
      ) : (
        <div>
          No tours left <button onClick={handleRefresh}>Refresh</button>
        </div>
      )}
      </main>
    )
}
export default App;
