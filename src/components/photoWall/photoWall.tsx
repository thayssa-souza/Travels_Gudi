import React from "react";
import RowIcons from "../rowIcons/rowIcons";
import './photoWall.css';
import firstPhoto from '../imgs/firsRowFirstPhoto.png';
import secondPhoto from '../imgs/fisrtRowSecondPhoto.png';
import thirdPhoto from '../imgs/firstRowThirdPhoto.png';
import fourthPhoto from '../imgs/secondRowFirstPhoto.png';
import fifthPhoto from '../imgs/secondRowSecondPhoto.png';
import sixthPhoto from '../imgs/secondRowThirdPhoto.png';

const PhotoWall = () =>(
    <section className="containerPhotoWall">
        <span className="firstContainerWall">
            <h3 className="subtitleWall">use a hashtag #brasilisverigudi</h3>
            <h2 className="titleWall">Nosso mural de Experiências</h2>
        </span>
        <span className="secondContainerWall">
            <figure className="row">
                <img src={firstPhoto} className="photoWall" alt="" />
                <img src={secondPhoto} className="photoWall" alt="" />
                <img src={thirdPhoto} className="photoWall" alt="" />
            </figure>
            <figure className="row">
                <img src={fourthPhoto} className="photoWall" alt="" />
                <img src={fifthPhoto} className="photoWall" alt="" />
                <img src={sixthPhoto} className="photoWall" alt="" />
            </figure>
        </span>
        <RowIcons />
    </section>
)

export default PhotoWall;