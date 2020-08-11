import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import Word from "./components/Word";
import Notification from "./components/Notification";
import WrongLetters from "./components/WrongLetters";
import { showNotification as show } from "./helpers/helpers";
import Popup from "./components/Popup";
import styled from "styled-components";
import Decription from "./components/Description";
import WordSet from "./WordSet";
const StyledGameBlock = styled.div`
  padding: 20px 0px;
  position: relative;
  margin: auto;
  height: 350px;
  width: 450px;
`;

let selectedWord = WordSet[Math.floor(Math.random() * WordSet.length)];

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const playAgain = useCallback(() => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = WordSet[Math.floor(Math.random() * WordSet.length)];
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const { key, keyCode } = e;
      // alphabet a to z
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.word.includes(letter)) {
          //correctLetters 배열에 없으면 저장
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(correctLetters.concat(letter));
          } else {
            show(setShowNotification);
          }
        } else {
          //wrongLetters 배열에 없으면 저장
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters.concat(letter));
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    // clean-up method
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playable, correctLetters, wrongLetters]);
  return (
    <>
      <Header />
      <Decription selectedWord={selectedWord} />
      <StyledGameBlock>
        <Figure wrongLetters={wrongLetters} />
        <Word correctLetters={correctLetters} selectedWord={selectedWord} />
        <WrongLetters wrongLetters={wrongLetters} />
      </StyledGameBlock>
      {showNotification && <Notification />}
      <Popup
        playAgain={playAgain}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
      />
    </>
  );
}

export default App;
