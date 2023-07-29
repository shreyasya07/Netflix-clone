import React from "react";
import CardSlider from "./CardSlider";

export default React.memo(function Slider({ movies }) {
  const getMoviesFromrange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromrange(0, 10)} />
      <CardSlider title="New Releases" data={getMoviesFromrange(10, 20)} />
      <CardSlider
        title="Blockbuster Movies"
        data={getMoviesFromrange(20, 30)}
      />
      <CardSlider
        title="Popular on Netflix"
        data={getMoviesFromrange(30, 40)}
      />
      <CardSlider title="Action Movies" data={getMoviesFromrange(40, 50)} />
      <CardSlider title="Epics" data={getMoviesFromrange(50, 60)} />
    </div>
  );
});
