import {useEffect, useState} from "react";
import styled from "styled-components";
import Main from "./components/Main";
import Header from "./components/Header";


function App() {
  const initCardsArr = [
    { id: 1, value: "building", face: false },
    { id: 2, value: "coctail", face: false },
    { id: 3, value: "redcarp", face: false },
    { id: 4, value: "buddha", face: false },
    { id: 5, value: "tree", face: false },
    { id: 6, value: "whale", face: false },
    { id: 7, value: "building", face: false },
    { id: 8, value: "coctail", face: false },
    { id: 9, value: "buddha", face: false },
    { id: 10, value: "redcarp", face: false },
    { id: 11, value: "tree", face: false },
    { id: 12, value: "whale", face: false },
  ];
  const [cards, setCards] = useState();
  useEffect(() => {
    initCardsArr.sort(() => Math.random() - 0.5);
    setCards(initCardsArr);
  }, []);

  return (
    <>
      <Header />
      {cards && <Main cards={cards} setCards={setCards} />}
    </>
  );
}

export default App;
