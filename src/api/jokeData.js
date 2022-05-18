import axios from 'axios';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get(endpoint).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export default getJoke;
