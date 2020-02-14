import React from "react";
import { Link } from "react-router-dom";

export default function MovieList({ farmers }) {
  return (
    <div className="movie-list">
      {farmers.map(farmer => (
        <FarmerDetails key={farmer.farmer_id} farmer={farmer} />
      ))}
    </div>
  );
}

function FarmerDetails({ farmer }) {
  return (
    <Link to={`/${farmer.farmer_id}`}>
      <h3>
        {farmer.first_name} {farmer.middle_name} {farmer.surname}
      </h3>
    </Link>
  );
}
