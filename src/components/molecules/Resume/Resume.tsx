import React from "react";
import classes from "./Resume.module.css";

type Props = {};

const Resume = (props: Props) => {
  return (
    <div className={classes.resume}>
      <a
        href="../../../assets/Ricardo Vera Resume - DEV.pdf"
        download="Ricardo Vera Resume.pdf"
      >
        <button>Download my Resume</button>
      </a>
    </div>
  );
};

export default Resume;
