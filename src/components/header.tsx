import GithubLogo from "./logos/github";
import LinkedInLogo from "./logos/linkedin";
import GitLogo from "./logos/git";

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
    <header className="bg-pink-500 sticky top-24 h-[calc(100vh-12rem)] w-1/2 flex flex-col justify-between">
      <div>
        <h1 className="text-4xl font-bold">Tommy Akonguina</h1>
        <p className="text-xl font-light">Web & mobile developer</p>
        <p className="text-base text-primary">
          Creating seamless, engaging, and accessible web experiences.
        </p>
        <div className="flex space-x-2">
          {logos.map(({ LogoComponent, link }, index) => {
            const Logo = LogoComponent; // Récupération de la référence du composant
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
      <div className="flex">
        <p>This project is open source on Github </p>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform"
        >
          <GitLogo className="text-primary transition-colors hover:text-white" />
        </a>
      </div>
    </header>
  );
}
