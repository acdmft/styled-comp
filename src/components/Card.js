import React from "react";
import styled, { css } from "styled-components";
// images
import buddha from "../images/buddha.jpg";
import coctail from "../images/coctail.jpg";
import redcarp from "../images/red-carp.jpg";
import tree from "../images/tree.jpg";
import whale from "../images/whale.jpg";
import building from "../images/building.jpg";
import stars from "../images/stars.jpg";

function Card({ face, id, value, onClick }) {
  const images = {
    buddha: buddha,
    coctail: coctail,
    redcarp: redcarp,
    tree: tree,
    whale: whale,
    building: building,
  };
  return (
    <Content
      face={face}
      id={id}
      value={value}
      onClick={() => {
        onClick(value, face, id);
      }}
    >
      {face ? (
        <img src={images[value]} alt={value} />
      ) : (
        <img src={stars} alt={"back side"} />
      )}
    </Content>
  );
}

// STYLES

const Content = styled.div`
  width: 4.5rem;
  height: 6rem;
  border: 2px solid black;
  margin: 0.7rem 0.1rem 0 0;
  overflow: hidden;
  background-size: 4.5rem 6rem;
  img {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 375px) {
    width: 5.5rem;
    height: 7.3rem;
    background-size: 5.5rem 7.3rem;
  }
  @media (min-width: 768px) {
    width: 6.7rem;
    height: 9rem;
    background-size: 6.7rem 9rem;
  }
`;

export default Card;
