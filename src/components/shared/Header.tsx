"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "@/src/styles/global.css";

const navLinks = [
  { name: "Início", path: "/" },
  { name: "História", path: "/historia" },
  { name: "Contato", path: "/contato" },
  { name: "Notícias", path: "/noticias" },
  //{ name: "Categorias", path:"/categorias" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-brand-foreground fixed w-full z-20 top-0 start-0 border-b border-default shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="logo.webp"
            className="h-10 border rounded-2xl"
            alt="AEC Morada Nova Logo"
          />
          {/* Troquei text-heading por text-gray-900 aqui para garantir que a logo nunca fique branca */}
          <span className="self-center text-xl text-gray-900 font-semibold whitespace-nowrap">
            A.E.C. MORADA NOVA
          </span>
        </Link>

        {/* Botão Sandwich Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Abrir menu principal</span>
          {isMenuOpen ? (
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Container do Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-solid">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 items-center">
            
            {/* Links simplificados: Apenas troca a cor do texto */}
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li key={link.name} className="w-full md:w-auto text-center">
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-2 px-3 md:p-0 rounded transition-colors duration-200 
                    ${
                      isActive
                        ? "text-brand font-bold" // Se for a página atual: Azul e negrito
                        : "text-gray-800 hover:text-brand" // Se não for: Cinza escuro, fica azul ao passar o mouse
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* Botão de Apoiar */}
            <li className="w-full md:w-auto mt-2 md:mt-0">
              <Link
                href="/apoiar"
                onClick={() => setIsMenuOpen(false)}
                className="bg-brand text-brand-foreground py-2 px-5 rounded-2xl block text-center hover:opacity-90 transition-opacity"
              >
                Apoiar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}