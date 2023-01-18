import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "./loading-styles.scss";

export function Loading() {
  return (
    <div className="loading">
      <BallTriangle
        height={180}
        width={180}
        radius={5}
        color="#AECD31"
        ariaLabel="ball-triangle-loading"
        wrapperClass="loading-circle"
        wrapperStyle=""
        visible={true}
      />
      <div className="text-loading">
        Loading
        <div className="loading-points">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
