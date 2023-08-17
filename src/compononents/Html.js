import React from "react";
import { styled } from "styled-components";

function Html() {
  return (
    <div>
      <DiStyle>IT-DOOR</DiStyle>
    </div>
  );
}

export default Html;

const DiStyle = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 3px;
  background-color: gold;
`;
