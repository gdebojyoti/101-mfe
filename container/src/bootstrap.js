// import mount from "pokedex/index";
// import { mount as quizMount } from "quiz/index";

console.log("I got in @ Container!");

// mount(document.getElementById("pokedex-app"));
// quizMount(document.getElementById("quiz-app"));

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

const rootElm = document.getElementById("root");
const root = createRoot(rootElm);
root.render(<App />);
