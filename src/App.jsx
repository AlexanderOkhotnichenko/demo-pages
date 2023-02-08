import React from "react";
import { CustomCursor } from "./Components/CustomCursor";
import { Header } from "./ui/Header";
import { Main } from "./ui/Main"; 
import "./App.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";

function App() {
    return (
    <div className="App">
      <CustomCursor />
      <Header />
      <Main />
    </div>
  );
}

export default App;
