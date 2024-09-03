<template>
  <div>
    <section id="inner" class="rounded-b-[60px] pt-44 pb-24 bg-gray-300 overflow-hidden relative ">
      <img id="collection_bd" src="/img/col_orig.webp" alt="" class="w-full absolute top-0 left-0">
      <div class="h-full w-full bg-black bg-opacity-40 absolute top-0 left-0" />
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 relative">
            <p class="tracking-widest text-white text-2xl absolute top-6 -left-12 vertical">КОЛЛЕКЦИЯ</p>
            <h2 class="uppercase text-[80px] font-light text-white mb-4">
              SCANDIC<br>
              <strong>ORIGINAL</strong> <br>
            </h2>
            <p class="text-white text-xl font-light md:w-1/3">Линейка SCANDIC ORIGINAL® представлена в 7 раздичных вкусах: Лесные ягоды, Кола, Цитрусовый микс, Арктическая мята, Пряное яблоко, Манго, Вишня</p>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24">
      <div class="container mx-auto">
        <div class="grid gap-6 grid-cols-12">
          <div class="col-span-4">
            <CardsGoodCard />
          </div>
          <div class="col-span-4">
            <CardsGoodCard />
          </div>
          <div class="col-span-4">
            <CardsGoodCard />
          </div>
          <div class="col-span-4">
            <CardsGoodCard />
          </div>
          <div class="col-span-4">
            <CardsGoodCard />
          </div>
          <div class="col-span-4">
            <CardsGoodCard />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

definePageMeta({
  layout: 'custom'
})

onMounted(() => {
  // Анимация для замедленного движения баночки
  gsap.to('#collection_bd', {
    y: -200, // Двигаем вниз на 500px
    scrollTrigger: {
      trigger: '#inner',
      start: 'top top',
      end: 'bottom top',
      scrub: 1 // Добавляем плавность, а также замедление
    }
  })
})
</script>

<style scoped>

</style>
