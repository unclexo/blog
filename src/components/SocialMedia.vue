<script setup>
    import SocialMedium from './SocialMedium.vue'
    import IconStackoverflow from './icons/social/IconStackoverflow.vue'
    import IconMedium from './icons/social/IconMedium.vue'
    import IconGithub from './icons/social/IconGithub.vue'
    import IconTwitter from './icons/social/IconTwitter.vue'
    import IconLinkedin from './icons/social/IconLinkedin.vue'
    import Spinner from './Spinner.vue'

    defineProps({
        links: {
            type: Array,
            required: false,
            default: null,
        }
    })

    const components = {
        stackoverflow: IconStackoverflow,
        medium: IconMedium,
        github: IconGithub,
        twitter: IconTwitter,
        linkedin: IconLinkedin,
    }
</script>

<template>
  <div
      v-if="! links"
      data-test="social-media-spinner"
  >
    <Spinner />
  </div>

  <div
      v-else
      data-test="social-media-data"
      class="social-media-links flex flex-wrap lg:justify-start justify-center mt-10 lg:mb-0 mb-10"
  >
    <SocialMedium v-for="link in links" :link="link.url">
      <template #icon>
        <component :is="components[link.icon]"></component>
      </template>
      <template #title>
        <span v-if="link.icon === 'stackoverflow'" class="ml-1" v-html="link.title"></span>
        <span v-else class="ml-1">{{ link.title }}</span>
      </template>
    </SocialMedium>
  </div>
</template>