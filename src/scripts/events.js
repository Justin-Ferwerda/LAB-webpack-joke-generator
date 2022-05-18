import { setJoke, getJoke } from './data';
import jokeData from '../api/jokeData';
import setButton from './helpers/setButton';

const events = () => {
  document.querySelector('#mainContainer').addEventListener('click', (e) => {
    if (e.target.id === 'get-joke-btn') {
      jokeData().then((response) => {
        setJoke(response);
        const joke = getJoke();

        // Rerender the DOM with the Joke setup and new button
        document.querySelector('#jokeContent').innerHTML = `<p>${joke.setup}</p>`;
        setButton('Get Punchline', 'get-punchline-btn');
      });
    }

    if (e.target.id === 'get-punchline-btn') {
      const joke = getJoke();
      // Rerender the DOM with the Joke setup, punchline, and new button
      document.querySelector('#jokeContent').innerHTML = `<p>${joke.setup}</p>`;
      document.querySelector('#jokeContent').innerHTML += `<p>${joke.punchline}</p>`;
      setButton('Get Another Joke', 'get-joke-btn');
    }
  });
};

export default events;
