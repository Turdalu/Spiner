import React from "react";
import { styled } from "styled-components";

function Img() {
  return (
    <div>
      <ImgStyle
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"
        alt=""
      />
    </div>
  );
}

export default Img;

const ImgStyle = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 50px;
`;
