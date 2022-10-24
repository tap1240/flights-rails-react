import React, { useEffect, useState } from "react";
import Airline from "../../components/Airline/Airline";
import { Grid, Header, Home, SubHeader } from "./AirlinesStyles";
import Rating from "../../components/Rating/Rating";

export default function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    const fetchAirlines = async () => {
      const response = await fetch("http://localhost:3001/api/v1/airlines");
      const data = await response.json();
      setAirlines(data.data);
    };
    fetchAirlines();
  }, []);

  const grid = airlines.map((item) => {
    return <Airline key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <Home>
      <Header>
        <h1>Airlines Home</h1>
        <SubHeader>OpenFlights Bb</SubHeader>
      </Header>
      <Grid>{grid}</Grid>
    </Home>
  );
}
