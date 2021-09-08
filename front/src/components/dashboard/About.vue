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
          caption="Об игре"
          article-id="Об игре"
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
export default class About extends Vue {}
</script>
