<template>
  <button v-if="props.color === 'light'" class="uppercase rounded-lg bg-white text-lg py-4 px-8 font-medium hover:bg-neutral-200">
    {{ props.text }}
  </button>
  <button v-else-if="props.color === 'dark'" class="uppercase rounded-lg bg-black text-white text-lg py-4 px-8 font-medium hover:bg-neutral-800">
    {{ props.text }}
  </button>
  <button v-else-if="props.color === 'gray'" class="uppercase rounded-lg bg-gray-1 text-lg py-4 px-8 font-medium hover:bg-neutral-200">
    {{ props.text }}
  </button>
  <button v-else-if="props.color === 'blue'" class="uppercase rounded-lg bg-gradient-to-r from-[#1687CB] to-[#78D6FF] text-lg text-white py-4 px-8 font-medium hover:opacity-70">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: 'Кнопка'
  },
  color: {
    type: String,
    default: 'light'
  }
})
</script>

<style scoped>

</style>
