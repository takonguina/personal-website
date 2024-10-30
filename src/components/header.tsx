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
    <header className="sticky top-24 h-[calc(100vh-12rem)] w-1/2 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold">Tommy Akonguina</h1>
        <p className="text-xl font-light">Web & mobile developer</p>
        <p className="text-base text-primary">
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
        <div className="flex transition-colors text-primary hover:text-white">
          <p className="mr-2">This project is open source on Github</p>
          <GithubLogo className="text-current" />
        </div>
      </a>
    </header>
  );
}
