import React from "react";
import styled from "styled-components";

const StyledNotification = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px 10px 0 0;
  padding: 15px 20px;
  position: absolute;
  bottom: 0px;

  p {
    margin: 0;
  }
`;
const Notification = () => {
  return (
    <StyledNotification>
      <p>You have already entered this letter</p>
    </StyledNotification>
  );
};

export default Notification;
