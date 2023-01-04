import React from "react";
import './rowIcons.css';
import firstIcon from '../imgs/firstIcon.png';
import secondIcon from '../imgs/secondIcon.png';
import thirdIcon from '../imgs/thirdIcon.png';
import fourthIcon from '../imgs/fourthIcon.png';

const RowIcons = () => (
        <section className="containerRowIcons">
            <span className="boxIconsGray">
                <img src={firstIcon} className="icons" alt="" />
                <h3 className="subtitleIcon">O melhor do Brasil</h3>
            </span>
            <span className="boxIconsBlue">
                <img src={secondIcon} className="icons" alt="" />
                <h3 className="subtitleIcon">Cidades mais frequentadas</h3>
            </span>
            <span className="boxIconsGray">
                <img src={thirdIcon} className="icons" alt="" />
                <h3 className="subtitleIcon">Pontos turísticos</h3>
            </span>
            <span className="boxIconsBlue">
                <img src={fourthIcon} className="icons" alt="" />
                <h3 className="subtitleIcon">Restaurantes</h3>
            </span>
        </section>
)

export default RowIcons;