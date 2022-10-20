<script setup>
    import Spinner from './Spinner.vue'
    import Article from './Article.vue'

    defineProps({
        articles: {
            type: Array,
            required: false,
            default: null,
        },
    })
</script>

<template>
  <div
    v-if="!articles"
    data-test="articles-spinner"
  >
    <Spinner />
  </div>

  <div
    v-else
    data-test="articles-data" class="articles"
  >
    <h2 class="text-lg mb-3">Latest Articles</h2>
    <Article :key="index" v-for="(article, index) in articles" :url="article.url">
      <template #title>{{ article.title }}</template>
      <p>{{ article.description }}</p>
    </Article>
  </div>
</template>