import React from "react";
import { bubble as Menu } from 'react-burger-menu';
import './menu.css';

export default function Props(){
    return(
        <Menu class="menuContainer">
            <ul class="ulMenu">
                <li>Sobre</li>
                <li>Benefícios</li>
                <li>Contato</li>
            </ul>
        </Menu>
    )
}