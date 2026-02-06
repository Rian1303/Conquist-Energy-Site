import React from "react";
import Slider from "react-slick";
import "./Clientes.css";

// Logos
import cliente1 from "../assets/images/cliente1.png";
import cliente2 from "../assets/images/cliente2.png";
import cliente3 from "../assets/images/cliente3.png";
import cliente4 from "../assets/images/cliente4.png";
import cliente5 from "../assets/images/cliente5.png";
import cliente6 from "../assets/images/cliente6.png";
import cliente7 from "../assets/images/cliente7.png";
import cliente8 from "../assets/images/cliente8.png";

function Clientes() {
  const clientes = [
    { nome: "MS Serviços", logo: cliente1 },
    { nome: "Grupo 7", logo: cliente2 },
    { nome: "L2M Power Electronics", logo: cliente3 },
    { nome: "3P Energia", logo: cliente4 },
    { nome: "GDSUN", logo: cliente5 },
    { nome: "Quality Serviços Renováveis", logo: cliente6 },
    { nome: "WindCraft", logo: cliente7 },
    { nome: "Helexia", logo: cliente8 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="clientes" className="clientes">
      <div className="clientes-container">
        <h2 className="section-title">Clientes & Parcerias Estratégicas</h2>
        <div className="clientes-cards-grid">
          <div className="clientes-descricao">
            <h3>Nossa Estratégia</h3>
            <p>
              Atuamos em conjunto com empresas parceiras e grandes players do setor energético,
              entregando soluções eficientes em energia solar, geração distribuída e manutenção
              especializada, sempre com foco em qualidade, segurança e resultados.
            </p>
          </div>
          <div className="clientes-descricao2">
          <h3>Nossa Equipe</h3>
            <p>
              Nossa equipe de especialistas está comprometida em fornecer soluções de alta qualidade,
              garantindo eficiência energética e confiabilidade para nossos clientes.
            </p>
          </div>
          <div className="clientes-descricao3">
          <h3>Nossos Clientes</h3>
            <p>
            Atuamos em parceria com empresas de renome no mercado, unindo experiência, qualidade técnica e compromisso com prazos para entregar soluções eficientes. Essa atuação colaborativa garante resultados concretos, alto padrão de execução e total satisfação aos nossos clientes em cada projeto desenvolvido.
            </p>
          </div>
          <div className="clientes-descricao4">
          <h3>Nossos valores e compromissos com nossos clientes</h3>
            <p>
              Na Conquist Energy, valorizamos a transparência e a confiança, sempre buscando soluções eficientes e sustentáveis para nossos clientes.
            </p>
          </div>
        </div>

        <Slider {...settings}>
          {clientes.map((cliente, index) => (
            <div key={index} className="cliente-slide">
              <div className="cliente-card">
                <img
                  src={cliente.logo}
                  alt={cliente.nome}
                  className="cliente-logo"
                />
                <span className="cliente-nome">{cliente.nome}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clientes;
