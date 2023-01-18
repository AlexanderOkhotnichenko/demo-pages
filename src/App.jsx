import React from "react";
import { Header } from "./ui/Header";
import { Main } from "./ui/Main";
import { Footer } from "./ui/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
