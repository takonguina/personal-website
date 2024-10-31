import GithubLogo from "./logos/github";
import LinkedInLogo from "./logos/linkedin";

const logos = [
  {
    LogoComponent: GithubLogo,
    link: "https://github.com/takonguina",
  },
  {
    LogoComponent: LinkedInLogo,
    link: "https://www.linkedin.com/in/tommy-akonguina/",
  },
];

export default function Header() {
  return (
    <header className="lg:sticky top-24 lg:h-[calc(100vh-12rem)] h-auto w-full lg:w-1/2 flex flex-col justify-between my-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">Tommy Akonguina</h1>
        <p className="text-lg md:text-xl font-light">Web & mobile developer</p>
        <p className="text-base text-primary w-64">
          Creating seamless, engaging, and accessible web experiences.
        </p>
        <div className="flex space-x-2">
          {logos.map(({ LogoComponent, link }, index) => {
            const Logo = LogoComponent;
            return (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform"
              >
                <Logo className="text-primary transition-colors hover:text-white" />
              </a>
            );
          })}
        </div>
      </div>
      <a
        href="https://github.com/takonguina/personal-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex transition-colors text-primary hover:text-white hidden lg:flex">
          <p className="mr-2">This project is open source on Github</p>
          <GithubLogo className="text-current" />
        </div>
      </a>
    </header>
  );
}
