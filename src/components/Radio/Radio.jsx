import React from "react";
import "./Radio.scss";

export const Radio = ({ text, className }) => {
  return (
    <div className={`radio-group ${className}`}>
      <input type="radio" id={text} name="radio-group" />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};
