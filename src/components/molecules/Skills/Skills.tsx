import React from "react";
import ListItem from "../../atoms/ListItem/ListItem";
import classes from "./Skills.module.css";

type Props = {
  skillList: string[];
};

const Skills = ({ skillList }: Props) => {
  return (
    <div className={classes.skill}>
      <ul className={classes.skill__list}>
        {skillList.map((skill, index) => (
          <ListItem key={index}>{skill}</ListItem>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
