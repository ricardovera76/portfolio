import Main from "../../organisms/Main/Main";
import About from "../../organisms/About/About";
import Experience from "../../organisms/Experience/Experience";
import Work from "../../organisms/Work/Work";
import Contact from "../../organisms/Contact/Contact";
import { navRefs } from "../../organisms/NavBar/navbarTypes";
import classes from "./Body.module.css";
import ProfileImage from "../../../assets/img.jpeg";

interface Props {
  theme: string;
  navRefs: navRefs;
}

const Body = ({ navRefs }: Props) => {
  return (
    <div className={classes.section}>
      <Main />
      <About ref={navRefs.aboutRef} profileImage={ProfileImage} />
      <Experience ref={navRefs.experienceRef} />
      <Work ref={navRefs.workRef} />
      <Contact ref={navRefs.contactRef} />
    </div>
  );
};

export default Body;