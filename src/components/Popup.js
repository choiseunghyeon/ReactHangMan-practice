import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";
import styled, { css } from "styled-components";

const StyledPopUpContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.finalMessage === ""
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `};
`;

const StyledPopUp = styled.div`
  background: #2980b9;
  border-radius: 5px;
  box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  button {
    cursor: pointer;
    background-color: #fff;
    color: #2980b9;
    border: 0;
    margin-top: 20px;
    padding: 12px 20px;
    font-size: 16px;
    &:active {
      transform: scale(0.98);
    }
    &:focus {
      outline: 0;
    }
  }
`;
const Popup = ({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) => {
  let playable = true;
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let status = checkWin(correctLetters, wrongLetters, selectedWord.word);
  if (status === "win") {
    finalMessage = "축하드립니다. 이겼습니다!😃";
    playable = false;
  } else if (status === "lose") {
    finalMessage = "졌습니다. 😕";
    finalMessageRevealWord = `단어는 ${selectedWord.word}(이)였습니다`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });
  return (
    <StyledPopUpContainer finalMessage={finalMessage}>
      <StyledPopUp>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </StyledPopUp>
    </StyledPopUpContainer>
  );
};

export default Popup;
