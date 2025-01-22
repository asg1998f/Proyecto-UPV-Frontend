import React from "react";
import "./CheckboxPredeterminado.scss";

export const CheckboxPredeterminado = ({ className }) => {
  return <input type="checkbox" className={`checkbox-default ${className}`} />;
};
