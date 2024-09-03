<template>
  <header class="py-6 z-20" :class="{ 'absolute top-0 left-0 w-full text-white': props.homepage}">
    <div class="container mx-auto flex justify-between items-center">
      <nuxt-link to="/">
        <img src="/img/logo.svg" class="h-20">
      </nuxt-link>
      <div class="flex gap-4 items-center">
        <ul class="flex gap-4 uppercase">
          <li v-for="(item, index) in navs" :key="index" class="text-lg hover:opacity-60 transition-all">
            <nuxt-link :to="item.link">{{ item.text }}</nuxt-link>
          </li>
        </ul>
        <a href="">
          <button class="px-3.5 py-1.5 rounded-lg bg-[#005BFF] hover:opacity-70">
            <img src="/img/ozon.svg" alt="OZON" class="h-6">
          </button>
        </a>
        <a href="">
          <button class="px-3.5 py-1.5 rounded-lg bg-[#A73AFD] hover:opacity-70">
            <img src="/img/wb.svg" alt="Wildberries" class="h-6">
          </button>
        </a>
        <div class="text-white flex items-center cursor-pointer hover:opacity-70 transition-all">
          <GlobeAltIcon class="h-6 mr-3" />
          RU
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { GlobeAltIcon } from '@heroicons/vue/24/outline/index.js'
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
