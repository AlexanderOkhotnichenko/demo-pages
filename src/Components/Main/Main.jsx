import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import {HomePage} from "../../pages/HomePage";
import { CatallogPage } from "../../pages/CatallogPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { AuthPage } from '../../pages/AuthPage';

import main from "./main.module.scss";

export function Main() {
  return (
    <div className={main.main}>
      <Routes>
        <Route path="/" element={<Navigate to="/catallog" />}/>
        <Route path="/catallog" element={<CatallogPage />}/>
        <Route path="/catallog/demo-1" element={<HomePage />}/>
        <Route path="/auth" element={<AuthPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  )
}
