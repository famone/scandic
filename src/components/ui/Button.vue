<template>
  <button
    v-if="props.color === 'light'"
    class="uppercase rounded-lg bg-white text-lg py-4 px-8 font-medium hover:bg-neutral-200"
    :class="{'!rounded-full': props.rounded}"
  >
    <CubeIcon v-if="props.rounded" class="h-6 inline mr-2" />
    {{ props.text }}
    <ArrowLongRightIcon v-if="props.arrow" class="h-6 inline ml-2" />
  </button>
  <button
    v-else-if="props.color === 'dark'"
    class="uppercase rounded-lg bg-black text-white text-lg py-4 px-8 font-medium hover:bg-neutral-800"
    :class="{'!rounded-full': props.rounded}"
  >
    {{ props.text }}
    <ArrowLongRightIcon v-if="props.arrow" class="h-6 inline ml-2" />
  </button>
  <button
    v-else-if="props.color === 'gray'"
    class="uppercase rounded-lg bg-gray-1 text-lg py-4 px-8 font-medium hover:bg-neutral-200"
    :class="{'!rounded-full': props.rounded}"
  >
    {{ props.text }}
    <ArrowLongRightIcon v-if="props.arrow" class="h-6 inline ml-2" />
  </button>
  <button
    v-else-if="props.color === 'blue'"
    class="uppercase rounded-lg bg-gradient-to-r from-[#1687CB] to-[#78D6FF] text-lg text-white py-4 px-8 font-medium hover:opacity-70"
    :class="{'!rounded-full': props.rounded}"
  >
    {{ props.text }}
    <ArrowLongRightIcon v-if="props.arrow" class="h-6 inline ml-2" />
  </button>
</template>

<script setup lang="ts">
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline/index.js'
import { CubeIcon } from '@heroicons/vue/24/solid/index.js'

const props = defineProps({
  text: {
    type: String,
    default: 'Кнопка'
  },
  color: {
    type: String,
    default: 'light'
  },
  arrow: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>

</style>
