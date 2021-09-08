<template>
  <v-app-bar
    app
    :src="backgroundImg"
  >
    <v-app-bar-nav-icon>
      <v-btn
        icon
        @click="toggleSideBar"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar-nav-icon>

    <v-avatar
      v-if="img"
    >
      <img
        :src="img"
        alt=""
      />
    </v-avatar>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field
      hide-details
      append-outer-icon="mdi-magnify"
      single-line
      class="mx-2"
    >
      <template v-slot:append-outer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <v-btn
      v-for="item in items"
      :key="item.id"
      :to="item.to"
      icon
      class="mx-2"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>

    <v-menu
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-badge
          v-if="notifications.length > 0"
          color="error"
          bordered
          overlap
          offset-x="32"
          offset-y="32"
        >
          <template v-slot:badge>
            {{ notifications.length }}
          </template>
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            class="mx-2"
          >
            <v-icon>mdi-bell</v-icon>
          </v-btn>
        </v-badge>
        <v-btn
          v-else
          v-bind="attrs"
          v-on="on"
          icon
          class="mx-2"
        >
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="notification in notifications"
          :key="notification.id"
          :to="notification.to"
        >
          <v-list-item-title>{{ notification.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn
      v-if="user"
      :to="user.profileLink"
      icon
      class="mx-2"
    >
      <v-avatar>
        <img
          :src="user.avatar"
          :alt="user.name"
        />
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { User } from '@/helpers/user';

@Component
export default class MainBar extends Vue {
  @Prop({ type: String, default: '' })
  title!: string;

  @Prop({ type: String, default: '' })
  img!: string;

  @Prop({ type: String, default: '' })
  backgroundImg!: string;

  @Prop({ type: Object, default: null })
  user!: User | null;

  items = [
    {
      id: 1,
      icon: 'mdi-view-dashboard',
      to: '/',
    },
  ];

  notifications = [
    {
      id: 1,
      text: 'Notification',
      to: '/notifications/1',
    },
    {
      id: 2,
      text: 'Notification',
      to: '/notifications/1',
    },
    {
      id: 3,
      text: 'Notification',
      to: '/notifications/1',
    },
  ];

  toggleSideBar() {
    this.$emit('toggleSideBar');
  }
}
</script>

<style scoped>

</style>
