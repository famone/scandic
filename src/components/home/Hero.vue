<template>
  <!-- bg-[url('/img/hero.webp')] -->
  <section id="main" class="h-[90vh] bg-cover bg-center bg-no-repeat rounded-b-[60px] relative overflow-hidden flex items-center bg-fixed">
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
        <span id="hero1" class="fadeUp block translate-y-5">ДРАЖЕ</span>
        <strong id="hero2" class="fadeUp block">SCANDIC MINTS</strong>
        <span id="hero3" class="fadeUp block">В ЖЕСТЯНОЙ</span>
        <span id="hero4" class="fadeUp block">Коробке</span>
      </h1>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// gsap.to('#title', {
//   scrollTrigger: {
//     trigger: '#highlights',
//     start: 'top 80%',
//     toggleActions: 'restart none none none'
//   },
//   opacity: 1,
//   y: 0
// })

onMounted(() => {
  gsap.to('#hero1', {
    scrollTrigger: {
      trigger: '#main',
      start: 'top 80%',
      toggleActions: 'restart none restart none'
    },
    opacity: 1,
    y: 0,
    delay: 0
  })
  gsap.to('#hero2', {
    scrollTrigger: {
      trigger: '#main',
      start: 'top 80%',
      toggleActions: 'restart none restart none'
    },
    opacity: 1,
    y: 0,
    delay: 0.5
  })
  gsap.to('#hero3', {
    scrollTrigger: {
      trigger: '#main',
      start: 'top 80%',
      toggleActions: 'restart none restart none'
    },
    opacity: 1,
    y: 0,
    delay: 1
  })
  gsap.to('#hero4', {
    scrollTrigger: {
      trigger: '#main',
      start: 'top 80%',
      toggleActions: 'restart none restart none'
    },
    opacity: 1,
    y: 0,
    delay: 1.5
  })
//   gsap.fromTo('#herotitle',
//     { opacity: 0, y: 50 },
//     {
//       opacity: 1,
//       y: 0,
//       duration: 1,
//       // delay: 1,
//       scrollTrigger: {
//         trigger: '#main',
//         start: 'top 80%',
//         toggleActions: 'play none none none'
//       }
//     })
})
</script>

<style scoped>

</style>
