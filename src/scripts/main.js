// INSTRUCTORS: DO NOT directly edit this sandbox. Fork it, and place the fork inside the cohort folder.

import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import jokeData from '../api/jokeData';

const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToRender;
};

const htmlStructure = () => {
  const domString = '<div id="joke-btn"></div><div id="joke-setup"></div><div id="joke-delivery"></div><div id="get-another-joke"></div>';
  renderToDom('#app', domString);
};

const init = () => {
  document.querySelector('#joke-btn').innerHTML = `<button style="display:block" id="get-joke-btn" class="btn btn-lg">Get a Joke</button><button id="punchline-btn" style="display:none"></button>
  `;
  document.querySelector('#get-joke-btn').addEventListener('click', () => {
    jokeData().then((response) => {
      document.querySelector('#joke-setup').innerHTML = response.setup;
      document.querySelector('#punchline-btn').addEventListener('click', () => {
        document.querySelector('#joke-delivery').innerHTML = response.delivery;
        document.querySelector('#get-another-joke').innerHTML = '<button id="get-new-joke></button>';
      });
    });
    document.querySelector('#get-joke-btn').style.display = 'none';
    document.querySelector('#punchline-btn').style.display = 'block';
  });
};

const startApp = () => {
  htmlStructure();
  init();
};

startApp();
