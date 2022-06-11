import React from "react";
import classes from "./Skills.module.css";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className={classes.skill}>
      <ul className={classes.skill__list}>
        <li>JavaScript (ES6+) </li>
        <li>TypeScript</li>
        <li>ReactJS and Next JS</li>
        <li>Node.js</li>
        <li>Express JS</li>
        <li>Git</li>
        <li>Redux</li>
        <li>CI/CD</li>
        <li>NoSQL and SQL Data bases (MongoDB, Firebase, Postgre)</li>
        <li>Framer Motion</li>
        <li>UI/UX Libraries (Material UI,TailwindCSS</li>
        <li>Design Patterns (Atomic Design, BEM Design)</li>
      </ul>
    </div>
  );
};

export default Skills;
