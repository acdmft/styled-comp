import React from "react";
import styled from "styled-components";
import Card from "./Card";

class Main extends React.Component {
  render() {
    return (
      <Container>
        {/* 12 Cards */}
        <div className="card-wrapper">
          <Card image={"building"}/>
          <Card image={"coctail"}/>
          <Card image={"building"}/>
          <Card image={"coctail"}/>
          <Card image={"building"}/>
          <Card image={"coctail"}/>
          <Card image={"building"}/>
          <Card image={"coctail"}/>
          <Card image={"building"}/>
          <Card image={"coctail"}/>
          <Card image={"building"}/>
          <Card image={"coctail"}/>
        </div>
      </Container>
    )
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
    @media(min-width: 768px) {
      width: 30rem;
    }
    width: 95vw;
    height: auto;
    margin: 0 auto;
    border: 1px solid green;
  }
`;
export default Main;