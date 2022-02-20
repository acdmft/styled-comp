import React from "react";
import styled from "styled-components";
import Card from "./Card";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      initCardsArray: [],
    };
    this.renderCards = this.renderCards.bind(this);
  }
  // Function that puts cards on the page
  renderCards() {
    return this.state.initCardsArray.map((card) => {
      return (
        <Card
          image={card.value}
          key={card.id}
        />
      );
    })
  }

  componentDidMount() {
    let cards = [
      { id: 1, value: "building" },
      { id: 2, value: "coctail" },
      { id: 3, value: "coffe" },
      { id: 4, value: "leaves" },
      { id: 5, value: "tree" },
      { id: 6, value: "whale" },
      { id: 7, value: "building" },
      { id: 8, value: "coctail" },
      { id: 9, value: "coffe" },
      { id: 10, value: "leaves" },
      { id: 11, value: "tree" },
      { id: 12, value: "whale" },
    ];
    cards.sort(() => Math.random() - 0.5);
    this.setState({initCardsArray: cards});
  }

  render() {
    return (
      <Container>
        {/* 12 Cards */}
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
