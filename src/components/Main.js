import { useState, useEffect } from "react";
import styled from "styled-components";

// Components
import Card from "./Card";

function Main({cards}) {
  
  const [currVal1, setCurrVal1] = useState("");
  const [currVal2, setCurrVal2] = useState("");
  const [matchedCards, setMatchedCards] = useState(0);

  // set values of clicked cards and compare them
  const handleCardClick = (cardVal, face, id) => {
    if (currVal1 === "") {
      setCurrVal1(cardVal);
    } else if (currVal2 === "") {
      setCurrVal2(cardVal);
    }
    turnCard(face, id);
    compareCards(id);
  };
  // turn over the card if it's not already turned
  const turnCard = (cardFace, id) => {
    if (!cardFace) {
      let cards = cards.map((card) => {
        if (card.id === id) {
          return { ...card, face: true };
        } else {
          return card;
        }
      });
      // setInitCards(cards);
      // turn card back after 1500ms
      // this.turnCardTimer = setTimeout(() => {
      //   let cards = this.state.initCardsArray.map((card) => {
      //     if (card.id === id) {
      //       return { ...card, face: false };
      //     } else {
      //       return card;
      //     }
      //   });
      //   this.setState({ initCardsArray: cards });
      // }, 1500);
    }
  };
  // if cards values match increase number of matched cards and return the state values back to ""
  const compareCards = (id) => {
    if (currVal1 === currVal2) {
      setMatchedCards((prevCards) => prevCards + 1);
      // clearTimeout(this.turnCardTimer);
    }
    // console.log("compareCards");
    // console.log(this.state.currentVal1);
    // this.setState((prevState) => {
    //   return { ...prevState, currentVal1: "", currentVal2: "" };
    // });
    setCurrVal1("");
    setCurrVal2("");
  };

  

  return (
    <Container>
      {/* ************* CARDS ******* */}
      <div className="card-wrapper">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              value={card.value}
              face={card.face}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: auto;
  margin: auto 0;
  border: 5px solid pink;

  .card-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-between;
    @media (min-width: 768px) {
      width: 30rem;
    }
    width: 95vw;
    height: auto;
    margin: 0 auto;
    border: 1px solid green;
  }
`;
export default Main;
