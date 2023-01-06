import React from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import { LoadApp } from "./Components/LoadApp";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
      <LoadApp />
    </div>
  );
}

export default App;
