import { secretNum } from "./base/variables.js";

import "./libs/lib.js";


console.log("Número secreto: ", secretNum);

document.body.addEventListener("click", e => {

    if(e.target.id == "btn-playAgain") {
        window.location.reload();
    }
})