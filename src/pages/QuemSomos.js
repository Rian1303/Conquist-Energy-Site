import React from "react";
import { FaTree } from "react-icons/fa";
import { BsLampFill } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
import "./QuemSomos.css";

const VALUE_CARDS = [
  {
    id: "sustentabilidade",
    Icon: FaTree,
    iconClass: "icon-verde",
    title: "Energia Sustentável",
    description:
      "Soluções em energia solar que reduzem impactos ambientais e geram economia real a longo prazo.",
  },
  {
    id: "inovacao",
    Icon: BsLampFill,
    iconClass: "icon-laranja",
    title: "Tecnologia e Inovação",
    description:
      "Projetos sob medida com tecnologia de ponta, focados em eficiência, desempenho e durabilidade.",
  },
  {
    id: "compromisso",
    Icon: FaHandshakeSimple,
    iconClass: "icon-azul",
    title: "Compromisso com o Cliente",
    description:
      "Atendimento próximo, transparente e seguro em todas as etapas do projeto.",
  },
];

const TIMELINE_ITEMS = [
  {
    year: "2022",
    label: "Início da Conquist Energy",
    text:
      "Nasce com o propósito de democratizar o acesso à energia solar com projetos sob medida.",
  },
  {
    year: "2023",
    label: "Expansão e novas parcerias",
    text:
      "Portfólio ampliado para atender residências, comércios e o setor industrial e energético, com novas parcerias e oportunidades.",
  },
  {
    year: "Hoje",
    label: "Entrada em novos setores",
    text:
      "Atuação ampliada para construção civil e infraestrutura, abrindo novas possibilidades de crescimento.",
  },
];

function QuemSomos() {
  return (
    <section
      id="quem-somos"
      className="sobre"
      aria-labelledby="quem-somos-title"
      aria-label="Seção Quem Somos"
    >
      <div className="sobre-container">
        {/* HERO */}
        <header className="sobre-hero">
          <div className="sobre-hero-texto">
            <span className="sobre-pill">Energia solar que transforma</span>
            <h2 id="quem-somos-title" className="sobre-title">
              Muito além de{" "}
              <span className="sobre-title-highlight">
                instalar placas solares
              </span>
            </h2>
            <p className="sobre-intro">
              A Conquist Energy é especialista em soluções completas de energia
              solar. Cuidamos de todas as etapas do projeto — do estudo de
              viabilidade à instalação e acompanhamento — para que você tenha
              economia, segurança e previsibilidade na sua conta de energia.
            </p>

            <div className="sobre-stats" aria-label="Principais resultados">
              <div className="sobre-stat">
                <strong>+{">"} 50</strong>
                <span>projetos entregues</span>
              </div>
              <div className="sobre-stat">
                <strong>+1,0 MW</strong>
                <span>de energia gerada/instalada</span>
              </div>
              <div className="sobre-stat">
                <strong>95%</strong>
                <span>dos clientes indicam a Conquist Energy</span>
              </div>
            </div>
          </div>

          <div className="sobre-hero-painel" aria-hidden="true">
            <div className="sobre-hero-card">
              <p className="sobre-hero-label">Economia média</p>
              <p className="sobre-hero-valor">até 90%</p>
              <p className="sobre-hero-legenda">
                na conta de energia com projetos fotovoltaicos bem dimensionados.
              </p>
            </div>
            <div className="sobre-hero-grid">
              <div className="sobre-hero-badge">
                Engenharia especializada
              </div>
              <div className="sobre-hero-badge sobre-hero-badge-outline">
                Monitoramento e pós-venda
              </div>
            </div>
          </div>
        </header>

        {/* MISSÃO / VISÃO */}
        <div
          className="sobre-missao-visao"
          role="region"
          aria-label="Missão e Visão"
        >
          <article className="sobre-bloco missao" aria-labelledby="missao-title">
            <h3 id="missao-title">Nossa missão</h3>
            <p>
              Ofertar serviços e produtos em energias renováveis, com foco no
              setor fotovoltaico, unindo qualidade, transparência e eficiência.
              Queremos gerar confiança, segurança e contribuir para um futuro
              energeticamente mais limpo e sustentável.
            </p>
          </article>

          <article className="sobre-bloco visao" aria-labelledby="visao-title">
            <h3 id="visao-title">Nossa visão</h3>
            <p>
              Ser referência em energia solar, financeiramente sólida e
              reconhecida pela relação próxima com clientes e colaboradores.
              Buscamos excelência em cada projeto, entregando resultados
              consistentes e sustentáveis a longo prazo.
            </p>
          </article>
        </div>

        {/* LINHA DO TEMPO */}
        <section className="sobre-timeline" aria-label="Nossa trajetória">
          <h3 className="sobre-subtitle">Nossa trajetória</h3>
          <div className="sobre-timeline-list">
            {TIMELINE_ITEMS.map((item) => (
              <div key={item.year} className="sobre-timeline-item">
                <div className="sobre-timeline-meta">
                  <span className="sobre-timeline-year">{item.year}</span>
                  <span className="sobre-timeline-label">{item.label}</span>
                </div>
                <p className="sobre-timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VALORES */}
        <section className="sobre-valores" aria-label="Nossos valores">
          <h3 className="sobre-subtitle">O que nos guia no dia a dia</h3>
          <div className="sobre-cards" role="list">
            {VALUE_CARDS.map(({ id, Icon, iconClass, title, description }) => (
              <div key={id} className="sobre-card" role="listitem">
                <Icon className={`sobre-icon ${iconClass}`} aria-hidden />
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="sobre-cta" aria-label="Chamada para ação">
          <h3>Faça parte dessa trajetória sustentável</h3>
          <p>
            Tenha mais economia energética com projetos solares eficientes,
            seguros e sob medida para sua necessidade.
          </p>
          <a
            href="https://wa.me/5585994060270"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a Conquist Energy no WhatsApp
          </a>
        </section>
      </div>
    </section>
  );
}

export default QuemSomos;
