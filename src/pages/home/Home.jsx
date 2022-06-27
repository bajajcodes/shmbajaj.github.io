import { ArrowIcon } from "./icons/RightArrow";
import { Link } from "react-scroll";

function Home() {
  return (
    <section
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
      name="home"
    >
      <section className="max-w-screen-lg h-full mx-auto px-4 flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
        <div className="h-full flex flex-col justify-center items-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-white text-center">
            I'm a Engineer
          </h2>
          <p className="max-w-md p-4 md:px-0 md:py-4 text-gray-400 leading-7">
            I have 1.5 years of experience as process automation developer. Now,
            I am learning javascript and react, and building projects around
            react ecosystem. I enjoy the thought process and concepts it takes
            to build technologies like webpack, react, css, git and of course
            javascript.
          </p>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-white bg-gradient-to-r hover:bg-gradient-to-b from-cyan-500 to-blue-500 duration-200 cursor-pointer"
          >
            <span>Portfolio</span> <ArrowIcon />
          </Link>
        </div>
        <div className="w-1/2 md:w-2/5 mx-auto  mt-24 md:mt-0 h-0 pb-[66.67%] relative bg-cover bg-no-repeat">
          <img
            src="https://avatars.githubusercontent.com/u/29247011?v=4"
            alt="Discussion over how to be 3on3"
            className="w-full h-auto rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            loading="eager"
          />
        </div>
      </section>
    </section>
  );
}

export { Home };
