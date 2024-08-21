<template>
  <section class="py-24 pb-48">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-5 col-start-2 relative">
          <p class="tracking-widest text-neutral-300 text-2xl absolute top-0 -left-12 vertical">НОВЫЕ КОЛЛЕКЦИИ</p>
          <CardsCollection :img="cl1" />
        </div>
        <div class="col-span-5 translate-y-24">
          <CardsCollection :img="cl2" />
        </div>
        <div class="col-span-5 col-start-2">
          <CardsCollection :img="cl3" />
        </div>
        <div class="col-span-5 translate-y-24">
          <CardsCollection :img="cl4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import cl1 from '~/public/img/cl1.webp'
import cl2 from '~/public/img/cl2.webp'
import cl3 from '~/public/img/cl3.webp'
import cl4 from '~/public/img/cl4.webp'
</script>

<style scoped>

</style>
