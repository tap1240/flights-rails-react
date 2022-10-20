import React, { useState, useEffect } from "react";

export default function Airlines() {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    const fetchAirlines = async () => {
      const response = await fetch("http://localhost:3001/api/v1/airlines");
      // console.log(response);
      const data = await response.json();
      setAirlines(data);
    };
    fetchAirlines();
  }, []);

  return (
    <div>
      <h1>Airlines Home</h1>
      <p>{JSON.stringify(airlines, null, 4)}</p>
    </div>
  );
}
