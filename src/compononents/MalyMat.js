import React from "react";
import { Link, Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const arr = [
  {
    name: "HTML",
    info: "HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере. Веб-браузеры получают HTML документ от сервера по протоколам HTTP/HTTPS или открывают с локального диска, далее интерпретируют код в интерфейс, который будет отображаться на экране монитора.",
    img: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
    id: "s1",
  },
  {
    name: "CSS",
    info: "CSS (/siːɛsɛs/ англ. Cascading Style Sheets «каскадные таблицы стилей») — формальный язык декорирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.",
    img: "https://cdn.hackr.io/uploads/posts/large/164659516371Dx84m49P.png",
    id: "s2",
  },
  {
    name: "JavaScript",
    info: "JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript (стандарт ECMA-262[9]).",
    img: "https://www.computertechreviews.com/wp-content/uploads/2020/03/What-is-JavaScript-1024x683.jpg",
    id: "s3",
  },
  {
    name: "JAVA",
    id: "s4",
  },
];
function MalyMat() {
  return (
    <>
      <DivStyle>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <H1Stle>HOME</H1Stle>
        </Link>
      </DivStyle>

      <div className="heder">
        {arr.map((el) => (
          <Link to={el.id}>
            <h1>{el.name}</h1>
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default MalyMat;

const DivStyle = styled.div`
  height: 700px;
  width: 20%;
  position: fixed;
  background-color: gray;
  border-radius: 10px;
  margin-left: 30px;
`;
const H1Stle = styled.h1`
  border: 1px solid red;
  width: 130px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: gold;
  margin: auto;
  margin-top: 40px;
  border-radius: 10px;
  &:hover {
    background-color: blue;
    color: azure;
  }
  &:active {
    background-color: green;
  }
`;
