import React from "react";
import { Route, Routes } from "react-router-dom";
import Heder from "./Heder";
import Input from "./Input";
import Img from "./Img";
import MalyMat from "./MalyMat";
import Params from "./Params";
import HedersStle from "./HedersStle";
import JsComponents from "./JsComponents";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Heder />}>
          <Route path="" element={<Img />} />
          <Route path="react" element={<Input />} />
        </Route>
        <Route path="react/input" element={<MalyMat />}>
          <Route path=":param" element={<Params />}/>
          <Route path="s4" element={<JsComponents/>}>
              <Route path="react-js" element={<h1>REACT JS</h1>}/>
              <Route path="vue-js" element={<h1>VUE JS</h1>}/>
          </Route>
        </Route>
          <Route path="" element={<HedersStle/>}/>
      </Routes>
    </div>
  );
};
export default MainRouter;

