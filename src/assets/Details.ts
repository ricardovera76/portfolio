export interface Experience {
  company: string;
  title: string;
  tasks: string[];
}

export interface IProjectsList {
  repo: string;
  live: string;
  title: string;
  description: string;
  techs: string[];
}

export const ResumeLink: string = "https://drive.google.com/file/d/1-GhvCfggA6kMEgD6ERLx7aqfAhRhqXI-/view?usp=sharing"

export const ProjectsList: IProjectsList[] = [
  {
    repo: "https://github.com/conext-noc/dashboard.git",
    live: "http://conext.net.ve",
    title: "CONEXT. Dashboard",
    description: `This Web-App is used inthe CONEXT Venezuela Facilities as a GUI for Network operations and system monitoring, the technologies used are: Next.js as the main TS
      framework, CSS Modules, REST API's, Husky, EsLint, Prettier, Atomic Design`,
    techs: ["Next JS", "TypeScript", "CSS Modules"],
  },
  {
    repo: "https://github.com/ricardovera76/notes-app.git",
    live: "https://notesapp-rv.vercel.app",
    title: "Notes App",
    description: `In this Web-App, you can store and create your notes, the used
    technologies are: React.js, Framer Motion which is used for
    handling the animations, React-Router-Dom to handle page routing,
    CSS Modules, Lottie for Animated Icons, Firebase Auth for
    authentication and Firestore as a NoSQL database.`,
    techs: ["React JS", "Redux", "Firebase", "Framer Motion", "React-Lottie"],
  },
  {
    repo: "https://github.com/ricardovera76/Hacker-news.git",
    live: "https://hacker-news-rv.vercel.app",
    title: "Hacker News",
    description: `In This Web-App you can read, see and save all the news related to
      the main JS Frameworks / Libraries like Angular, React JS and VUE.`,
    techs: ["React JS", "React-Router", "React-Lottie"],
  },
  {
    repo: "https://github.com/ricardovera76/portfolio.git",
    live: "https://ricardo-vera-portfolio.vercel.app",
    title: "Ricardo Vera Portfolio",
    description: `In This Web-App you can checkout my portfolio, and also other projects I've worked on in the past years`,
    techs: ["React JS", "TypeScript", "Framer-Motion"],
  },
  {
    repo: "https://github.com/ricardovera76/Next-meetups-app.git",
    live: "https://react-meetups-rv.vercel.app",
    title: "React Meetups",
    description: `In this Web-App, people can set and store cool places to meet with
      each other, the technologies used are: Next.js as the main JS
      framework, CSS Modules and MongoDB as NoSQL database.`,
    techs: ["Next JS", "Mongo DB", "CSS Modules"],
  },
];

export const SkillList: string[] = [
  "JavaScript (ES6+) ",
  "TypeScript",
  "ReactJS and Next JS",
  "Node.js",
  "Express JS",
  "Python",
  "Django",
  "DRF",
  "AWS",
  "DOCKER",
  "Micro Services",
  "CCNA & CCNP & CyberSecurity",
  "NetOps & DevOps",
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
  text: string[] | string;
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
  lead me to a Udemy course, since then I love the web and software development and
  coding in general.`,
    `Fast-forward to today, and I’ve had the privilege of working at a
  start-up, I'm currently working on a freelance projects. I've also made
  the CISCO CCNA, CISCO CyberOPS, LACNIC advanced BGP, LACNIC IPV6 courses
  and LACNIC Network Management courses and certifications.`,
    `I have over 3 years of experience working with technologies like:`,
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
  {
    company: "CONEXT",
    title: "Network Automation, NetOps, DevOps and Software Developer",
    tasks: [
      "Monitor, manage and maintain all edge network devices, performance, and quality across networks.",
      "Development of multiple Python SSH scripts to automate company’s proccess and automate network operations.",
      "Document and distribute all major incident review reports in the agreed format.",
      "Development of backend service with microservices architecture using Django,AWS,Docker and prometheus.",
      "Local Server Administration and Configuration.",
      "Domain Administration and configuration.",
     "Development of Web apps for company’s events and Administration.",
      "Document Server and Apps Configuration, Code and Cloud administration.",
      "Administration of Cloud infrastructure (AWS).",
    ],
  },
];
