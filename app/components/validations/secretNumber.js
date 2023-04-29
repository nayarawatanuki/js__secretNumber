import { minValue, maxValue, secretNum, elementGuess } from "../../base/variables.js";

function guessInvalid(number) {
    return Number.isNaN(number);
}

function nonStandardNumber(number) {
    return number > maxValue || number < minValue;
}

export function guessValid(guess) {

    const number = +guess;

    if(guessInvalid(number)) {
        if(guess.toUpperCase() === "GAME OVER") {
            document.querySelector(".main").innerHTML = `
                <section class="msg"> 
                    <h2>GAME OVER!</h2>
                    <h3>Clique no botão para jogar novamente</h3>

                    <button id="btn-playAgain" class="button-play">Jogar novamente</button>
                </section>
            `;
        } else {

            elementGuess.innerHTML += `
                <span>Valor inválido!<span>
            `;
            return
        }
    }

    if(nonStandardNumber(number)) {

        elementGuess.innerHTML += `<span>Valor inválido: Fale um número entre ${minValue} e ${maxValue}</span>`;
        return
    } 

    if(number === secretNum) {
        document.querySelector(".main").innerHTML = `
            <section class="msg"> 
                <h2>Você acertou!</h2>
                <h3>O número secreto era: ${secretNum}</h3>

                <button id="btn-playAgain" class="button-play">Jogar novamente</button>
            </section>
        `;
    } else if(number > secretNum) {

        elementGuess.innerHTML += `
            <span>O número secreto é menor <i class="fa-solid fa-down-long"></i></span>
        `
    } else {
        elementGuess.innerHTML += `
            <span>O número secreto é maior <i class="fa-solid fa-up-long"></i></span>
        `
    }


}