<template>
  <v-app id="dashboard-view">
    <main-bar
      :title="title"
      :user="user"
      @toggleSideBar="toggleSideBar"
    />

    <nav-side-bar
      v-model="showSideBar"
      :game-master="user"
      :navigation="navMenu"
    />

    <v-main id="dashboard-main">
      <v-container container--fluid>
        <v-fade-transition mode="out-in">
          <router-view />
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  mapActions,
  mapMutations,
  mapState,
} from 'vuex';
import navMenu from '@/helpers/mainMenu';
import { User } from '@/helpers/user';

@Component({
  components: {
    NavSideBar: () => import('@/components/core/NavSideBar.vue'),
    MainBar: () => import('@/components/core/MainBar.vue'),
  },
  computed: {
    ...mapState([
      'title',
      'user',
    ]),
    ...mapState('navigation', ['show']),
  },
  methods: {
    ...mapActions('navigation', ['switchDrawer']),
    ...mapMutations('navigation', ['setShowDrawer']),
  },
})
export default class DashboardView extends Vue {
  title!: string;

  show!: boolean | null;

  user!: User | null;

  switchDrawer!: () => null;

  setShowDrawer!: (value: boolean) => null;

  navMenu = navMenu;

  showSideBar: boolean | null = true; // null;

  drawerButton() {
    this.switchDrawer();
  }

  drawerChange(value: boolean) {
    this.setShowDrawer(value);
  }

  toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}
</script>

<style scoped>

</style>
