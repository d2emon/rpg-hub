import about from './about';
import dm from './dm';
import games from './games';
import modules from './modules';
import soft from './soft';
import wiki from './wiki';

export default {
  'Настолки/index': about,
  ...dm,
  ...games,
  ...modules,
  ...soft,
  ...wiki,
};
