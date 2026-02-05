import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Contato.css";

function Contato() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [mensagem, setMensagem] = useState("");

  const whatsappNumber = "5585994060270";

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `
Olá, me chamo ${nome}.
Empresa: ${empresa}

Mensagem:
${mensagem}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="contato">
      <div className="contato-container">

        <div className="contato-header">
          <h2 className="section-title">Vamos conversar?</h2>
          <p>
            Entre em contato com a Conquist Energy e descubra como podemos
            desenvolver soluções energéticas em conjunto com sua empresa.
          </p>
        </div>

        <form className="contato-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Empresa (opcional)"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />

          <textarea
            placeholder="Conte brevemente sobre sua necessidade"
            rows="4"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />

          <button type="submit" className="btn-cta">
            <FaWhatsapp /> Falar no WhatsApp
          </button>
        </form>

        <div className="contato-redes">
          <a href="https://www.linkedin.com/company/conquist-energy/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/conquistenergy2" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:comercial@conquistenergy.com.br">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contato;
