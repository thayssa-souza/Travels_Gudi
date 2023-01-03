import React from "react";
import RowIcons from "../rowIcons/rowIcons";
import photoWallStyle from './photoWall.css';
import firstPhoto from '../imgs/firsRowFirstPhoto.png';
import secondPhoto from '../imgs/fisrtRowSecondPhoto.png';
import thirdPhoto from '../imgs/firstRowThirdPhoto.png';
import fourthPhoto from '../imgs/secondRowFirstPhoto.png';
import fifthPhoto from '../imgs/secondRowSecondPhoto.png';
import sixthPhoto from '../imgs/secondRowThirdPhoto.png';

export default function PhotoWall(){
    return(
        <section class="containerPhotoWall">
            <span class="firstContainerWall">
                <h3 class="subtitleWall">use a hashtag #brasilisverigudi</h3>
                <h2 class="titleWall">Nosso mural de Experiências</h2>
            </span>
            <span class="secondContainerWall">
                <figure class="row">
                    <img src={firstPhoto} class="photoWall" alt="" />
                    <img src={secondPhoto} class="photoWall" alt="" />
                    <img src={thirdPhoto} class="photoWall" alt="" />
                </figure>
                <figure class="row">
                    <img src={fourthPhoto} class="photoWall" alt="" />
                    <img src={fifthPhoto} class="photoWall" alt="" />
                    <img src={sixthPhoto} class="photoWall" alt="" />
                </figure>
            </span>
            <RowIcons />
        </section>
    )
}