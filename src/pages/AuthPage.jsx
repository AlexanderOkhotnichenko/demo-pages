import React from "react";
import { Auth } from "../Components/Auth";
import auth from "../Components/Auth/auth.module.scss";

export function AuthPage() {
  return (
    <section className={auth.auth}>
      <Auth />
    </section>
  );
}
