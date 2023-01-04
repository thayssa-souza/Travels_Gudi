import React from "react";
import './forms.css';

export default function Forms(){
    function submitForm(){
        const inputEmail = document.querySelector("input#email").value;
        const inputTopic = document.getElementById("topic").value;
        const inputMessage = document.querySelector("textarea").value;

        if(inputEmail.length > 2 && inputTopic.length >= 2 && inputMessage.length >= 2){
            alert("Mensagem enviada com sucesso");
        } else{
            alert("Todos os campos são obrigatórios, tente novamente.");
        }
    }

    return(
        <section class="containerForms">
            <span class="boxFormsAndTitle">
                <h2 class="formsTitle">Fale conosco</h2>
                <forms class="forms">
                    <input id="email" name="email" type="email" placeholder="Diga o seu melhor email" required/>
                    <input id="topic" name="topic" type="text" placeholder="Assunto" required/>
                    <textarea id="textarea" name="textarea" placeholder="Escreva a sua mensagem" rows="5" cols="49" required/>
                    <button class="btnForms" onClick={submitForm}>ENVIAR</button>
                </forms>
            </span>
        </section>
    )
}