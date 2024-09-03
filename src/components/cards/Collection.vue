<template>
  <div class="h-[46rem] rounded-xl p-8 flex flex-col justify-between overflow-hidden relative">
    <img :src="props.img" class="h-full w-full object-cover absolute top-0 left-0 -z-10" alt="">
    <div class="h-full w-full bg-black opacity-20 absolute top-0 left-0 -z-0" />
    <h2 class="text-white text-5xl leading-snug relative">
      SCANDIC <br>
      ORIGINAL
    </h2>
    <div class="space-y-6 relative">
      <p class="text-xl text-white max-w-[80%]">
        Мы вложили в него весь наш 15-летний опыт работы с драже и постарались создать лучшее в мире производство конфет в жестяной упаковке.
      </p>
      <nuxt-link to="/collections/original" class="block">
        <UiButton text="Подробнее" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  img: {
    required: true,
    type: String
  }
})
</script>

<style scoped>

</style>
