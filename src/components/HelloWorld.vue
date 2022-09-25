<script setup>
    defineProps({
        msg: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
    })
</script>

<template>
  <div class="greetings">
    <h1 class="green font-medium text-4xl text-center lg:text-left -top-2.5">
      {{ msg }}
    </h1>
    <h3 class="text-xl text-center lg:text-left">
      <span v-html="desc"></span>
    </h3>
  </div>
</template>