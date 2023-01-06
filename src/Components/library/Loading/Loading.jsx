import React from "react";
import { Circles } from "react-loader-spinner";
import "./loading-styles.scss";

export function Loading() {
  return (
    <div className="loading">
      <Circles
        height="200"
        width="200"
        color="#4fc3f7"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass="loading-circle"
        visible={true}
      />
    </div>
  );
}
