import { elementGuess } from "../../base/variables.js";

import { guessValid } from "../../components/validations/secretNumber.js";

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {

    const guess = e.results[0][0].transcript;
    

    showGuessScreen(guess);
    guessValid(guess);
}

function showGuessScreen(guess) {
    elementGuess.innerHTML = `
        <h2>Você disse:</h2>
        <span class="container">${guess}</span>
    `
}

recognition.addEventListener("end", () => recognition.start());