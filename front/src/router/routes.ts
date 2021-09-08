import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/components/views/DashboardView.vue'),
    children: [
      {
        path: '',
        redirect: '/about',
      },
      {
        path: 'about',
        component: () => import('@/components/dashboard/About.vue'),
      },
      /*
      {
        path: 'battle-map',
        component: () => import('@/components/dashboard/About.vue'),
      },
      */
      {
        path: 'dm',
        component: () => import('@/components/dashboard/DungeonMaster.vue'),
      },
      {
        path: 'game',
        component: () => import('@/components/dashboard/Games.vue'),
      },
      /*
      {
        path: 'generator',
        component: () => import('@/components/dashboard/About.vue'),
      },
      */
      /*
      {
        path: 'larp',
        component: () => import('@/components/dashboard/About.vue'),
      },
      */
      /*
      {
        path: 'langedok',
        component: () => import('@/components/dashboard/About.vue'),
      },
      */
      /*
      {
        path: 'magazine',
        component: () => import('@/components/dashboard/About.vue'),
      },
      */
      {
        path: 'wiki',
        component: () => import('@/components/dashboard/Wiki.vue'),
      },
      {
        path: 'wiki/:path+.md',
        component: () => import('@/components/dashboard/Wiki.vue'),
      },
      /*
      {
        path: 'miniature',
        component: () => import('@/components/dashboard/About.vue'),
      },
      */
      {
        path: 'module',
        component: () => import('@/components/dashboard/Adventures.vue'),
      },
      /*
      {
        path: 'world',
        component: () => import('@/components/dashboard/About.vue'),
      },
      */
      {
        path: 'soft',
        component: () => import('@/components/dashboard/Software.vue'),
      },
      /*
      {
        path: 'crew',
        component: () => import('@/components/dashboard/Crews.vue'),
        children: [
          {
            path: ':id',
            component: () => import('@/components/dashboard/CrewSheet.vue'),
          },
        ],
      },
      {
        path: 'character',
        component: () => import('@/components/dashboard/CharacterSheet.vue'),
      },
      {
        path: 'decisions',
        component: () => import('@/components/dashboard/Decisions.vue'),
      },
      {
        path: 'roll',
        component: () => import('@/components/dashboard/Roll.vue'),
      },
       */
    ],
  },
];

export default routes;
