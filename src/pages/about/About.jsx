function About() {
  return (
    <section
      name="about"
      className="w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <section className="w-full h-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About 
          </p>
        </div>
        <p className="text-xl mb-10">
          Hello 👋, My name is <strong>Shubham Bajaj</strong>. I believe in being <strong><em>Healthy</em></strong>, <strong><em>Wealthy</em></strong>, and <strong><em>Happy</em></strong>. I am <strong>Software Engineer</strong>, and building applications using <strong>javascript</strong>, <strong>react</strong>, <strong>html</strong> and <strong>css</strong>. I am also working as <strong>Process Automation Engineer</strong>, and automated document transaction processing system. 
        </p>
        <p className="text-xl">
          I'm interested in <strong>simplicity</strong>, <strong>thought process</strong>, and <strong>concepts</strong> it takes to build technologies. I like reading about fundamentals to topics of my interests such as <strong><em>system versus goals</em></strong>, <strong><em>composition for react</em></strong>, <strong><em>math for css</em></strong>, and taking notes (do not why).  
        </p>
      </section>
    </section>
  );
}

export { About };
