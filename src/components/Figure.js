import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  fill: transparent;
  stroke: #fff;
  stroke-width: 4px;
  stroke-linecap: round;
  height: 250px;
  width: 200px;
`;
const Game = ({ wrongLetters }) => {
  return (
    <StyledSvg>
      {/* Rod */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* Head */}
      <circle
        cx="140"
        cy="70"
        r="20"
        style={{ display: wrongLetters.length > 0 ? "block" : "none" }}
      />
      {/* Body */}
      <line
        x1="140"
        y1="90"
        x2="140"
        y2="150"
        style={{ display: wrongLetters.length > 1 ? "block" : "none" }}
      />
      {/* Arms */}
      <line
        x1="140"
        y1="120"
        x2="120"
        y2="100"
        style={{ display: wrongLetters.length > 2 ? "block" : "none" }}
      />
      <line
        x1="140"
        y1="120"
        x2="160"
        y2="100"
        style={{ display: wrongLetters.length > 3 ? "block" : "none" }}
      />
      {/* Legs */}
      <line
        x1="140"
        y1="150"
        x2="120"
        y2="180"
        style={{ display: wrongLetters.length > 4 ? "block" : "none" }}
      />
      <line
        x1="140"
        y1="150"
        x2="160"
        y2="180"
        style={{ display: wrongLetters.length > 5 ? "block" : "none" }}
      />
    </StyledSvg>
  );
};

export default Game;
