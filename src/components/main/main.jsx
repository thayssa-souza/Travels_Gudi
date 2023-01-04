import React from "react";
import MainFirstTopic from "../MainFirstTopic/MainFirstTopic";
import Places from '../places/places';
import PhotoWall from "../photoWall/photoWall";
import Forms from '../forms/forms';

export default function Main(){
    return(
        <main>
            <MainFirstTopic />
            <Places />
            <PhotoWall />
            <Forms />
        </main>
    )
}
