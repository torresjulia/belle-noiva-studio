"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/5519999999999?text=${encodeURIComponent(
    "Olá! Vim pelo site e gostaria de agendar uma consulta para noiva!",
  )}`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-offwhite shadow-md py-4" : "bg-offwhite/95 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-primary">
              Belle Noiva Studio
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#inicio"
              className="text-textDark hover:text-accent transition-colors"
            >
              Início
            </Link>
            <Link
              href="#servicos"
              className="text-textDark hover:text-accent transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#galeria"
              className="text-textDark hover:text-accent transition-colors"
            >
              Galeria
            </Link>
            <Link
              href="#depoimentos"
              className="text-textDark hover:text-accent transition-colors"
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="text-textDark hover:text-accent transition-colors"
            >
              Contato
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition-all shadow-md hover:shadow-lg"
            >
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-textDark focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="block text-textDark hover:text-accent transition-colors py-2"
            >
              Início
            </Link>
            <Link
              href="#servicos"
              onClick={() => setIsOpen(false)}
              className="block text-textDark hover:text-accent transition-colors py-2"
            >
              Serviços
            </Link>
            <Link
              href="#galeria"
              onClick={() => setIsOpen(false)}
              className="block text-textDark hover:text-accent transition-colors py-2"
            >
              Galeria
            </Link>
            <Link
              href="#depoimentos"
              onClick={() => setIsOpen(false)}
              className="block text-textDark hover:text-accent transition-colors py-2"
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="block text-textDark hover:text-accent transition-colors py-2"
            >
              Contato
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary text-white px-6 py-2 rounded-full hover:bg-accent transition-all text-center"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
