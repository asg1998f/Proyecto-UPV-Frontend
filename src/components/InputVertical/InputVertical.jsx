import React from "react";
import "./InputVertical.scss";

export const InputVertical = ({ text, text2, className }) => {
  return (
    <div className={`vertical-form-item-input ${className}`}>
      <label className="label">{text}</label>
      <input className="input" placeholder={text2 || ""} />
    </div>
  );
};
