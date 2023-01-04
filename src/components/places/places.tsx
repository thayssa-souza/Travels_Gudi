import React from "react";
import rioPic from '../imgs/rioPhoto.png';
import rioOstrasPic from '../imgs/ostrasPhoto.png';
import caldasNovasPic from '../imgs/caldasPhoto.png';
import amazoniaPic from '../imgs/amazoniaPhoto.png';
import './places.css';

const Places = () => (
    <section className="containerPhotos">
        <span className="spanPhoto">
            <figure className="figurePlacePhoto">
                <img src={rioPic} className="placesPhoto" alt="" />
            </figure>
            <button className="btnFirstPlace">RIO DE JANEIRO</button>
        </span>
        <span className="spanPhoto">
            <figure className="figurePlacePhoto">
                <img src={rioOstrasPic} className="placesPhoto" alt="" />
            </figure>
            <button className="btnSecondPlace">RIO DAS OSTRAS</button>
            </span>
            <span className="spanPhoto">
            <figure className="figurePlacePhoto">
                <img src={caldasNovasPic} className="placesPhoto" alt="" />
            </figure>
            <button className="btnThirdPlace">CALDAS NOVAS</button>
            </span>
            <span className="spanPhoto">
            <figure className="figurePlacePhoto">
                <img src={amazoniaPic} className="placesPhoto" alt="" />
            </figure>
            <button className="btnFourthPlace">AMAZÔNIA</button>
            </span>
    </section>
)

export default Places;