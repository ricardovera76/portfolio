import React from "react";
import classes from "./Contact.module.css";

type Props = {};

const Contact = React.forwardRef<HTMLElement>((props: Props, ref) => {
  return (
    <section className={classes.contact} ref={ref}>
      <div className={classes.contact__container}>
        <div className={classes.contact__container__title}>
          <h1>Get In Touch</h1>
        </div>
        <div className={classes.contact__container__text}>
          <p>
            I'm currently open & looking for any new opportunities, my inbox is
            always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </p>
        </div>
        <div className={classes.contact__container__button}>
          <button className={classes.container__button__button}>
            <a href="mailto:ricardovera71@gmail.com">Say Hi!</a>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Contact;
