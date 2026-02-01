import { get } from "../functions/utils.js";
import { titulo } from "../script.js";

export function buildTitle(){
    if(get('title')){
        get('title').innerHTML = titulo;
    }
}