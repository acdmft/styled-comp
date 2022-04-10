import {useEffect, useState} from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const initCardsArr = [
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
  ];
  const [cards, setCards] = useState();
  useEffect(() => {
    initCardsArr.sort(() => Math.random() - 0.5);
    setCards(initCardsArr);
  }, []);

  return (
    <>
      <Header />
      {cards && <Main cards={cards} />}
    </>
  );
}

export default App;
