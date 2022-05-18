import renderToDOM from './renderToDom';

// Button state
const setButton = (btnText, btnId) => {
  const domString = `<button class="btn btn-success" id="${btnId}">${btnText}</button>`;

  renderToDOM('#mainContainer', domString);
};

export default setButton;
