import React from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";


class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
