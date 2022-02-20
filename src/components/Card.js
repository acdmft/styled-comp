import React from "react";
import styled, {css} from "styled-components";

class Card extends React.Component {
  constructor() {
    super();
    this.state={
      face: false,
    }  
    this.handleClick = this.handleClick.bind(this);
  }
  // turn over the card if it's not already turned and then turn back after 1500ms
  handleClick() {
    if (!this.state.face) {
      this.setState((prevState)=>{
        return {face: true};
      });
    }
    setTimeout(() => {
      this.setState({face: false});
    }, 1500);
  }

  render() {
    return (
      <Content 
        image={this.props.image}
        face={this.state.face}
        onClick={this.handleClick}
      >
      </Content>
    );
  }
}

// STYLES

const Content = styled.div`
  width: 4.5rem;
  height: 6rem;
  background-color: grey;
  border: 2px solid black;
  margin: 0.7rem 0.1rem 0 0;
  /* background-image: url(/images/stars.jpg); */
  /* background-image: url(${({image}) => {return `/images/${image}.jpg`}}); */
  ${(props)=>{
    if (props.face) {
      return css`
        background-image: url(${({image}) => {return `/images/${image}.jpg`}});
      `
    } else {
      return css`
        background-image: url("/images/stars.jpg");
      `
    }
  }}
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