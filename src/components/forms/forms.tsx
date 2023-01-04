import React from "react";
import './forms.css';

function submitForm() :void{
    alert("Mensagem enviada com sucesso!");
}

const Forms = () => (
    <section className="containerForms">
        <span className="boxFormsAndTitle">
            <h2 className="formsTitle">Fale conosco</h2>
            <div className="forms">
                <input id="email" name="email" type="email" placeholder="Diga o seu melhor email" required />
                <input id="topic" name="topic" type="text" placeholder="Assunto" required />
                <textarea id="textarea" name="textarea" placeholder="Escreva a sua mensagem" required />
                <button className="btnForms" onClick={submitForm}>ENVIAR</button>
            </div>
        </span>
    </section>
)

export default Forms;