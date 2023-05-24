import React from "react";
import Greet from "../../molecules/Greet/Greet";
import GoTo from "../../molecules/GoTo/GoTo";
import classes from "./Main.module.css";
import {ResumeLink} from "../../../assets/Details"
const Main = () => {
  const resumeLink = ResumeLink;
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
