import React from "react";
import Slider from "react-slick";
import "./Serviços.css";

// Importando imagens
import projeto1 from "../assets/images/projeto1.png";
import projeto2 from "../assets/images/projeto2.jpg";
import projeto3 from "../assets/images/projeto3.jpg";

function Servicos() {
  const projetos = [
    {
      img: projeto1,
      titulo: "Complexo Eólico do Alto Sertão",
      descricao: "Execução de serviços de Operação e Manutenção no Complexo Eólico do Alto Sertão em Caitete, Bahia, para nossa empresa parceira Ms Servicos"
    },
    {
    img: projeto2,
    titulo: "Usina Solar de Geração Distribuída",
    descricao: "Projeto de usina solar em solo no município de Horizonte, voltado à geração distribuída para consumo energético e investimento com retorno financeiro."
    },
    {
      img: projeto3,
      titulo: "Projeto residencial em Horizonte",
      descricao: "Instalação de sistema fotovoltaico residencial, aumentando eficiência energética e gerando economia para o cliente."
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section id="servicos" className="services">
      <h2 className="section-title">Serviços & Projetos</h2>
      <Slider {...settings}>
        {projetos.map((projeto, index) => (
          <div key={index} className="service-card">
                    <img
                      src={projeto.img}
                      alt={projeto.titulo}
                      className="service-img"
                    />
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Servicos;
