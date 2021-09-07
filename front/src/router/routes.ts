import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/components/views/DashboardView.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/dashboard/CharacterSheet.vue'),
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