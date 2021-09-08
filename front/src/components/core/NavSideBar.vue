<template>
  <v-navigation-drawer
    app
    v-model="visible"
    :src="backgroundImg"
  >
    <v-list-item
      v-if="gameMaster"
      :to="gameMaster.profileLink"
      two-line
    >
      <v-list-item-avatar>
        <img
          :src="gameMaster.avatar"
          :alt="gameMaster.name"
        >
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ gameMaster.name }}</v-list-item-title>
        <v-list-item-subtitle>GM</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
      v-if="navigation"
    >
      <v-list-item
        v-for="item in navigation"
        :key="item.id"
        :to="item.link"
        link
      >
        <v-list-item-icon v-if="item.icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { User } from '@/helpers/user';

interface NavMenu {
  id: string;
  icon: string;
  title: string;
  link: string;
}

@Component
export default class SideDrawer extends Vue {
  @Prop({ type: String, default: '' })
  backgroundImg!: string;

  @Prop({ type: Object, default: null })
  gameMaster!: User | null;

  @Prop({ type: Object })
  navigation!: NavMenu;

  @Prop()
  value!: boolean | null;

  get visible(): boolean | null {
    return this.value;
  }

  set visible(value: boolean | null) {
    this.$emit('input', value);
  }
}
</script>

<style scoped>

</style>
