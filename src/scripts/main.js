import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import htmlStructure from '../components/htmlStructure';
import events from './events';

const init = () => {
  htmlStructure();
  events();
};

init();
