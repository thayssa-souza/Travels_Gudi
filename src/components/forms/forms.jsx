import React from "react";
import './forms.css';

export default function Forms(){
    return(
        <section class="containerForms">
            <span class="boxFormsAndTitle">
                <h2 class="formsTitle">Fale conosco</h2>
                <forms class="forms">
                    <input id="email" name="email" type="email" placeholder="Diga o seu melhor email" required/>
                    <input id="topic" name="topic" type="text" placeholder="Assunto" required/>
                    <textarea id="textarea" name="textarea" placeholder="Escreva a sua mensagem" rows="5" cols="49" required/>
                    <button class="btnForms">ENVIAR</button>
                </forms>
            </span>
        </section>
    )
}