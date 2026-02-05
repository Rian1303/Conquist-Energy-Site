import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Serviços";
import Clientes from "./pages/Clientes";
import Contato from "./pages/Contato";

import "./App.css";
import "./components/Navbar.css";
import "./components/Footer.css";
import "./pages/Home.css";
import "./pages/QuemSomos.css";
import "./pages/Serviços.css";
import "./pages/Clientes.css";
import "./pages/Contato.css";


function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <QuemSomos />
        <Servicos />
        <Clientes />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App;
