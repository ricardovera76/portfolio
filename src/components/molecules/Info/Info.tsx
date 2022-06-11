import React from "react";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";
import classes from "./Info.module.css";

type Props = {};

const Info = (props: Props) => {
  return (
    <>
      <Header>
        <Title content="About Me"/>
      </Header>
      <p className={classes.text}>
        Hello! My name is Ricardo and I am Venezuelan-base Web Developer. I am
        currently working remotely as a freelancer for clients all over the
        world. My interest in web development started back in 2017, when I
        wondered how the internet work and how web pages worked, those questions
        lead me to a Udemy course, since then I love the web development and
        coding in general.
      </p>
      <p className={classes.text}>
        Fast-forward to today, and I’ve had the privilege of working at a
        start-up, I'm currently working on a freelance projects. I've also made
        the CISCO CCNA, CISCO CyberOPS, LACNIC advanced BGP, LACNIC IPV6 courses
        and LACNIC Network Management courses and certifications
      </p>
      <p className={classes.text}>
        I have over one year of experience working with technologies like:
      </p>
    </>
  );
};

export default Info;
