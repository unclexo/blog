<script setup>
    defineProps({
        url: {
            type: String,
            required: true,
        }
    });
</script>

<template>
  <div data-test="article" class="article flex mb-5 last:mb-0">
    <div class="details">
      <a :href="url" target="_blank">
        <h3 class="text-lg font-weight-500 mb-2">
          <slot name="title"></slot>
        </h3>
      </a>
      <slot></slot>
    </div>
  </div>
</template>