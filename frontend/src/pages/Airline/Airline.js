import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Airline/Header";
import styled from "styled-components";
import ReviewForm from "../../components/Airline/ReviewForm";
import Review from "../../components/Airline/Review";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: #000;
  }
`;

const Main = styled.div`
  padding-left: 50px;
`;

export default function Airline() {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({
    title: "",
    description: "",
    score: 0,
  });
  const [loaded, setLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function fetchAirline() {
      const url = `http://localhost:3001/api/v1/airlines/${params.slug}`;
      const response = await fetch(url);
      const data = await response.json();
      setAirline(data);
      setLoaded(true);
    }
    fetchAirline();
  }, [params.slug]);

  function handleChange(e) {
    e.preventDefault();
    setReview({ ...review, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const airline_id = airline.data.id;
    const url = `http://localhost:3001/api/v1/reviews`;
    const body = { ...review, airline_id };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const reviewResponse = await response.json();
      const included = [...airline.included, reviewResponse.data];
      setAirline({ ...airline, included });
      // set review back to default
      setReview({ title: "", description: "", score: 0 });
    } catch (error) {
      console.log(error);
    }
  }

  function setRating(score) {
    setReview({ ...review, score });
  }

  let reviews;
  if (loaded && airline.included) {
    reviews = airline.included.map((item, index) => {
      return <Review key={index} attributes={item.attributes} />;
      // return <p>{JSON.stringify(item, null, 4)}</p>;
    });
  }

  return (
    <Wrapper>
      {loaded ? (
        <>
          <Column>
            <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              {reviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </>
      ) : null}
    </Wrapper>
  );
}
