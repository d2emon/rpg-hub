import articles from '@/helpers/articles';
import { User } from '@/helpers/user';

export interface RootState {
  title: string;
  user: User;
  articles: { [key: string]: string };
}

const state: RootState = {
  title: 'RPG Hub',
  user: {
    avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
    name: 'Дмитрий Куценко',
    userId: 'd2emon',
    profileLink: '/profile/d2emon',
  },
  articles,
};

export default state;
