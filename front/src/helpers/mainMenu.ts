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
    icon: 'mdi-account',
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
    icon: 'mdi-account-multiple',
    title: 'Игры',
    link: '/game',
  },
  {
    id: 'generators',
    icon: 'mdi-account-multiple',
    title: 'Генераторы',
    link: '/generator',
    /*
    - Excel
    - Soft
    - Tables
     */
  },
  {
    id: 'langedok',
    icon: 'mdi-account-multiple',
    title: 'Кабинетки',
    link: '/langedok',
  },
  {
    id: 'magazines',
    icon: 'mdi-account-multiple',
    title: 'Журналы',
    link: '/magazine',
  },
  {
    id: 'miniatures',
    icon: 'mdi-account-multiple',
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
    icon: 'mdi-account-multiple',
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
    icon: 'mdi-account-multiple',
    title: 'Миры',
    link: '/world',
  },
  {
    id: 'soft',
    icon: 'mdi-account-multiple',
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
