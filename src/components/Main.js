import React from "react";
import styled from "styled-components";
import Card from "./Card";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      initCardsArray: [
        { id: 1, value: "building", face: true },
        { id: 2, value: "coctail", face: true },
        { id: 3, value: "red-carp", face: true },
        { id: 4, value: "buddha", face: true },
        { id: 5, value: "tree", face: true },
        { id: 6, value: "whale", face: true },
        { id: 7, value: "building", face: true },
        { id: 8, value: "coctail", face: true },
        { id: 9, value: "buddha", face: true },
        { id: 10, value: "red-carp", face: true },
        { id: 11, value: "tree", face: true },
        { id: 12, value: "whale", face: true },
      ],
      currentVal1: "",
      currentVal2: "",
      matchedCards: 0,
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.compareCards = this.compareCards.bind(this);
    this.turnCard = this.turnCard.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }
  // set values of clicked cards and compare them
  handleCardClick(cardVal, face, id) {
    if (this.state.currentVal1 === "") {
      this.setState({ currentVal1: cardVal})
    } else if (this.state.currentVal2 === "") {
      this.setState({ currentVal2: cardVal });
    }
    this.turnCard(face, id);
    this.compareCards(id);
  }
  // turn over the card if it's not already turned
  turnCard(cardFace, id) {
    if (!cardFace) {
      let cards = this.state.initCardsArray.map((card) => {
        if (card.id === id) {
          return { ...card, face: true };
        } else {
          return card;
        }
      });
      this.setState({ initCardsArray: cards });
      // turn card back after 1500ms
      this.turnCardTimer = setTimeout(() => {
        let cards = this.state.initCardsArray.map((card) => {
          if (card.id === id) {
            return { ...card, face: false };
          } else {
            return card;
          }
        });
        this.setState({ initCardsArray: cards });
      }, 1500);
    }
  }
  // if cards values match increase number of matched cards and return the state values back to ""
  compareCards(id) {
    if (this.state.currentVal1 === this.state.currentVal2) {
      this.setState((prevState) => {
        return { matchedCards: prevState.matchedCards + 1 };
      });
      clearTimeout(this.turnCardTimer);
    }
    console.log('compareCards');
    console.log(this.state.currentVal1);
    this.setState((prevState) => {
      return { ...prevState, currentVal1: "", currentVal2: "" };
    });
  }

  renderCards() {
    return this.state.initCardsArray.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          value={card.value}
          face={card.face}
          onClick={this.handleCardClick}
        />
      );
    });
  }
  // Set the array of cards before render them
  componentDidMount() {

    this.state.initCardsArray.sort(() => Math.random() - 0.5);
  }

  render() {
    return (
      <Container>
        {/* ************* CARDS ******* */}
        <div className="card-wrapper">
          {this.renderCards()}
        </div>
      </Container>
    );
  }
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
