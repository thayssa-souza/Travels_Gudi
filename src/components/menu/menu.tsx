import React from "react";
import { bubble as Menu } from 'react-burger-menu';
import './menu.css';

const Props = () => (
    <Menu className="menuContainer">
        <ul className="ulMenu">
            <li>Sobre</li>
            <li>Benefícios</li>
            <li>Contato</li>
        </ul>
    </Menu>
)

export default Props;