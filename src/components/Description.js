import React from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  font-size: 18px;
`;
const Description = ({ selectedWord }) => {
  const { type, hangul } = selectedWord;
  return (
    <StyledDescription>
      <div>{type}</div>
      <ul>
        {hangul.map((value, i) => (
          <li key={i}>{value}</li>
        ))}
      </ul>
    </StyledDescription>
  );
};

export default Description;
