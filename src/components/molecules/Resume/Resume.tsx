import Button from "../../atoms/Button/Button";
import classes from "./Resume.module.css";

type Props = {};

const Resume = (props: Props) => {
  return (
    <div className={classes.resume}>
      <Button type="download">
        <a
          href="https://drive.google.com/drive/folders/1_WhBQLtjfxniJsLC_S1hhYx8SGOh6uJc?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={classes.resume__link}
        >

          Download my Resume
        </a>
      </Button>
    </div>
  );
};

export default Resume;
