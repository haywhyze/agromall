import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Farmer({ farmers }) {
  const params = useParams();
  const history = useHistory();
  const [farmer, setFarmer] = useState({});

  // Uncomment this code when you're ready for the stretch problems
  useEffect(() => {
    setFarmer(farmers.filter(farmer => farmer.farmer_id === params.id)[0]);
    return () => {};
  }, [params.id, farmers]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      {farmer && farmer.farmer_id && (
        <div className="card">
          <h1>
            {farmer.first_name} {farmer.middle_name} {farmer.surname}
          </h1>
          <img
            src={
              "https://s3-eu-west-1.amazonaws.com/agromall-storage/" +
              farmer.passport_photo
            }
            alt={`${farmer.first_name} ${farmer.middle_name} ${farmer.surname}`}
          />
          <br />
          <button onClick={goBack}>Back</button>
        </div>
      )}
    </>
  );
}
