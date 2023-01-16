import React from "react";
import { Auth } from "../Components/Contact";
import auth from "../Components/Contact/auth.module.scss";

export function ContactPage() {
  return (
    <section className={auth.auth}>
      <Auth />
    </section>
  );
}
