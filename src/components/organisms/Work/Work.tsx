import React from "react";
import Icons from "../../atoms/Icons/Icons";
import Card from "../../atoms/Card/Card";
import classes from "./Work.module.css";
import Header from "../../atoms/Header/Header";
import Title from "../../atoms/Title/Title";

type Props = {};

const Work = React.forwardRef<HTMLElement>((props: Props, ref) => {
  return (
    <section className={classes.work} ref={ref}>
      <Header>
        <Title content="My Projects" />
      </Header>
      <ul className={classes.work__container}>
        <Card alt={false}>
          <>
            <Header alt={true}>
              <>
                <a
                  href="https://github.com/REXXAR-677/notes-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons type="folder" width="40" />
                </a>
                <a
                  href="https://notesapp-b3jcmzwqq-rexxar-677.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons type="launch" width="25" />
                </a>
              </>
            </Header>
            <Title content="Notes App" size="large" />
            <div className={classes.work__item__description}>
              In this Web-App, you can store and create your notes, the used
              technologies are: React.js, Framer Motion which is used for
              handling the animations, React-Router-Dom to handle page routing,
              CSS Modules, Lottie for Animated Icons, Firebase Auth for
              authentication and Firestore as a NoSQL database.
            </div>
            <div className={classes.work__item__techs}>
              <div className={classes.work__item__techs__item}>React JS</div>
              <div className={classes.work__item__techs__item}>Redux</div>
              <div className={classes.work__item__techs__item}>Firebase</div>
              <div className={classes.work__item__techs__item}>
                Framer Motion
              </div>
              <div className={classes.work__item__techs__item}>
                React-Lottie
              </div>
            </div>
          </>
        </Card>
        <Card alt={false}>
          <>
            <Header alt={true}>
              <>
                <a
                  href="https://github.com/REXXAR-677/Next-meetups-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons type="folder" width="40" />
                </a>

                <a
                  href="https://next-test-2nd-app.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons type="launch" width="25" />
                </a>
              </>
            </Header>
            <Title content="React Meetups" />
            <div className={classes.work__item__description}>
              In this Web-App, people can set and store cool places to meet with
              each other, the technologies used are: Next.js as the main JS
              framework, CSS Modules and MongoDB as NoSQL database.
            </div>
            <div className={classes.work__item__techs}>
              <div className={classes.work__item__techs__item}>Next JS</div>
              <div className={classes.work__item__techs__item}>Mongo DB</div>
              <div className={classes.work__item__techs__item}>CSS Modules</div>
            </div>
          </>
        </Card>
        <Card alt={false}>
          <>
            <Header alt={true}>
              <>
                <a
                  href="https://github.com/REXXAR-677/Hacker-news"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons type="folder" width="40" />
                </a>

                <a
                  href="https://hacker-news-2naksh5og-rexxar-677.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons type="launch" width="25" />
                </a>
              </>
            </Header>
            <Title content="Hacker News"/>
            <div className={classes.work__item__description}>
              In This Web-App you can read, see and save all the news related to
              the main JS Frameworks / Libraries like Angular, React JS and VUE
            </div>
            <div className={classes.work__item__techs}>
              <div className={classes.work__item__techs__item}>React JS</div>
              <div className={classes.work__item__techs__item}>
                React-Router
              </div>
              <div className={classes.work__item__techs__item}>
                React-Lottie
              </div>
            </div>
          </>
        </Card>
      </ul>
    </section>
  );
});

export default Work;
