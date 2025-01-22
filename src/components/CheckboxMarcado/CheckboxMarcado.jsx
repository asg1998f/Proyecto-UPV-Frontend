import React from "react";
import "./CheckboxMarcado.scss";

export const CheckboxMarcado = ({ className }) => {
  return (
    <input
      type="checkbox"
      className={`checkbox-checked ${className}`}
      defaultChecked
    />
  );
};
