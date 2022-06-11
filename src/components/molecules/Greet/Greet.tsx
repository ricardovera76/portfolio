import React from "react";
import classes from "./Greet.module.css";

const Greet = () => {
  return (
    <>
      <p className={classes.greet}>Hi!, mi name is</p>
      <h1 className={classes.brief}>Ricardo Vera.</h1>
      <h1 className={classes["brief--alt"]}>I Build things for the web.</h1>
      <p className={classes.brief__info}>
        I'm a Front-End (and occasionally Back-End) Web Developer and a fresh
        graduate electronic engineer.
      </p>
    </>
  );
};

export default Greet;
