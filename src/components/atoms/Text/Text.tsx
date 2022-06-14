import React from "react";
import classes from "./Text.module.css";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  isAlt?: boolean
};

const Text = ({ children, isAlt = false }: Props) => {
  return <p className={isAlt ? classes["text--alt"] : classes.text}>{children}</p>;
};

export default Text;
