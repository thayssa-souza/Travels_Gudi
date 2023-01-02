import React from "react";
import mainStyle from '../main/main.css';
import MajorPic from '../imgs/majorImage.png';
import firstPhoto from '../imgs/firstMainPhoto.png';
import secondPhoto from '../imgs/secondMainPhoto.png';
import thirdPhoto from '../imgs/thirdMainPhoto.png';
import dash from '../imgs/dash.jpg';

export default function Main(){
    return(
        <main>
            <section>
                <figure class="containerMajorPhoto">
                    <img src={MajorPic} class="majorPhoto" alt="Uma van amarela com malas (da esquerda para direita, uma mala vermelha, uma maior amarela e, atrás, uma preta) na parte de cima, andando em uma estrada" />
                </figure>
                <span class="containerTitle">
                    <h1>Para qual estado você deseja ir?</h1>
                    <input id="searchPlace" name="search" placeholder="Pesquisar" />
                    <button>BUSCAR</button>
                </span>
                <span class="containerPics">
                    <figure class="figureDiv">
                        <img src={firstPhoto} class="photos" alt="" />
                    </figure>
                    <span>
                            <div>
                                <img src={dash} class="dash" alt="Traço branco" />
                                <h4> VIAGENS NACIONAIS</h4>
                            </div>
                            <article> 
                                <h2>O clima perfeito, no lugar perfeito</h2>
                                <h3>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</h3>
                                <button class="blueBtn">AGENDAR</button>
                            </article>
                    </span>
                </span>
                <span class="containerPics">
                    <span class="containerText">
                        <div>
                            <img src={dash} class="dashBlue" alt="Traço branco" />
                            <h4 class="textViagens"> VIAGENS NACIONAIS</h4>
                        </div>
                        <article> 
                            <h2 class="titleBox">Curta uma nova vibe entre amigos</h2>
                            <h3 class="subtitleBox">Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <b>Planos Multi</b>.</h3>
                            <button class="whiteBtn">AGENDAR</button>
                        </article>
                    </span>
                    <figure class="figureDiv">
                        <img src={secondPhoto} class="photos" alt="" />
                    </figure>
                </span>
                <span class="containerPics">
                    <figure class="figureDiv">
                        <img src={thirdPhoto} class="photos" alt="" />
                    </figure>
                    <span>
                            <div>
                                <img src={dash} class="dash" alt="Traço branco" />
                                <h4> VIAGENS NACIONAIS</h4>
                            </div>
                            <article> 
                                <h2 class="thirdTitleMain">Algumas experiências são inexplicáveis</h2>
                                <h3>Conheça as fontes termais de <b>Caldas Novas, Goiás</b>. Águas quentes, num clima sereno, relaxante e natural.</h3>
                                <button class="blueBtn">AGENDAR</button>
                            </article>
                    </span>
                </span>
            </section>
        </main>
    )
}