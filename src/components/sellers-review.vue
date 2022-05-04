<!-- This is for the container
    where the product will be
    injected.
 -->
<script setup lang="ts">
import Aftersearch1 from './aftersearch.vue'
const addText = (text: string) => {
  console.log(`This is the message: ${text}`)
}
</script>
<template>
  <body>
    <Aftersearch1 />
    <div class="container">
      <h1>Sellers for Review</h1>
      <p>12 Sellers Ready for you to check for Acceptance</p>
      <div class="flex">
        <product product1="Wuwear.jpg" product2="Warcraft.jpg" @textAdded="addText" />
        <product product1="AC-DC.jpg" product2="acer laptop.jpg" />
        <product product1="Adidas.jpg" product2="AEV.jpg" />
        <product product1="Airbus SAS.jpg" product2="Amuse.jpg" />
        <product product1="Bally.jpg" product2="Barbie.jpg" />
        <product product1="Bell.jpg" product2="Bestway.jpg" />
        <product product1="Capcom.jpg" product2="Chiro.jpg" />
        <product product1="Frisbee.jpg" product2="Godzilla.jpg" />
        <product product1="Hickies.jpg" product2="Hitachi.jpg" />
        <product product1="MagicPens.jpg" product2="Mayka.jpg" />
      </div>
    </div>
  </body>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  max-width: 1240px;
  margin: 0 auto;
  color: #383A3D;
  margin-top: 74px;
}

.container h1 {
  font-size: 35px;
  font-weight: 900;
}

.container p {
  font-size: 14px;
  font-weight: bold;
}
.flex {
  margin: 56px auto;
  max-width: 1240px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 56px;
  column-gap: 0px;
}
</style>
