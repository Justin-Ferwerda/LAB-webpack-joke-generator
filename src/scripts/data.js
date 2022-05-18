let joke = {}; // state

const setJoke = (obj) => {
  joke = {
    setup: obj.setup,
    punchline: obj.delivery
  };

  return joke;
};

const getJoke = () => joke;

export { getJoke, setJoke };
