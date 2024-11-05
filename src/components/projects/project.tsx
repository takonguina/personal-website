import Image from "next/image";

type ProjectProps = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  appleStore: string;
};

export default function Project({
  image,
  title,
  description,
  technologies,
  link,
  appleStore,
}: ProjectProps) {
  return (
    <a
      className="group flex py-4 lg:px-4 rounded-md rounded-md lg:hover:shadow-lg transition duration-300 cursor-pointer lg:hover:bg-slate-800/50"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-[30%]">
        <Image src={image} alt="Hercules" width={80} height={80} />
      </div>
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
            <Image
              src="/applestore.png"
              alt="Apple Store"
              width={101}
              height={30}
            />
          )}
        </div>
      </div>
    </a>
  );
}
