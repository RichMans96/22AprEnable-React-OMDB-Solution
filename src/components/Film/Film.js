import React from 'react';

const Film = ({ title, plot, actors }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{plot}</h4>
      <p>{actors}</p>
    </div>
  );
};

export default Film;
