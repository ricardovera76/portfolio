import React from "react";
import classes from "./ListItem.module.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ListItem = ({ children }: Props) => {
  return <li className={classes.item}>{children}</li>;
};

export default ListItem;
