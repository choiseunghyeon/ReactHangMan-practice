import React from "react";
import styled from "styled-components";

const StyledWord = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  span {
    border-bottom: 3px solid #2980b9;
    display: inline-flex;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    margin: 0 3px;
    height: 50px;
    width: 20px;
  }
`;
const Word = ({ selectedWord, correctLetters }) => {
  return (
    <StyledWord>
      {selectedWord.word.split("").map((letter, i) => (
        <span key={i}>{correctLetters.includes(letter) ? letter : ""}</span>
      ))}
    </StyledWord>
  );
};

export default Word;
