import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../Rating/Rating";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`;

const AirlineLogo = styled.div`
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;

const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`;

const AirlineLink = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    bored: 1px solid #000;
    text-decoration: none;
    width: 100%;
  }
`;

export default function Airline({ attributes }) {
  return (
    <Card>
      <AirlineLogo>
        <img src={attributes.image_url} alt={attributes.name} />
      </AirlineLogo>
      <AirlineName>{attributes.name}</AirlineName>
      <Rating score={attributes.avg_score} />
      <AirlineLink>
        <Link to={`/airlines/${attributes.slug}`}>View Airline</Link>
      </AirlineLink>
    </Card>
  );
}
