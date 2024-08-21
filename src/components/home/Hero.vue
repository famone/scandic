<template>
  <!-- bg-[url('/img/hero.webp')] -->
  <section class="h-[90vh] bg-cover bg-center bg-no-repeat rounded-b-[60px] relative overflow-hidden flex items-center bg-fixed">
    <div class="h-full w-full bg-black bg-opacity-30 absolute top-0 left-0" />
    <video
      class="-z-10 bg-video-player"
      src="https://scandicmints.com/wp-content/uploads/2020/11/all-.mp4"
      autoplay
      loop
      muted
      playsinline
    />
    <div class="container mx-auto relative z-20">
      <h1 class="uppercase text-[110px] leading-[130px] text-white font-thin">
        ДРАЖЕ <br>
        <strong>SCANDIC FRESH MINTS</strong> <br>
        В ЖЕСТЯНОЙ <br>
        коробке
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
