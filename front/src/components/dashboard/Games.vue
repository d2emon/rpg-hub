<template>
  <v-container
    fill-height
    container--fluid
    grid-list-xl
  >
    <v-row>
      <v-col
        offset-md="2"
        md="8"
      >
        <wiki-page
          caption="Игры"
          article-id="Настолки/Системы/index"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    WikiPage: () => import('@/components/core/WikiPage.vue'),
  },
})
export default class Games extends Vue {}
</script>
