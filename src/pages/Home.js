import React from "react";
import heroImage from '../assets/images/hero-workers.jpg';


function Home() {
  const whatsappLink = "https://wa.me/5585992029902";

  return (
    <main>
      <section 
        id="home"
        className="hero" 
        style={{ backgroundImage: `url(${heroImage})` }}
        role="banner"
        aria-label="Seção inicial - Conquist Energy"
      >
        <div className="hero-overlay"></div>



        {/* Conteúdo central */}
        <div className="hero-content">
          <h1>Sua independência energética começa aqui</h1>
          <p>
            Liberte-se das contas altas de energia e embarque em uma jornada
            rumo à autonomia energética. Com nossas soluções solares inovadoras,
            sua residência ou empresa pode começar hoje mesmo a economizar e
            construir um amanhã mais verde.
          </p>

          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Solicite seu orçamento via WhatsApp"
          >
            <button className="btn-primary">Comece Sua Transformação Solar</button>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
