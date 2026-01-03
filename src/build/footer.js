import { get } from "../functions/utils.js";

export function footer(){

    if(get('footer')){
        get('footer').innerHTML=`
            <p>Developed by Matheus Arantes Ferreira</p>
            <h2>MAF</h2>
            <a href="">Acesse nosso site</a>
        `;
    }

}