<template>
  <text-card
    :caption="caption"
    :content="text"
  />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { mapState } from 'vuex';
import markdown from '@/helpers/markdown';

@Component({
  components: {
    TextCard: () => import('@/components/core/TextCard.vue'),
  },
  computed: {
    ...mapState(['articles']),
  },
})
export default class Wiki extends Vue {
  articles!: { [key: string]: string };

  @Prop({ default: 'index' })
  articleId!: string;

  @Prop({ default: '' })
  caption!: string;

  get text(): string {
    const article = this.articles[this.articleId] || '';
    const raw = article.replace(/\[(.*)]\(\.\/(.*)\)/gi, '[$1](/#/wiki/$2)');
    return markdown.render(raw);
  }
}
</script>
