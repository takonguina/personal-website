import Description from "./description";
import Experience from "./experience";

export default function Feed() {
  const experiences = [
    {
      title: "Full-stack developer",
      company: "Reworld Media",
      time: "2020 - Present",
      description:
        "Developing mobile apps with React Native and Expo, building web applications with React, and creating APIs with Node.js and Express.",
      technologies: ["React", "React Native", "Expo", "Node.js", "Express"],
      link: "",
    },
  ];
  return (
    <div className="lg:my-24 flex-1">
      <Description />
      <div className="flex flex-col gap-8">
        {experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </div>
  );
}
