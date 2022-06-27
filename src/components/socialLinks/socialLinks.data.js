import { GithubIcon, LinkedinIcon, PersonaIcon, TwitterIcon } from "./icons";

const links = [
  {
    id: "github",
    text: "github",
    href: "https://github.com/shmbajaj",
    child: (
      <>
        Github <GithubIcon />
      </>
    ),
  },
  {
    id: "linkedin",
    text: "linkedin",
    href: "https://www.linkedin.com/in/shmbajaj",
    child: (
      <>
        Linkedin <LinkedinIcon />
      </>
    ),
  },
  {
    id: "resume",
    text: "resume",
    href: "https://raw.githubusercontent.com/shmbajaj/files-hosted/master/Resume_Shubham_Bajaj.pdf",
    child: (
      <>
        Resume <PersonaIcon />
      </>
    ),
  },
  {
    id: "twitter",
    text: "twitter",
    href: "https://twitter.com/shmbajaj",
    child: (
      <>
        Twitter <TwitterIcon />
      </>
    ),
  },
];

export { links };
