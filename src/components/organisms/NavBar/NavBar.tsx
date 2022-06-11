import { motion, AnimatePresence } from "framer-motion";
import {INavRefProps} from "./navbarTypes"
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Icon from "../../atoms/IconLogo/IconLogo";
import classes from "./NavBar.module.css";


const NavBar = ({ width, theme, navRefs, scrollIntoView }: INavRefProps) => {
  const ctx = useContext(ThemeContext);
  const [show, setShow] = useState<boolean>(false);
  const logoHeight = 35;
  const logoWidth = 30;

  const showNavBarBackground = () => {
    window.scrollY > 5 ? setShow(true) : setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", showNavBarBackground);
    return () => {
      window.removeEventListener("scroll", showNavBarBackground);
    };
  }, [show]);

  const themeHandler = (): void => {
    ctx.toggleDark && ctx.toggleDark();
  };

  return (
    <nav className={`${classes.navbar} ${show ? classes.navbar__down : ""}`}>
      <section className={classes.navbar__content}>
        <div className={classes.content__left}>
          <Icon theme={theme} height={logoHeight} width={logoWidth} onClick={() => {window.location.reload()}}/>
        </div>
        <motion.div className={classes.content__right}>
          <AnimatePresence>
            {width > 780 && (
              <motion.div
                className={classes.content__right__content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span onClick={() => scrollIntoView(navRefs.aboutRef)}>
                  About Me
                </span>
                <span onClick={() => scrollIntoView(navRefs.experienceRef)}>
                  Experience
                </span>
                <span onClick={() => scrollIntoView(navRefs.workRef)}>Work</span>
                <span onClick={() => scrollIntoView(navRefs.contactRef)}>
                  Contact
                </span>
                <button onClick={themeHandler}>{ctx.dark ? "🌙" : "🌞"}</button>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {width < 780 && (
              <motion.div
                className={classes.content__right__content}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button>=</button>
                <button onClick={themeHandler}>{ctx.dark ? "🌙" : "🌞"}</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </nav>
  );
};

export default NavBar;
