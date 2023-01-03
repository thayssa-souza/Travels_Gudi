import React from "react";
import rioPic from '../imgs/rioPhoto.png';
import rioOstrasPic from '../imgs/ostrasPhoto.png';
import caldasNovasPic from '../imgs/caldasPhoto.png';
import amazoniaPic from '../imgs/amazoniaPhoto.png';
import placesStyle from './places.css';

export default function Places(){
    return(
        <section class="containerPhotos">
            <span class="spanPhoto">
                <figure class="figurePlacePhoto">
                    <img src={rioPic} class="placesPhoto" alt="" />
                </figure>
                <button class="btnFirstPlace">RIO DE JANEIRO</button>
            </span>
            <span class="spanPhoto">
                <figure class="figurePlacePhoto">
                    <img src={rioOstrasPic} class="placesPhoto" alt="" />
                </figure>
                <button class="btnSecondPlace">RIO DAS OSTRAS</button>
                </span>
                <span class="spanPhoto">
                <figure class="figurePlacePhoto">
                    <img src={caldasNovasPic} class="placesPhoto" alt="" />
                </figure>
                <button class="btnThirdPlace">CALDAS NOVAS</button>
                </span>
                <span class="spanPhoto">
                <figure class="figurePlacePhoto">
                    <img src={amazoniaPic} class="placesPhoto" alt="" />
                </figure>
                <button class="btnFourthPlace">AMAZÔNIA</button>
                </span>
        </section>
    )
}