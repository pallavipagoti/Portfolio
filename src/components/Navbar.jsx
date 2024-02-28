import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:gap-x-16  sm:flex-row  sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Port
          <span className="text-emerald-600">Folio</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            console.log(link);
            const { id, href, text } = link;
            return (
              <a
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                key={id}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
