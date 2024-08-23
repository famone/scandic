<template>
  <button v-if="props.color === 'light'" class="uppercase rounded-lg bg-white text-lg py-4 px-8 font-medium hover:bg-neutral-200">
    {{ props.text }}
  </button>
  <button v-else-if="props.color === 'dark'" class="uppercase rounded-lg bg-black text-white text-lg py-4 px-8 font-medium hover:bg-neutral-800">
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
