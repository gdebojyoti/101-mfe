import mount from "pokedex/index";
import { mount as quizMount } from "quiz/index";

console.log("I got in @ Container!");

mount(document.getElementById("pokedex-app"));
quizMount(document.getElementById("quiz-app"));