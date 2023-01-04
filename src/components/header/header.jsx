import React from "react";
import logo from '../imgs/logoHeader.jpg';
import headerStyle from './header.css';

export default function Header(){
    return(
        <header>
            <section>
                <figure>
                    <img src={logo} alt='Logo da Gudi "o bom da vida é viver" escrito em azul com um fundo branco' />
                </figure>
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