import Project from "./project";

export default function Projects() {
  const projects = [
    {
      title: "Hercules",
      description: "Description 1",
      technologies: ["React Native", "Expo"],
      link: "https://apps.apple.com/us/app/hercules/id6505121058?uo=2",
      appleStore: "1",
    },
  ];

  return (
    <div className="flex flex-col gap-8 mt-8">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
