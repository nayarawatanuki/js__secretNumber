import { SecretNumber } from "../components/classes/SecretNumber.js";

const elementMinValue = document.getElementById("min-value");
const elementMaxValue = document.getElementById("max-value");

const secretNumClass = new SecretNumber();
const minValue = secretNumClass.minValue;
const maxValue = secretNumClass.maxValue;
const secretNum = secretNumClass.secretNum;

const elementGuess = document.getElementById("guess");


export { elementMinValue, elementMaxValue, minValue, maxValue, secretNum, elementGuess }
