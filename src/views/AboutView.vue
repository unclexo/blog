<script setup>
    import { onMounted } from 'vue'
    import Spinner from '../components/Spinner.vue'
    import { useAboutStore } from '../store/about'

    const store = useAboutStore()

    onMounted(() => {
        if (! store.content) {
            store.getContent('https://raw.githubusercontent.com/unclexo/data/main/blog/about.html')
        }
    })
</script>

<template>
  <div class="page flex items-center">
    <div
        v-if="!store.content"
        data-test="about-spinner"
        class="flex justify-center w-full"
    >
      <Spinner />
    </div>

    <div v-else class="about text-base font-normal" v-html="store.content"></div>
  </div>
</template>
