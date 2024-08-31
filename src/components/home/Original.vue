<template>
  <section class="py-24 mt-20 overflow-hidden">
    <div class="container mx-auto">
      <div class="grid gap-6 grid-cols-12">
        <div class="col-span-10 col-start-2">
          <swiper
            :slides-per-view="1"
            :space-between="0"
            :centered-slides="true"
            :loop="false"
            class="z-0"
          >
            <!-- :navigation="navigation"
            :modules="[SwiperNavigation]" -->
            <swiper-slide
              v-for="(item, index) in 3"
              :key="index"
            >
              <div class="bg-[#D25A35] rounded-2xl p-8 relative h-[30rem] flex justify-end flex-col">
                <img
                  src="/img/boxorig.webp"
                  alt=""
                  class="absolute h-full top-0 left-1/2 -translate-x-1/2 -translate-y-24"
                >
                <div class="translate-y-14">
                  <p class="tracking-widest text-white">SCANDIC ORIGINAL</p>
                  <h4 class="text-white text-5xl leading-snug relative mb-3">MANGO SHAKE</h4>
                  <div class="flex flex-wrap gap-3">
                    <UiButton text="Характеристики" color="dark" />
                    <UiButton text="Смотреть в магазине" color="gray" />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <!-- <button class="z-10 prev1 p-2 rounded-full transition-all bg-gray-2 border hover:bg-neutral-300 absolute top-1/2 -translate-y-4 -left-6 hidden xl:block">
            <ChevronLeftIcon class="text-neutral-700 h-6" />
          </button>
          <button class="z-10 next1 p-2 rounded-full transition-all bg-gray-2 border hover:bg-neutral-300 absolute top-1/2 -translate-y-4 -right-6 hidden xl:block">
            <ChevronRightIcon class="text-neutral-700 h-6" />
          </button> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.swiper {
  overflow: visible;
}
.swiper-slide{
  transition: all .3s ease-in-out;
  transform: scale(0.8);
}
.swiper-slide-active{
  transform: scale(1);
}
</style>
