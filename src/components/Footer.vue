<script setup lang="ts">
// import { toggleDark } from '~/composables'

// const { t, availableLocales, locale } = useI18n()

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }
</script>

<template>
  <div class="container">
    <div>
      <p>Accelerated Research, Trademark Enforcement and Management Information System Version 2 Ⓒ 2021</p>
    </div>
    <div class="flex">
      <p>ARTEMIS V2</p>
      <img src="artemis_login_svg/Logo.svg" alt="">
    </div>
  </div>
</template>

<style scoped>

.container {
    padding-top: 150px;
    padding-bottom: 20px;
    /* padding-left: 20px;
    padding-right: 20px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    font-size: 12px;
    max-width: 1240px;
}

.container img{
    width: 24px;
    height: 24px;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
}
</style>
