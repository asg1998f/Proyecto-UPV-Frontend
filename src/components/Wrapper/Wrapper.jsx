import React from "react";
import "./Wrapper.scss";

export const Wrapper = ({ className, children }) => {
  return <div className={`wrapper ${className}`}>{children}</div>;
};
