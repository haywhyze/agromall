import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FarmersList({ farmers }) {
  return (
    <StyledContainer>
      {farmers.map(farmer => (
        <FarmerDetails key={farmer.farmer_id} farmer={farmer} />
      ))}
    </StyledContainer>
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

const StyledContainer = styled.div`
  /* background: red; */
  text-align: center;
  a {
      color: #40a31c;
      text-decoration: none;
  }
  h3 {

  }
`;
