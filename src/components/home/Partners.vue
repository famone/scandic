<template>
  <section class="py-24">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-10 col-start-2 relative">
          <p class="tracking-widest text-2xl absolute top-6 -left-12 vertical text-neutral-300">О КОМПАНИИ</p>
          <h2 class="uppercase text-[80px] font-light mb-12">
            <strong>НАШИ ПАРТНЕРЫ</strong> <br>
            и контрагенты
          </h2>
        </div>
      </div>
    </div>
    <Vue3Marquee pause-on-hover>
      <img
        v-for="(img, index) in partners"
        :key="index"
        :src="img"
        class="mx-6"
      >
    </Vue3Marquee>
  </section>
</template>

<script setup lang="ts">
import p1 from '@/public/img/p1.webp'
import p2 from '@/public/img/p2.webp'
import p3 from '@/public/img/p3.webp'
import p4 from '@/public/img/p4.webp'
import p5 from '@/public/img/p5.webp'
import p7 from '@/public/img/p7.webp'
import p8 from '@/public/img/p8.webp'

const partners = [p1, p2, p3, p4, p5, p7, p8]
</script>

<style scoped>

</style>
