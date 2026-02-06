import React, { useState, useEffect } from "react";
import logo from "../assets/images/conquist-logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Quem somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.classList.add("navbar-mobile-open");
    else document.body.classList.remove("navbar-mobile-open");
    return () => document.body.classList.remove("navbar-mobile-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${menuOpen ? "navbar--menu-open" : ""}`}
      role="banner"
    >
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu} aria-label="Conquist Energy - início">
          <img src={logo} alt="Conquist Energy" />
        </a>

        <nav className="navbar-menu" aria-label="Navegação principal">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={closeMenu}
              className="navbar-menu-link"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href="https://wa.me/5585994060270"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
            aria-label="Solicite seu orçamento via WhatsApp"
          >
            Solicite seu orçamento
          </a>

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
            <span className="navbar-toggle-bar" />
          </button>
        </div>
      </div>

      <div
        id="navbar-mobile-menu"
        className="navbar-mobile-menu"
        aria-hidden={!menuOpen}
      >
        <nav className="navbar-mobile-nav" aria-label="Menu mobile">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={closeMenu}
              className="navbar-mobile-link"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5585994060270"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-mobile-cta"
            onClick={closeMenu}
          >
            Solicite seu orçamento
          </a>
        </nav>
      </div>

      <div
        className="navbar-backdrop"
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />
    </header>
  );
}

export default Navbar;
