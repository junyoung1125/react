import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RouterBasicComponent } from "./components/sub1/RouterBasicComponent";

function App() {
  return (
    <>
      <h3>ch05. React Router</h3>

      <h4>Router 기본</h4>
      <BrowserRouter>
        <RouterBasicComponent />
      </BrowserRouter>

      <h4>Router Outlet</h4>

      <h4>Router 데이터 전송</h4>

      <h4>사용자 정의 Router</h4>
    </>
  );
}

export default App;
