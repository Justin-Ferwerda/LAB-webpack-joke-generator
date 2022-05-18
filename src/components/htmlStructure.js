import renderToDOM from '../scripts/helpers/renderToDom';

const htmlStructure = () => {
  const domString = `
  <div id="jokeContent"></div>
  <div id="mainContainer">
    <button class="btn btn-success" id="get-joke-btn">Get A Joke</button>
  </div>`;

  renderToDOM('#app', domString);
};

export default htmlStructure;
