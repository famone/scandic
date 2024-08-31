<template>
  <section id="highlights" class="py-24">
    <div class="container mx-auto relative">
      <img
        id="box"
        src="/img/scrolltin.webp"
        class="absolute ml-auto top-8 right-0"
      >

      <h2 id="title" class="uppercase text-[100px] leading-[130px] text-black font-thin relative fadeUp">
        <span class="gradient-text">Scandic Mints</span><br>
        — ЭТО<br>
        Первоклассная <br>
        фабрика, <br>
        ориентированная<br>
        на <span class="gradient-text">ЛЮДЕЙ</span>  и <br>
        производство <br>
        продуктов <span class="gradient-text">здорового</span><br>
        <span class="gradient-text">питания</span>
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
  gsap.to('#box', {
    y: 500, // Двигаем вниз на 500px
    scale: 1.05, // Легкое увеличение
    ease: 'power1.out', // Плавное замедление
    scrollTrigger: {
      trigger: '#box',
      start: 'bottom bottom',
      end: 'bottom top',
      scrub: 1 // Добавляем плавность, а также замедление
    }
  })
  // Анимация для тайтла
  gsap.to('#title', {
    scrollTrigger: {
      trigger: '#highlights',
      start: 'top 80%',
      toggleActions: 'restart none none none'
    },
    opacity: 1,
    y: 0
  })
})
</script>

<style scoped>
.container {
  position: relative;
}
</style>
