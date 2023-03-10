import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CatallogPage } from "../../pages/CatallogPage";

import { DemoOne } from "../DemoOne";
import { DemoTwo } from "../DemoTwo";
import { DemoThree } from "../DemoThree";
import { DemoFour } from "../DemoFour";
import { DemoFive } from "../DemoFive";
import { DemoSix } from "../DemoSix";

import { NavigationButton } from "../../Components/NavigationButton";
import main from "../../styles/main.module.scss";

export function Main() {

  return (
      <main className={main.main}>
        <NavigationButton className="navigation-button" type="button">
          <span>Back</span>
        </NavigationButton>
        <Routes>
          <Route path="/" element={<Navigate to="catallog" />} />
          <Route path="catallog" element={<CatallogPage />} />
          <Route path="catallog/demo-1" element={<DemoOne />} />
          <Route path="catallog/demo-2" element={<DemoTwo />} />
          <Route path="catallog/demo-3" element={<DemoThree />} />
          <Route path="catallog/demo-4" element={<DemoFour />} />
          <Route path="catallog/demo-5" element={<DemoFive />} />
          <Route path="catallog/demo-6" element={<DemoSix />} />
        </Routes>
      </main>
  );
}
