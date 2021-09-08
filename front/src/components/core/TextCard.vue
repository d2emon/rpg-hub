<template>
  <v-card md="6">
    <v-card-title
      v-if="caption"
      v-text="caption"
    />
    <v-container>
      <v-card-text
        v-html="content"
      />
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class TextCard extends Vue {
  @Prop({ default: '' })
  caption!: string;

  @Prop({ default: '' })
  content!: string;
}
</script>

<style>
.v-card__text h1, .v-card__text h2 {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
