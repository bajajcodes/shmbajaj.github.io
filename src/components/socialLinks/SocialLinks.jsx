import { links } from "./socialLinks.data";

function SocialLinks() {
  return (
    <aside className="hidden fixed top-[35%] left-0 lg:flex lg:flex-col">
      <ul>
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="w-40 h-14 px-4 ml-[-100px] font-semibold hover:ml-[-10px] flex justify-between items-center duration-200 bg-gray-400 hover:rounded-md"
          >
            <a
              href={href}
              className="w-full flex justify-between items-center"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export { SocialLinks };
