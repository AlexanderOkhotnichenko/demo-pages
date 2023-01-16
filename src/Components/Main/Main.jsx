import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { CatallogPage } from "../../pages/CatallogPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ContactPage } from "../../pages/ContactPage";
import { DemoOne } from '../DemoOne';
import { DemoTwo } from '../DemoTwo/DemoTwo';
import main from "./main.module.scss";

export function Main() {
  return (
    <main className={`${main.main} ${main.padding}`}>
      <Routes>
        <Route path="/" element={<Navigate to="catallog" />}/>
        <Route path="catallog" element={<CatallogPage />}/>
        <Route path="catallog/demo-1" element={<DemoOne />}/>
        <Route path="catallog/demo-2" element={<DemoTwo />}/>
        <Route path="contact" element={<ContactPage />}/>
        <Route path="404" element={<NotFoundPage />}/>
        <Route path="*" element={<Navigate to="404" />}/>
      </Routes>
    </main>
  )
}
