import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Farmer({ farmers }) {
  const params = useParams();
  const [farmer, setFarmer] = useState({});

  // Uncomment this code when you're ready for the stretch problems
  useEffect(() => {
    setFarmer(farmers.filter(farmer => farmer.farmer_id === params.id)[0]);
    return () => {};
  }, [params.id, farmers]);

  return <div>{farmer.surname}</div>;
}
