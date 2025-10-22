import React, { useState, useEffect } from "react";
import logo from "../assets/images/conquist-logo.png"; // ajuste o caminho

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) return;

      const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
      const isOutOfHome = window.scrollY > homeBottom - 80;

      if (isOutOfHome && expanded) {
        setCollapsed(true);
        setExpanded(false);
      } else if (!isOutOfHome && !expanded) {
        setCollapsed(false);
        setExpanded(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
    setExpanded(!expanded);
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "Quem Somos", href: "#quem-somos" },
    { name: "Serviços", href: "#servicos" },
    { name: "Clientes", href: "#clientes" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`navbar ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="nav-logo" onClick={toggleNavbar}>
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-links">
        {links.map((link, i) => (
          <li key={i}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
