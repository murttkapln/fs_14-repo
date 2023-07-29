import React from "react";
import { useLocation } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailPart,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";

const Detail = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <DetailContainer>
      <DetailPart>
        <DetailTitle>{state.volumeInfo.title}</DetailTitle>
        <DetailImg>
          <img
            src={state.volumeInfo?.imageLinks?.smallThumbnail || defaultImg}
            alt=""
          />
        </DetailImg>
        <Description>{state.volumeInfo.description}</Description>
        <InfoPart>
          <p>{state.volumeInfo.authors.join(" - ")}</p>
          <p>
            {state.volumeInfo.publishedDate} / {state.volumeInfo?.publisher}
          </p>
        </InfoPart>
      </DetailPart>
    </DetailContainer>
  );
};

export default Detail;