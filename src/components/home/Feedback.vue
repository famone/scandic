<template>
  <section class="py-24">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-10 col-start-2 relative">
          <p class="tracking-widest text-2xl absolute top-6 -left-12 vertical text-neutral-300 uppercase">Давайте знакомиться</p>
          <h2 class="uppercase text-[80px] font-light mb-12">
            Остались <strong>вопросы</strong>? <br>
            Напишите нам
          </h2>
          <div class="rounded-xl px-16 py-8 bg-gray-1">
            <input type="text" placeholder="ВАШЕ ИМЯ" class="input-main">
            <input type="text" placeholder="ГОРОД" class="input-main">
            <input type="text" placeholder="ТЕЛЕФОН" class="input-main">
            <input type="text" placeholder="E-MAIL" class="input-main">
            <UiButton text="Отправить" color="blue" class="w-full mt-2" />
            <p class="mt-4 text-neutral-400 font-light text-lg text-center">Нажимая на кнопку «Отправить», вы соглашаетесь с политикой обработки персональных данных компании</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
