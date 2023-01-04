import React from "react";
import logo from '../imgs/logoHeader.jpg';
import Menu from '../menu/menu';
import './header.css';

export default function Header(){
    return(
        <header>
            <section>
                <figure>
                    <img src={logo} alt='Logo da Gudi "o bom da vida é viver" escrito em azul com um fundo branco' />
                </figure>
                <span class="menu" id="outer-container">
                    <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <div class="menuIcon" id="page-wrap"></div>
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
}