<template>
  <div>
    <section class="py-12 pb-24">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 relative">
            <p class="tracking-widest text-2xl absolute top-6 -left-12 vertical text-neutral-300 uppercase">Продукция</p>
            <h2 class="uppercase text-[80px] font-light mb-12">
              Коллекции  <br>
              <strong>SCANDIC</strong>
            </h2>
          </div>
          <div class="col-span-4">
            <CardsCollection :img="cl1" />
          </div>
          <div class="col-span-4">
            <CardsCollection :img="cl2" />
          </div>
          <div class="col-span-4">
            <CardsCollection :img="cl4" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import cl1 from '~/public/img/cl1.webp'
import cl2 from '~/public/img/cl2.webp'
import cl4 from '~/public/img/cl4.webp'
</script>

<style scoped>

</style>
