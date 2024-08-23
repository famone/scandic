<template>
  <NuxtLayout>
    <section class="py-32 flex justify-center items-center">
      <div class="text-center space-y-6">
        <img src="/img/404.webp" alt="">
        <p class="uppercase text-lg tracking-widest">Страница не  найдена или <br> находится в разработке</p>
        <div>
          <nuxt-link to="/">
            <UiButton text="на главную" color="dark" />
          </nuxt-link>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>

</style>
