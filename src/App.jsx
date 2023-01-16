import React from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { Footer } from "./Components/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
