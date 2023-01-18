import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "../../styles/navigation-button.scss";

export function NavigationButton({ children, ...props }) {
  const navigate = useNavigate();

  return (
    <button {...props} onClick={() => navigate(-1)}>
      <IoArrowBackOutline />
      {children}
    </button>
  );
}
