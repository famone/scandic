<template>
  <section class="py-12">
    <div class="container mx-auto">
      <div class="grid gap-6 grid-cols-12">
        <div class="col-span-7 relative">
          <swiper
            :slides-per-view="1"
            :space-between="24"
            :centered-slides="true"
            :loop="false"
            class="z-0 h-full"
          >
            <swiper-slide
              v-for="(item, index) in 3"
              :key="index"
            >
              <div class="bg-gray-1 h-full rounded-2xl flex justify-center items-center">
                <img src="/img/tin_lebedev.webp" alt="">
              </div>
            </swiper-slide>
          </swiper>

          <UiButton class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10" text="покрутить в 3D" rounded />
        </div>
        <div class="col-span-5 space-y-8">
          <div>
            <p class="tracking-widest text-neutral-400">SCANDIC ORIGINAL</p>
            <h1 class="text-5xl leading-snug relative mb-4 font-medium">MANGO SHAKE</h1>
          </div>
          <div class="grid grid-cols-4 gap-3">
            <div
              v-for="(item, idx) in icons"
              :key="idx"
              class="col-span-1 p-3 bg-gray-1 rounded-lg"
            >
              <img :src="item.icon" alt="" class="mb-2">
              <p>{{ item.text }}</p>
            </div>
          </div>
          <div>
            <p class="tracking-widest text-neutral-400 uppercase mb-2">Ингридиенты</p>
            <p class="text-lg">
              Подсластители (сорбит, ксилит, сукралоза), регулятор кислотности лимонная
              кислота, сухие измельченные ягоды вишни, эмульгатор стеарат кальция,
              ароматизаторы, краситель натуральный кармин, ментол.
            </p>
          </div>
          <div>
            <p class="tracking-widest text-neutral-400 uppercase mb-2">Питательные вещества (100g)</p>
            <p class="text-lg">
              Белки 0 г, жиры 0 г, углеводы 94 г (в том числе: сахара 0 г, полиолы 94 г), энергетическая ценность (калорийность) 940 кДж/230ккал. Не содержит ГМО.
            </p>
          </div>
          <UiButton text="логистика" color="dark" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import icon1 from '@/public/icons/weight.svg'
import icon2 from '@/public/icons/candy.svg'
import icon3 from '@/public/icons/width.svg'
import icon4 from '@/public/icons/height.svg'

const icons = [
  {
    text: '14 гр.',
    icon: icon1
  },
  {
    text: '50 шт.',
    icon: icon2
  },
  {
    text: '62 мм',
    icon: icon3
  },
  {
    text: '50мм',
    icon: icon4
  }
]
</script>

<style scoped>

</style>
