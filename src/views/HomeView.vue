<script setup>
    import { inject } from 'vue'
    import Articles from '../components/Articles.vue'

    const articles = inject('articles', null)
</script>

<template>
  <div class="page">
    <Articles :articles="articles" />
  </div>
</template>
