<template>
  <button class="uppercase rounded-lg bg-white text-lg py-4 px-8 font-medium hover:bg-neutral-200">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: 'Кнопка'
  }
})
</script>

<style scoped>

</style>
