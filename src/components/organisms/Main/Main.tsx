import React from "react";
import Greet from "../../molecules/Greet/Greet";
import GoTo from "../../molecules/GoTo/GoTo";
import classes from "./Main.module.css";
const Main = () => {
  const resumeLink =
    "https://drive.google.com/drive/folders/1_WhBQLtjfxniJsLC_S1hhYx8SGOh6uJc?usp=sharing";
  return (
    <section className={classes.main}>
      <div className={classes.content}>
        <Greet />
        <GoTo link={resumeLink}>Download my Resume</GoTo>
      </div>
    </section>
  );
};

export default Main;
