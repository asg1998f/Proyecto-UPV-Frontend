import React from "react";
import "./Camara.scss";

export const Camara = ({ className }) => {
  return (
    <div className={`camera ${className}`}>
      <span role="img" aria-label="camera">
        📷
      </span>
    </div>
  );
};
