import React from "react";
import styled from "styled-components";

const StyledWrongLetters = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  text-align: right;
  p {
    margin: 0 0 5px;
  }
  span {
    font-size: 24px;
  }
`;
const WrongLetters = ({ wrongLetters }) => {
  return (
    <StyledWrongLetters>
      <div id="wrong-letters">
        {wrongLetters.length > 0 ? <p>Wrong</p> : ""}
        {wrongLetters.map((letter, i) => (
          <span key={i}>{`${letter} `}</span>
        ))}
      </div>
    </StyledWrongLetters>
  );
};

export default WrongLetters;
