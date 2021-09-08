export interface NavMenu {
  id: string;
  icon: string;
  title: string;
  link: string;
}

const mainMenu: NavMenu[] = [
  {
    id: 'main',
    icon: 'mdi-view-dashboard',
    title: 'Панель управления',
    link: '/',
  },
  {
    id: 'battle-maps',
    icon: 'mdi-map',
    title: 'Карты Боя',
    link: '/battle-map',
    /*
    - Fantasy
    - Modern
    - Sci-Fi
     */
  },
  {
    id: 'dm',
    icon: 'mdi-account-settings',
    title: 'Мастеру',
    link: '/dm',
    /*
    - Campaigns
    - Charsheet
    - Guides
    - Mastering
    - Worldbuild
     */
  },
  {
    id: 'games',
    icon: 'mdi-dice-d20',
    title: 'Игры',
    link: '/game',
  },
  {
    id: 'generators',
    icon: 'mdi-hammer',
    title: 'Генераторы',
    link: '/generator',
    /*
    - Excel
    - Soft
    - Tables
     */
  },
  {
    id: 'larp',
    icon: 'mdi-sword',
    title: 'Игры живого действия',
    link: '/larp',
  },
  {
    id: 'langedok',
    icon: 'mdi-home',
    title: 'Кабинетки',
    link: '/langedok',
  },
  {
    id: 'magazines',
    icon: 'mdi-newspaper',
    title: 'Журналы',
    link: '/magazine',
  },
  {
    id: 'articles',
    icon: 'mdi-text',
    title: 'Статьи',
    link: '/article',
  },
  {
    id: 'miniatures',
    icon: 'mdi-human-male-male',
    title: 'Миниатюры',
    link: '/miniature',
    /*
    - Fantasy
    - Furniture
    - Modern
    - SciFI
    - Wild Wesy
     */
  },
  {
    id: 'modules',
    icon: 'mdi-puzzle',
    title: 'Модули',
    link: '/module',
    /*
    -
    -
    -
     */
  },
  {
    id: 'settings',
    icon: 'mdi-earth',
    title: 'Миры',
    link: '/world',
  },
  {
    id: 'soft',
    icon: 'mdi-desktop-classic',
    title: 'Программы',
    link: '/soft',
  },
  {
    id: 'crew',
    icon: 'mdi-account-multiple',
    title: 'Команды',
    link: '/crew',
  },
  {
    id: 'character',
    icon: 'mdi-account',
    title: 'Персонажи',
    link: '/character',
  },
  {
    id: 'photo',
    icon: 'mdi-image',
    title: 'Фотография',
    link: '/photo',
  },
  {
    id: 'about',
    icon: 'mdi-help-box',
    title: 'Об игре',
    link: '/about',
  },
];

export default mainMenu;
