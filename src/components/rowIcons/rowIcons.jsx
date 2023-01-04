import React from "react";
import './rowIcons.css';
import firstIcon from '../imgs/firstIcon.png';
import secondIcon from '../imgs/secondIcon.png';
import thirdIcon from '../imgs/thirdIcon.png';
import fourthIcon from '../imgs/fourthIcon.png';

export default function RowIcons(){
    return(
        <section class="containerRowIcons">
            <span class="boxIconsGray">
                <img src={firstIcon} class="icons" alt="" />
                <h3 class="subtitleIcon">O melhor do Brasil</h3>
            </span>
            <span class="boxIconsBlue">
                <img src={secondIcon} class="icons" alt="" />
                <h3 class="subtitleIcon">Cidades mais frequentadas</h3>
            </span>
            <span class="boxIconsGray">
                <img src={thirdIcon} class="icons" alt="" />
                <h3 class="subtitleIcon">Pontos turísticos</h3>
            </span>
            <span class="boxIconsBlue">
                <img src={fourthIcon} class="icons" alt="" />
                <h3 class="subtitleIcon">Restaurantes</h3>
            </span>
        </section>
    )
}