import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import FarmersList from "./components/FarmersList";
import Farmer from "./components/Farmer";

function App() {
  const [farmers, setFarmers] = useState([]);
  const [farmersOnDisplay, setFarmersOnDisplay] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://theagromall.com/api/v2/get-sample-farmers")
      .then(response => {
        setFarmers(response.data.data.farmers);
      })
      .catch(error => {
        console.log(error.response);
      });
    return () => {};
  }, []);

  useEffect(() => {
    setFarmersOnDisplay(
      farmers.slice((currentPage - 1) * 20, currentPage * 20)
    );
  }, [currentPage, farmers]);

  const gotoNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const gotoPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <Router>
      <div style={{textAlign: "center"}}>
        <h1>Farmers List</h1>
        {farmersOnDisplay.length === 0 && <p>Loading...</p>}
        <Route exact path="/">
          <FarmersList farmers={farmersOnDisplay} />
          {currentPage > 1 && farmersOnDisplay.length !== 0 && (
            <button onClick={gotoPrevious}>Previous</button>
          )}
          {farmersOnDisplay.length !== 0 && (
            <button onClick={gotoNext}>Next</button>
          )}
        </Route>
        <Route exact path="/:id">
          <Farmer farmers={farmers} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
