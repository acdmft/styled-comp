import React from "react";
import styled from "styled-components";

class Header extends React.Component {
  render() {
    return (
      <Content>
        <h1>Memory game</h1>
      </Content>
    );
  }
}

const Content = styled.div`
  h1 {
    text-align: center;
  }
`;

export default Header;