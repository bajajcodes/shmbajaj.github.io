import { portfolio as projects } from "./portfolio.data";

function Portfolio() {
  return (
    <section
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <section className="w-full h-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-6">Check out my projects.</p>
        </div>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] auto-rows-[1fr] gap-8">
          {projects.map(
            ({ id, imageUrl, title, projectUrl, codeUrl, description }) => (
              <article
                key={id}
                className="px-1 py-2 pb-4 grid shadow-md shadow-gray-400 duration-500 rounded-lg "
              >
                <div
                  className="w-full h-52 rounded-md bg-cover bg-[center_center] bg-no-repeat scale-95 duration-500 hover:scale-100"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <div className="px-2 grid">
                  <h2 className="text-xl text-center sm:text-2xl font-bold">
                    {title}
                  </h2>
                  <p className="mb-2">{description}</p>
                  <div className="flex justify-center items-center gap-2">
                    <div className="px-4 py-2 button-outset rounded-md border-white cursor-pointer text-white text-center font-medium bg-gradient-to-r hover:bg-gradient-to-b from-cyan-500 to-blue-500]">
                      <a
                        role={"button"}
                        href={projectUrl}
                        target={"_blank"}
                      >
                        View Project
                      </a>
                    </div>
                    <div className="px-4 py-2 button-outset rounded-md border-white cursor-pointer text-white text-center font-medium bg-gradient-to-r hover:bg-gradient-to-b from-cyan-500 to-blue-500">
                      <a
                        role={"button"}
                        href={codeUrl}
                        target={"_blank"}
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            )
          )}
        </section>
      </section>
    </section>
  );
}

export { Portfolio };
