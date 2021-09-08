<template>
  <v-container
    fill-height
    container--fluid
    grid-list-xl
  >
    <v-row>
      <v-col
        md="2"
      >
        <v-card>
          <v-card-title>
            Статьи
          </v-card-title>
          <v-list>
            <v-list-item-group v-model="articleId">
              <v-list-item
                v-for="article in articleIds"
                :key="article"
                :to="`/wiki/${article}.md`"
                :value="article"
              >
                <v-list-item-title>
                  {{ article }}
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <wiki-page
          v-if="articleId"
          :article-id="articleId"
        />
        <wiki-page
          v-else
          caption="Статьи"
          article-id="Настолки/Статьи/index"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';

@Component({
  components: {
    WikiPage: () => import('@/components/core/WikiPage.vue'),
  },
  computed: {
    ...mapState(['articles']),
  },
})
export default class Wiki extends Vue {
  articles!: { [key: string]: string };

  get articleIds(): string[] {
    return Object.keys(this.articles);
  }

  get articleId(): string {
    return this.$route.params.path || '';
  }
}
</script>
