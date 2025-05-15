import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ContextParentComponent } from "./components/ContextParentComponent";

function App() {
  return (
    <>
      <h3>ch06.리액트 상태 관리</h3>

      <h4>Context API 실습</h4>
      <ContextParentComponent />

      <h4>Redux 실습</h4>
    </>
  );
}

export default App;
