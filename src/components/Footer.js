import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h4>Contato</h4>
          <p>Email: comercial@conquistenergy.com.br</p>
          <p>Tel: (85) 9 9406 - 0270</p>
          <p>Endereço: Av. Santos Dumont, 6740 - Cocó, Fortaleza - CE, 60192-022</p>
        </div>
        <div className="footer-col">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="https://wa.me/5585994060270" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/company/conquistenergy" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/conquistenergy" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:comercial@conquistenergy.com.br"><FaEnvelope /></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#clientes">Clientes</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-credit">
  </div>
      <div className="footer-bottom">
        <p>© 2026 Conquist Energy. Todos os direitos reservados. - Desenvolvido por Rian Pluma Dev. Full Stack.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
