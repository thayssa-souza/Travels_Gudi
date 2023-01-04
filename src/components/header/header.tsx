import React from "react";
import logo from '../imgs/logoHeader.jpg';
import Menu from '../menu/menu';
import './header.css';

const Header = () => (
    <header>
        <section>
            <figure>
                <img src={logo} alt='Logo da Gudi "o bom da vida é viver" escrito em azul com um fundo branco' />
            </figure>
            <span className="menu" id="outer-container">
                <Menu />
                <div className="menuIcon" id="page-wrap"></div>
            </span>
            <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Benefícios</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <button>AGENDAR</button>
        </section>
    </header>
)

export default Header;