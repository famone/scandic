<template>
  <section id="unique" class="rounded-[60px] py-24 bg-gray-300 overflow-hidden relative">
    <img id="bg-tin2" src="/img/unique.webp" alt="" class="absolute top-0 right-0 w-full">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-10 col-start-2  relative">
          <p class="tracking-widest text-white text-2xl absolute top-6 -left-12 vertical">ФАБРИКА SCANDIC</p>
          <h2 class="uppercase text-[80px] font-light text-white mb-8">
            Уникальное<br>
            <strong>производство</strong> <br>
          </h2>

          <div class="grid grid-rows-3 grid-cols-10 gap-6">
            <div class="col-span-6 bg-black bg-opacity-40 rounded-2xl p-8">
              <p class="text-white uppercase text-2xl mb-8">Лучшее оборудование</p>
              <p class=" text-white font-thin text-lg">Ростеры, колорсортеры, колориметры, <br> упаковка баночек с азотом от лучших мировых <br> производителей</p>
            </div>
            <div class="col-span-4 row-span-2 bg-black bg-opacity-40 rounded-2xl p-8">
              <p class="text-white uppercase text-2xl mb-8">Собственные <br> технологии <br> и IT-решения</p>
              <p class="text-white font-thin text-lg">Позволяют работать <br> с максимальной эффективностью, <br> качеством и прозрачностью</p>
            </div>
            <div class="col-span-4 row-span-2 bg-black bg-opacity-40 rounded-2xl p-8">
              <p class="text-white uppercase text-2xl mb-8">Собственные <br> технологии <br> и IT-решения</p>
              <p class=" text-white font-thin text-lg">Позволяют работать с максимальной эффективностью, качеством и прозрачностью</p>
            </div>
            <div class="col-span-2 row-span-1 bg-black bg-opacity-40 rounded-2xl p-8">
              <p class="text-white uppercase text-2xl mb-8">на 99%</p>
              <p class="text-white font-thin text-lg">Баночки Scandic на 99% подлежат вторичной переработке.</p>
            </div>
            <div class="col-span-6 bg-black bg-opacity-40 rounded-2xl p-8">
              <p class="text-white uppercase text-2xl mb-8">Здоровый состав</p>
              <p class=" text-white font-thin text-lg">Не содержит сахар, глютен и ГМО</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Анимация для замедленного движения баночки
  gsap.to('#bg-tin2', {
    y: -400, // Двигаем вниз на 500px
    scrollTrigger: {
      trigger: '#unique',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1 // Добавляем плавность, а также замедление
    }
  })
})
</script>

<style scoped>

</style>
