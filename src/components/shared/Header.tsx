import "@/src/styles/global.css";

export function Header() {
  return (
    <nav className="bg-brand-foreground fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="logo.webp"
            className="h-10 border rounded-2xl"
            alt="AEC Morada Nova Logo"
          />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            A.E.C. MORADA NOVA
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-solid"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-solid"
          aria-expanded="false"
        >
          <span className="sr-only">Abrir menu principal</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-solid">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-secondary-soft">
            <li>
              <a
                href="#"
                className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 md:relative md:after:content-[''] md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:w-full md:after:h-[2px] md:after:bg-brand md:after:scale-x-100 md:after:transition-transform md:after:duration-300 md:after:origin-left"
                aria-current="page"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:relative md:after:content-[''] md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:w-full md:after:h-[2px] md:after:bg-brand md:after:scale-x-0 md:hover:after:scale-x-100 md:after:transition-transform md:after:duration-300 md:after:origin-left"
              >
                História
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:relative md:after:content-[''] md:after:absolute md:after:-bottom-1 md:after:left-0 md:after:w-full md:after:h-[2px] md:after:bg-brand md:after:scale-x-0 md:hover:after:scale-x-100 md:after:transition-transform md:after:duration-300 md:after:origin-left"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-brand text-brand-foreground p-2 rounded-2xl"
                
              >
                Apoiar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
