<script setup>
  defineProps({
      link: {
          type: String,
          required: true,
      }
  });
</script>

<template>
  <div class="social-media-link bg-white mr-2 mb-2 rounded shadow">
    <a :href="link" target="_blank" class="flex items-center justify-center p-2">
      <slot name="icon"></slot>
      <slot name="title"></slot>
    </a>
  </div>
</template>