type ExperienceProps = {
  title: string;
  company: string;
  time: string;
  description: string;
  technologies: string[];
  link: string;
};

export default function Experience({
  title,
  company,
  time,
  description,
  technologies,
  link,
}: ExperienceProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="group lg:flex lg:justify-between py-4 lg:px-4 rounded-md hover:shadow-lg transition duration-300 cursor-pointer hover:bg-slate-800/50 cursor-pointe">
        <span className="w-[30%] text-slate-500 text-sm">{time}</span>
        <div className="w-full flex flex-col">
          <span className="group-hover:text-[var(--green)] transition duration-300 text-lg">
            {title} - {company}
          </span>
          <p className="text-sm text-slate-500 mt-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((technology, index) => (
              <span
                key={index}
                className="text-xs rounded-full bg-teal-400/10 text-[var(--green)] px-3 py-1 rounded"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
