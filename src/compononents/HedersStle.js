import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function HedersStle() {
  return (
    <DivStylee>
      <Link>
        <button>GO BACK</button>
      </Link>
    </DivStylee>
  );
}

export default HedersStle;

const DivStylee = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 500px;
`;
