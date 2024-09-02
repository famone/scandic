<template>
  <section id="bin" class="h-[720px] bg-[#38B6CC] flex items-center bin relative">
    <img id="bg-tin" src="/img/char.webp" alt="" class="w-2/3 absolute right-0 object-cover -z-0">
    <div class="container mx-auto relative">
      <h2 class="uppercase text-[80px] font-light text-white">
        конфеты со <br>
        <strong>скандинавским</strong> <br>
        характером
      </h2>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Анимация для изменения баночки
  // gsap.to('#box', {
  //   y: 500,
  //   scale: 1.05,
  //   scrollTrigger: {
  //     trigger: '#box',
  //     start: 'bottom bottom',
  //     end: 'bottom top',
  //     scrub: true
  //   }
  // })

  // Анимация для замедленного движения баночки
  gsap.to('#bg-tin', {
    y: 300, // Двигаем вниз на 500px
    scrollTrigger: {
      trigger: '#bin',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1 // Добавляем плавность, а также замедление
    }
  })
})
</script>

<style scoped>
.bin{
  clip-path: ellipse(85% 50% at 50% 50%);
  border-radius: 60px;
}
</style>
