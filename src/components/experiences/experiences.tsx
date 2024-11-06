import Experience from "./experience";

export default function Experiences() {
  const experiences = [
    {
      title: "Full-stack developer",
      company: "Reworld Media",
      time: "2021 - 2023",
      description:
        "Developed, coordinated, and managed internal web solutions for various media outlets, including Melty, Grazia, Closer, and AuFéminin.com. Extracted data from external APIs such as Taboola, Outbrain, Facebook, and Twitter. Created a web application with a dashboard using Vue.js, wrote technical documentation, and trained users. Collaborated in an agile environment with regular sprints for rapid feature development and iteration.",
      technologies: ["JavaScript", "Vue.JS", "Python", "PostgreSQL"],
      link: "https://www.reworldmedia.com/activites",
    },
    {
      title: "Web Developer",
      company: "Simertel",
      time: "2019 - 2021",
      description:
        "Assisted in the development of a RESTful API for a Big Data platform aimed at managing and maintaining the GRDF gas network. Contributed to the design of a RESTful API for Big Data data management using FastAPI. Developed user interfaces and integrated various functionalities. Monitored technological trends and tools. Authored technical documentation.",
      technologies: ["Python", "FastAPI", "JavaScript", "React"],
      link: "https://www.simertel.com/",
    },
  ];

  return (
    <div className="flex flex-col max-lg:gap-12 gap-8">
      {experiences.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </div>
  );
}
