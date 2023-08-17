import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Html from "./Html";

const Heder = () => {
  return (
    <div>
      <DivStyle>
        <Html />
        <Link to="react">
          <ButStyle>Registr</ButStyle>
        </Link>
      </DivStyle>
      <Outlet />
    </div>
  );
};

export default Heder;

const DivStyle = styled.div`
  border: 1px solid red;
  width: 800px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  margin-top: 20px;
  background-color: aquamarine;
`;

const ButStyle = styled.button`
  border: 1px solid red;
  width: 100px;
  height: 50px;
  border-radius: 8px;
  background-color: gold;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
  &:active {
    background-color: blue;
  }
`;
