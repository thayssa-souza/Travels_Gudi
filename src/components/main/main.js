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
                        <img src={firstPhoto} class="firstPic" alt="" />
                    </figure>
                    <section class="containerText">
                        <span class="boxText">
                            <div>
                                <img src={dash} class="dash" alt="Traço branco" />
                                <h4> VIAGENS NACIONAIS</h4>
                            </div>
                            <article>                        
                            <h2>O clima perfeito, no lugar perfeito</h2>
                            <h3>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</h3>
                            <button>AGENDAR</button>
                            </article>
                        </span>
                    </section>
                </span>
            </section>
        </main>
    )
}