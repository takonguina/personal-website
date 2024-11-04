import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  appleStore: string;
};

export default function Project({
  title,
  description,
  technologies,
  link,
  appleStore,
}: ProjectProps) {
  return (
    <div className="group flex py-4 lg:px-4 rounded-md">
      <div className="w-[30%]">Image</div>
      <div className="w-full">
        <span className="group-hover:text-[var(--green)] transition duration-300 text-lg">
          {title}
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
        <div className="flex justify-end cursor-pointer">
          {appleStore && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src="/applestore.png"
                alt="Apple Store"
                width={101}
                height={30}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
