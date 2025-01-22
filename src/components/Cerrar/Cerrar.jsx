import React from "react";
import "./Cerrar.scss";

export const Cerrar = ({ className }) => {
  return (
    <div className={`close ${className}`}>
      <span role="img" aria-label="close">
        ❌
      </span>
    </div>
  );
};
