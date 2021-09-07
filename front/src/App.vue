<template>
  <transition mode="out-in">
    <router-view/>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {}
</script>

<style>
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}

blockquote {
  border-left: .25em solid #dfe2e5;
  color: #6a737d;
  padding: 0 1em;
}
</style>

