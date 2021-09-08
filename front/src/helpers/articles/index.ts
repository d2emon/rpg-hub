import about from './about';
import history from './history';
import larp from './larp';
import trpg from './trpg';

export default {
  'Об игре': about,
  История: history,
  ...larp,
  ...trpg,
};
