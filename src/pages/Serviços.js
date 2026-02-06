import React from "react";
import Slider from "react-slick";
import "./Serviços.css";

// Importando imagens
import projeto1 from "../assets/images/projeto1.png";
import projeto2 from "../assets/images/projeto2.jpg";
import projeto3 from "../assets/images/projeto3.jpg";
import ufvCaatinga from "../assets/images/usinas/ufv_caatinga_2.png";
import jmacedo from "../assets/images/jmacedo.jpg"

function Servicos() {
  const servicosConquist = [
    {
      titulo: "Execução de projetos de geração solar",
      descricao: "Desenvolvimento e execução completa de projetos de geração de energia solar, do planejamento à entrega."
    },
    {
      titulo: "Operação e manutenção em parques solares e eólicos",
      descricao: "Serviços especializados de O&M em parques solares e eólicos, garantindo disponibilidade e performance."
    },
    {
      titulo: "Supressão de vegetação em parques solares",
      descricao: "Gestão e execução de supressão de vegetação em áreas de parques solares, com segurança e conformidade."
    },
    {
      titulo: "Obras de infraestrutura energética",
      descricao: "Execução de obras de infraestrutura energética e demais serviços do setor de energia renovável."
    },
    {
      titulo: "Obras de infraestrutura e construção civil",
      descricao: "Execução de obras de contrução civil, focado em execução e infraestrutura completa."
    }
  ];

  const projetos = [
    {
      img: projeto1,
      titulo: "Complexo Eólico do Alto Sertão",
      descricao: "Execução de serviços de Operação e Manutenção no Complexo Eólico do Alto Sertão em Caitete, Bahia, para nossa empresa parceira Ms Servicos"
    },
    {
    img: projeto2,
    titulo: "Usina Solar de Investimento com Retorno Financeiro",
    descricao: "Projeto de usina solar em solo no município de Horizonte, voltado à geração distribuída para consumo energético e investimento com retorno financeiro."
    },
    {
      img: projeto3,
      titulo: "Projeto residencial em Horizonte",
      descricao: "Instalação de sistema fotovoltaico residencial, aumentando eficiência energética e gerando economia para o cliente."
    },
    {
      img: ufvCaatinga,
      titulo: "UFV Caatinga I e II — Helexia",
      descricao: "Montagem, supressão de vegetação e serviços operacionais nas usinas fotovoltaicas Caatinga I e II, em parceria com a 3P Energia."
    },
    {img: jmacedo,
      titulo: "Complexo industrial da J. Macedo em Horizonte",
      descricao: "Execução de serviços de construção civil no complexo industrial da J. Macedo, localizado em Horizonte–CE, envolvendo atividades estruturais e de apoio à infraestrutura industrial do empreendimento."
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

      <div className="servicos-conquist">
        <h3 className="servicos-conquist-titulo">O que a Conquist oferece</h3>
        <p className="servicos-conquist-intro">
          Atuamos em diversas frentes do setor de energia renovável, com foco em solar e eólico:
        </p>
        <ul className="servicos-lista">
          {servicosConquist.map((item, index) => (
            <li key={index} className="servico-item">
              <span className="servico-item-titulo">{item.titulo}</span>
              <span className="servico-item-descricao">{item.descricao}</span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="projetos-titulo">Alguns de nossos projetos</h3>
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
