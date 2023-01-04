import React from "react";
import './MainFirstTopic.css';
import MajorPic from '../imgs/majorImage.png';
import firstPhoto from '../imgs/firstMainPhoto.png';
import secondPhoto from '../imgs/secondMainPhoto.png';
import thirdPhoto from '../imgs/thirdMainPhoto.png';
import dash from '../imgs/dash.jpg';

const MainFirstTopic = () => (
    <section className="main">
        <figure className="containerMajorPhoto">
            <img src={MajorPic} className="majorPhoto" alt="Uma van amarela com malas (da esquerda para direita, uma mala vermelha, uma maior amarela e, atrás, uma preta) na parte de cima, andando em uma estrada" />
        </figure>
        <span className="containerTitle">
            <h1>Para qual estado você deseja ir?</h1>
            <input id="searchPlace" name="search" type="text" placeholder="Pesquisar" />
            <button>BUSCAR</button>
        </span>
        <span className="containerPics">
            <figure className="figureDiv">
                <img src={firstPhoto} className="photos" alt="" />
            </figure>
            <span>
                <div>
                    <img src={dash} className="dash" alt="Traço branco" />
                    <h4> VIAGENS NACIONAIS</h4>
                </div>
                <article> 
                    <h2>O clima perfeito, no lugar perfeito</h2>
                    <h3>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</h3>
                    <button className="blueBtn">AGENDAR</button>
                </article>
            </span>
        </span>
        <span className="containerPics">
            <span className="containerText">
                <div>
                    <img src={dash} className="dashBlue" alt="Traço branco" />
                    <h4 className="textViagens"> VIAGENS NACIONAIS</h4>
                </div>
                <article> 
                    <h2 className="titleBox">Curta uma nova vibe entre amigos</h2>
                    <h3 className="subtitleBox">Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <b>Planos Multi</b>.</h3>
                    <button className="whiteBtn">AGENDAR</button>
                </article>
            </span>
            <figure className="figureDiv">
                <img src={secondPhoto} className="photos" alt="" />
            </figure>
        </span>
        <span className="containerPics">
            <figure className="figureDiv">
                <img src={thirdPhoto} className="photos" alt="" />
            </figure>
            <span>
                    <div>
                        <img src={dash} className="dash" alt="Traço branco" />
                        <h4> VIAGENS NACIONAIS</h4>
                    </div>
                    <article> 
                        <h2 className="thirdTitleMain">Algumas experiências são inexplicáveis</h2>
                        <h3>Conheça as fontes termais de <b>Caldas Novas, Goiás</b>. Águas quentes, num clima sereno, relaxante e natural.</h3>
                        <button className="blueBtn">AGENDAR</button>
                    </article>
            </span>
        </span>
    </section>
)

export default MainFirstTopic;