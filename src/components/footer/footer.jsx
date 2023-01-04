import React from "react";
import './footer.css';
import logo from '../imgs/logoHeader.jpg';

export default function Footer(){
    return(
        <footer>
            <section class="columns">
                <figure class="logoFooter">
                    <img src={logo} alt='Logo da Gudi "o bom da vida é viver" escrito em azul com um fundo branco' />
                </figure>
                <h4>Sobre nós</h4>
                <h4>Mural de memórias</h4>
                <h4>Eventos Gudi</h4>
                <h4>Nosso blog</h4>
            </section>
            <section class="columns">
                <h3>Contato</h3>
                <h4>Chat Virtual</h4>
                <h4>SAC Online</h4>
                <h4>Ouvidoria</h4>
                <h4>FAQ</h4>
            </section>
            <section class="columns">
                <h3>Benefícios</h3>
                <h4>Conta digital Gudi</h4>
                <h4>Viaje com Milhas</h4>
                <h4>C6 Átomos</h4>
                <h4>ID Jovem</h4>
            </section>
            <section class="columns">
                <h3>Lugares</h3>
                <h4>O melhor do Brasil</h4>
                <h4>Cidades frequentes</h4>
                <h4>Pontos turísticos</h4>
                <h4>Restaurantes</h4>
            </section>
            <section class="columns">
                <h3>Curiosidades</h3>
                <h4>Cultura e tradições</h4>
                <h4>Pratos típicos</h4>
                <h4>Mitos brasileiros</h4>
                <h4>Carnaval</h4>
            </section>
        </footer>
    )
}