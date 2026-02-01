import { buildFooter } from "./footer.js";
import { buildNavSup } from "./navSup.js";
import { buildTitle } from "./title.js";

export function builder(){

    buildNavSup();
    buildFooter();
    buildTitle();

}