import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/conquist-logo.png";
import "./Footer.css";

function Footer() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Quem somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contato", href: "#contato" },
  ];

  const social = [
    { icon: FaWhatsapp, href: "https://wa.me/5585994060270", label: "WhatsApp" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/conquistenergy", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/conquistenergy", label: "Instagram" },
    { icon: FaEnvelope, href: "mailto:comercial@conquistenergy.com.br", label: "E-mail" },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#home" className="footer-logo" aria-label="Conquist Energy - início">
            <img src={logo} alt="Conquist Energy" />
          </a>
          <p className="footer-tagline">
            Sua independência energética começa aqui.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contato</h4>
          <address className="footer-address">
            <a href="mailto:comercial@conquistenergy.com.br">comercial@conquistenergy.com.br</a>
            <a href="tel:+5585994060270">(85) 9 9406-0270</a>
            <span>Av. Santos Dumont, 6740 - Cocó, Fortaleza - CE, 60192-022</span>
          </address>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Redes sociais</h4>
          <div className="footer-social" role="list">
            {social.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={item.label}
              >
                <item.icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Links</h4>
          <ul className="footer-links">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Conquist Energy. Todos os direitos reservados.
        </p>
        <p className="footer-credit">
          Desenvolvido por <a href="https://github.com/rianpluma" target="_blank" rel="noopener noreferrer">Rian Pluma</a> — Full Stack
        </p>
      </div>
    </footer>
  );
}

export default Footer;
