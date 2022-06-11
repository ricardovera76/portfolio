export interface Experience {
  company: string;
  title: string;
  tasks: string[];
}

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
