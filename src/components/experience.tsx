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
    <div>
      <div>Expérience</div>
    </div>
  );
}
