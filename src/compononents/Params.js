import React from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { arr } from "./MalyMat";

const Params = () => {
  const param = useParams();
  console.log(param);

  const findPhone = arr.find((el) => el.id === param.param);

  return (
    <Wrapper>
      <name>{findPhone.name}</name>
      <info>{findPhone.info}</info>
      <img src={findPhone.img} />
    </Wrapper>
  );
};

export default Params;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 2px;
  width: 40%;
  height: 30%;
  margin: 80px auto;
  border-radius: 20px;
  padding: 0px 30px;
  & img {
    width: 20rem;
  }
`;
