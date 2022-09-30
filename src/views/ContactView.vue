<script setup>
    import { inject } from 'vue'

    const contact = inject('contact', null)
</script>

<template>
  <div class="contact">
    <h3 class="text-lg font-normal-500 mb-6">Please feel free to get in touch.</h3>
    <p class="text-md font-normal mb-1">Mobile: {{ contact.phone || '' }}</p>
    <p class="text-md font-normal mb-1">Email: {{ contact.email || '' }}</p>
    <p class="text-md font-normal mt-8">Timezone: GMT +6</p>
  </div>
</template>

<style scoped>

</style>