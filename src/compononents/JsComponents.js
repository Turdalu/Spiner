import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

const JsComponents = () => {
  return (
    <div>
      <Header>
        <Link to={"react-js"} style={{ textDecoration: "none" }}>
          <span>React JS</span>
        </Link>
        <Link to={"vue-js"} style={{ textDecoration: "none" }}>
          <span>Vue JS</span>
        </Link>
      </Header>
      <Outlet />
    </div>
  );
};

export default JsComponents;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: gold;
  border: 1px solid red;
  border-radius: 10px;
  width: 50%;
  height: 60px;
  margin: 40px;
  margin-left: 470px;
`;
