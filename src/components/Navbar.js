import React from "react";
import logo from "../assets/images/conquist-logo.png"; // ajuste o caminho
import "./Navbar.css";

function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Quem somos?", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Clientes", href: "#clientes" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Conquist Energy" />
        </div>

        {/* Menu central */}
        <nav className="navbar-menu">
          {links.map((link, i) => (
            <a key={i} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar-cta">
          <a
            href="https://wa.me/5585994060270"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Solicite seu orçamento via WhatsApp"
          >
            Solicite seu orçamento
          </a>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
