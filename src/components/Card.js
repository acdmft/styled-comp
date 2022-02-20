import React from "react";
import styled, {css} from "styled-components";

class Card extends React.Component { 
  render() {
    return (
      <Content 
        face={this.props.face}
        value={this.props.value}
        onClick={this.props.onClick}
      >
      </Content>
    );
  }
}

// STYLES

const Content = styled.div`
  width: 4.5rem;
  height: 6rem;
  border: 2px solid black;
  margin: 0.7rem 0.1rem 0 0;
  ${(props)=>{
    if (props.face) {
      return css`
        background-image: url(${({value}) => {return `/images/${value}.jpg`}});
      `
    } else {
      return css`
        background-image: url("/images/stars.jpg");
      `
    }
  }}
  background-color: grey;
  background-size: 4.5rem 6rem;
  @media(min-width: 375px) {
    width: 5.5rem;
    height: 7.3rem;
    background-size: 5.5rem 7.3rem;
  }
  @media(min-width: 768px) {
    width: 6.7rem;
    height: 9rem;
    background-size: 6.7rem 9rem;
  }
  
`;

export default Card;