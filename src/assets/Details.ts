export interface Experience {
  company: string;
  title: string;
  tasks: string[];
}

export const SkillList: string[] = [
  "JavaScript (ES6+) ",
  "TypeScript",
  "ReactJS and Next JS",
  "Node.js",
  "Express JS",
  "Git",
  "Redux",
  "CI/CD",
  "NoSQL and SQL Data bases (MongoDB, Firebase, Postgre",
  "Framer Motion",
  "UI/UX Libraries (Material UI,TailwindCSS",
  "Design Patterns (Atomic Design, BEM Design",
];

export interface IDetails {
  title: string;
  text: string[];
}

export const ContactInfo: IDetails = {
  title: "Get In Touch",
  text: [
    "I'm currently open & looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!",
  ],
};

export interface IAboutMe {
  title: string;
  text: string[];
}

export const AboutMe: IDetails = {
  title: "About Me",
  text: [
    `Hello! My name is Ricardo and I am Venezuelan-base Web Developer. I am
  currently working remotely as a freelancer for clients all over the
  world. My interest in web development started back in 2017, when I
  wondered how the internet work and how web pages worked, those questions
  lead me to a Udemy course, since then I love the web development and
  coding in general.`,
    `Fast-forward to today, and I’ve had the privilege of working at a
  start-up, I'm currently working on a freelance projects. I've also made
  the CISCO CCNA, CISCO CyberOPS, LACNIC advanced BGP, LACNIC IPV6 courses
  and LACNIC Network Management courses and certifications.`,
    `I have over one year of experience working with technologies like:`,
  ],
};

export const AllExperience: Experience[] = [
  {
    company: "Waku",
    title: "Web Developer",
    tasks: [
      "Test and develop UI components.",
      "Fixing Bugs in components.",
      "Assisting the web development team with all aspects of website and application design.",
      "Assisting with the testing and maintenance of backend and front-end applications.",
      "Brainstorming new tech applications such as digital storage and mobile technology.",
      "Collaborating with developers to implement new web features.",
      "Keeping up-to-date with the latest technology and programming trends.",
      "Converting video, audio, written, and graphic components into compatible formats for the web.",
      "Using user feedback to identify and correct problems with a client's website.",
    ],
  },
  {
    company: "Fiverr",
    title: "Web Developer",
    tasks: [
      "Test and develop UI components.",
      "Fixing Bugs in components.",
      "Write well-designed, testable, efficient code by using web development best practices",
      "Create basic website layouts and user interfaces with HTML, CSS, JavaScript and JS Frameworks",
      "Integrate data from various back-end web services and databases",
      "Work with stakeholders to gather and refine specifications and requirements based on technical needs",
      "Create and maintain software documentation",
      "Ensure cross-browser compatibility of new features",
      "Be responsible for maintaining, expanding, and scaling our site",
    ],
  },
];
