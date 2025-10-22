import React from "react";
import { FaTree } from "react-icons/fa";
import { BsLampFill } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";

function QuemSomos() {
  return (
    <section id="quem-somos" className="sobre">
      <div className="sobre-container">
        <div className="sobre-texto">
          <h2>Quem Somos</h2>
          <p>
            A Conquist Energy é especialista em soluções de energia solar, oferecendo projetos personalizados
            para residências, empresas e indústrias. Atuamos com profissionalismo, inovação e tecnologia de ponta,
            garantindo eficiência energética e sustentabilidade aos nossos clientes.
          </p>

          {/* Missão e Visão */}
          <div className="missao">
            <h3>Nossa Missão</h3>
            <p>
              Ofertar serviços e produtos para soluções em energias renováveis, direcionadas especialmente ao setor fotovoltaico, 
              com foco em qualidade e eficiência, buscando através de nossos princípios de transparência oferecer confiabilidade 
              e segurança para nossos clientes e colaborar para um mundo mais limpo e sustentável energeticamente.
            </p>
          </div>

          <div className="visao">
            <h3>Nossa Visão</h3>
            <p>
              Ser uma empresa de relevância do setor e financeiramente autossuficiente. Mantendo ótima relação com seus clientes e colaboradores, 
              em constante busca de excelência e qualidade nos serviços realizados, apresentando resultados evidentes e reconhecidamente sustentáveis.
            </p>
          </div>

          {/* Cards */}
          <div className="sobre-cards">
            <div className="sobre-card">
              <FaTree className="sobre-icon icon-verde" />
              <h3>Sustentabilidade</h3>
              <p>Promovemos energia limpa, reduzindo impactos ambientais e custos de energia.</p>
            </div>

            <div className="sobre-card">
              <BsLampFill className="sobre-icon icon-laranja" />
              <h3>Inovação</h3>
              <p>Projetos personalizados com tecnologia de ponta para máxima eficiência.</p>
            </div>

            <div className="sobre-card">
              <FaHandshakeSimple className="sobre-icon icon-azul" />
              <h3>Compromisso</h3>
              <p>Atendimento de qualidade, garantindo segurança e satisfação para todos os clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
