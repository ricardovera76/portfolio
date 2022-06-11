import React from "react";
import Image from "../../atoms/Image/Image";
import Info from "../../molecules/Info/Info";
import Skills from "../../molecules/Skills/Skills";
import classes from "./About.module.css";

type Props = {
  profileImage: string;
};

const About = React.forwardRef<HTMLElement, Props>(
  ({ profileImage }: Props, ref) => {
    return (
      <section ref={ref} className={classes.about}>
        <div className={classes.info}>
          <Info />
          <Skills />
        </div>
        <div className={classes.pic}>
          <Image image={profileImage} />
        </div>
      </section>
    );
  }
);

export default About;
