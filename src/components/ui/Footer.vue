<template>
  <footer class="pt-12 pb-20 bg-gray-1">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-3">
          <nuxt-link to="/">
            <img src="/img/logo.svg" class="h-20 mb-6">
          </nuxt-link>
          <p class="uppercase mb-3">ооо «энергон рус» </p>
          <p class="text-neutral-400 font-light mb-8">
            © 2024 Использование любых материалов с данного ресурса возможно только после письменного согласия владельца авторских прав
          </p>
          <img src="/img/webink.svg" class="mb-3" alt="">
          <p class="text-neutral-400 font-light mb-8">
            Разработано в компании <br> Webink. все права защищены
          </p>
        </div>
        <div class="col-span-3 space-y-16">
          <img src="/img/cp1.webp" alt="" class="h-16">
          <img src="/img/cp2.webp" alt="" class="h-12">
          <img src="/img/cp3.svg" alt="" class="h-8">
        </div>
        <div class="col-span-3">
          <h5 class="uppercase text-lg font-semibold mb-4">Меню</h5>
          <ul class="space-y-2 mb-6">
            <li v-for="(item, index) in data.menu" :key="index" class="font-light text-lg hover:opacity-70">
              <nuxt-link :to="item.link">
                {{ item.text }}
              </nuxt-link>
            </li>
          </ul>
          <h5 class="uppercase text-lg font-semibold mb-4">ИНФО</h5>
          <ul class="space-y-2">
            <li v-for="(item, index) in data.info" :key="index" class="font-light text-lg hover:opacity-70">
              <nuxt-link :to="item.link">
                {{ item.text }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="col-span-3">
          <h5 class="uppercase text-lg font-semibold mb-4">Обратная связь</h5>
          <ul class="space-y-2 mb-6">
            <li class="font-light text-lg hover:opacity-70"><a href="">Написать в Whatsapp</a></li>
            <li class="font-light text-lg hover:opacity-70"><a href="">Написать в Telegram</a></li>
            <li class="font-light text-lg hover:opacity-70"><a href="">kd@energongroup.ru</a></li>
            <li class="font-light text-lg hover:opacity-70"><a href="">+7 812 903 76 13</a></li>
          </ul>
          <div class="flex gap-3">
            <a href="">
              <button class="px-3.5 py-1.5 rounded-lg bg-[#005BFF] hover:opacity-70">
                <img src="/img/ozon.svg" alt="OZON" class="h-6">
              </button>
            </a>
            <a href="">
              <button class="px-3.5 py-1.5 rounded-lg bg-[#A73AFD] hover:opacity-70">
                <img src="/img/wb.svg" alt="Wildberries" class="h-6">
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

const data = reactive({
  menu: [
    { text: 'Коллекции', link: '/' },
    { text: 'О компании ', link: '/' },
    { text: 'География', link: '/' },
    { text: 'Природа', link: '/' },
    { text: 'Контакты ', link: '/' }
  ],
  info: [
    { text: 'Политика конфиденциальности ', link: '/' },
    { text: 'Цели', link: '/' }
  ]
})
</script>

<style scoped>

</style>
