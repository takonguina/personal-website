import Project from "./project";

export default function Projects() {
  const projects = [
    {
      image: "/hercules.png",
      title: "Build your fitness program with Hercules",
      description:
        "Transform your training with Hercules, the ultimate app for creating personalized workout plans and tracking your performance accurately and efficiently. Designed for fitness enthusiasts and serious athletes, Hercules is based on three key performance cycles: mechanical stress, metabolic stress, and overtraining.",
      technologies: ["React Native", "Expo"],
      link: "https://apps.apple.com/us/app/hercules/id6505121058?uo=2",
      appleStore: "1",
    },
    {
      image: "/veni.svg",
      title: "Organize your event with Veni",
      description:
        "Create your event in seconds and preserve your memories forever! Easily share your event link with your loved ones and relive those memorable moments together, wherever you are.",
      technologies: ["React", "Cloudinary", "Twilio"],
      link: "https://veni-app.com/",
      appleStore: "",
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
