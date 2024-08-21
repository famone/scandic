<template>
  <header class="py-6 z-20" :class="{ 'absolute top-0 left-0 w-full text-white': props.homepage}">
    <div class="container mx-auto flex justify-between items-center">
      <img src="/img/logo.svg" class="h-20">
      <div>
        <ul class="flex gap-4 uppercase">
          <li v-for="(item, index) in navs" :key="index" class="text-lg hover:opacity-60 transition-all">
            <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navs } from '@/src/helpers/nav'

const props = defineProps({
  homepage: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

</style>
