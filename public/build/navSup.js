import { get } from "../functions/utils.js";

export function buildNavSup(){

    if(get('navSup')){

        get('navSup').innerHTML=`
            <input class="abrirMenuOculto" id="redes" type="checkbox">
            <label for="redes" class="btnAbrirMenuOculto">
                <img src="../assets/icons/menu.png" alt="icone menu">
            </label>
            <ul class="menuOculto centraliza">
                <a class="centraliza" href="">
                    <img src="../assets/icons/globo.png" alt="icone globo">
                    <span>MAF</span>
                </a>
                <a class="centraliza" href="">
                    <img src="../assets/icons/instagram.png" alt="icone instagram">
                    <span>Instagram</span>
                </a>
                <a class="centraliza" href="">
                    <img src="../assets/icons/linkedin2.png" alt="icone linkedin">
                    <span>Linkedin</span>
                </a>
                <a class="centraliza" href="">
                    <img src="../assets/icons/github.png" alt="icone github">
                    <span>Git-Hub</span>
                </a>
            </ul>

            <h1>AllCssMaf</h1>
            <a href="classes.html" class="centraliza">
                <span>Voltar</span>
            </a>
        `;

    }

}