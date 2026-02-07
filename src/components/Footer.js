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

        {/* COLUNA 1 — LOGO */}
        <div className="footer-brand">
          <a href="#home" className="footer-logo" aria-label="Conquist Energy - início">
            <img src={logo} alt="Conquist Energy" />
          </a>

          <p className="footer-tagline">
            Sua independência energética começa aqui.
          </p>
        </div>

        {/* COLUNA 2 — CONTATO + MAPA + REDES */}
        <div className="footer-col footer-contact">
          <h4 className="footer-title">Contato</h4>

          <address className="footer-address">
            <a href="mailto:comercial@conquistenergy.com.br">
              comercial@conquistenergy.com.br
            </a>

            <a href="tel:+5585994060270">
              (85) 9 9406-0270
            </a>

            <span>
              Av. Santos Dumont, 6740 - Cocó, Fortaleza - CE, 60192-022
            </span>
          </address>

          {/* MAPA */}
          <div className="footer-map">
            <iframe
              title="Localização Conquist Energy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.109275700648!2d-38.475517025627155!3d-3.744710196229191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c746306d91ef4f%3A0x4af9fa3d40141d9f!2sAv.%20Santos%20Dumont%2C%206740%20-%20Coc%C3%B3%2C%20Fortaleza%20-%20CE%2C%2060192-022!5e1!3m2!1spt-BR!2sbr!4v1770425610533!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* BOTÃO ROTAS */}
          <a
            className="footer-map-btn"
            href="https://www.google.com/maps/dir/?api=1&destination=Av+Santos+Dumont+6740+Fortaleza+CE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver rotas no Google Maps
          </a>

          {/* REDES SOCIAIS */}
          <div className="footer-contact-social">
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
        </div>

        {/* COLUNA 3 — LINKS */}
        <div className="footer-col footer-links-col">
          <h4 className="footer-title">Navegação</h4>

          <ul className="footer-links">
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* BARRA FINAL */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Conquist Energy. Todos os direitos reservados.
        </p>

        <p className="footer-credit">
          Desenvolvido por{" "}
          <a href="https://github.com/rianpluma" target="_blank" rel="noopener noreferrer">
            Rian Pluma
          </a>{" "}
          — Full Stack
        </p>
      </div>
    </footer>
  );
}

export default Footer;
