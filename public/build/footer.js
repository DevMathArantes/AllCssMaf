import { get } from "../functions/utils.js";

export function buildFooter(){
    if(get('footer')){

        get('footer').innerHTML = `
            <p>Developed by Matheus Arantes Ferreira</p>
            <h2>MAF</h2>
            <a href="" class="centraliza">
                <img src="../assets/icons/link2.png" alt="icone link">
                Acesse nosso site
            </a>
        `;

    }
}