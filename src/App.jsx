import { Header, SocialLinks } from "components";
import { Home, About, Portfolio, Technologies, Contact } from "pages";

function App() {
  return (
    <>
      <Header />
      <main className="grid bg-black">
        <Home />
        <About />
        <Portfolio />
        <Technologies />
        <Contact />
        <SocialLinks />
      </main>
    </>
  );
}
export { App };
