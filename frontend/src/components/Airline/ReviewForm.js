import React, { Fragment } from "react";
import styled from "styled-components";

const Stars = {
  Gray: encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'><path fill='#e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/></svg>`
  ),
  Hover: encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'><path fill='#d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/></svg>`
  ),
  Selected: encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'><path fill='#fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/></svg>`
  ),
};

const Wrapper = styled.div`
  background: #000;
  padding: 20px;
  height: 100vh
  padding-top: 100px;
`;

const Field = styled.div`
  border-radius: 4px;

  input {
    width: 93%;
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e3e3e3;
    margin: 0 0 12px 0;
    padding: 12px;
  }

  textarea {
    min-height: 80px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #e3e3e3;
    margin: 12px 0;
    padding: 12px;
  }
`;

const SubmitButton = styled.button`
  color: #fff;
  background: #333;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 12px;
  transition: ease-in-out 0.1s;

  &:hover {
    color: #000;
    background: #fff;
    border: 1px solid #fff;
  }
`;

const HeadLine = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
`;

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #efefef;
  background: #fff;
`;

const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  margin-top: 20px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Stars.Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 60%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Stars.Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Stars.Hover}");
  }
`;

const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

export default function ReviewForm(props) {
  const { handleSubmit, handleChange, setRating, review, attributes } = props;

  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type="radio"
          value={review.score}
          name="rating"
          onChange={() => {}}
          checked={score === review.score}
          id={`rating-${score}`}
        />
        <label
          onClick={() => setRating(score)}
          htmlFor={`rating-${score}`}
        ></label>
      </Fragment>
    );
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <HeadLine>
          Have an experience with {attributes.name}? Share your review!
        </HeadLine>
        <Field>
          <input
            value={review.title}
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Review Title"
          />
        </Field>
        <Field>
          <input
            value={review.description}
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Review Description"
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingBox>{ratingOptions}</RatingBox>
            <RatingTitle>Rate This Airline</RatingTitle>
          </RatingContainer>
        </Field>
        <SubmitButton type="submit">Submit Your Review</SubmitButton>
      </form>
    </Wrapper>
  );
}
