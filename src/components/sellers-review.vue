<!-- This is for the container
    where the product will be
    injected.
 -->
<script setup lang="ts">
import Aftersearch1 from './aftersearch.vue'
const items = [{
  campaign: 'Wuwear.jpg',
  platform: 'Warcraft.jpg',
}, {
  campaign: 'AC-DC.jpg',
  platform: 'acer laptop.jpg',
}, {
  campaign: 'Adidas.jpg',
  platform: 'AEV.jpg',
}, {
  campaign: 'Airbus SAS.jpg',
  platform: 'Amuse.jpg',
}, {
  campaign: 'Bally.jpg',
  platform: 'Barbie.jpg',
}, {
  campaign: 'Bell.jpg',
  platform: 'Bestway.jpg',
}, {
  campaign: 'Capcom.jpg',
  platform: 'Chiro.jpg',
}, {
  campaign: 'Frisbee.jpg',
  platform: 'Godzilla.jpg',
}, {
  campaign: 'Hickies.jpg',
  platform: 'Hitachi.jpg',
}, {
  campaign: 'MagicPens.jpg',
  platform: 'Mayka.jpg',
}]

const props = defineProps<{
  itemSearch: Item
}>()

interface Item {
  seller: string
  company: string
  logo: string
}

</script>
<template>
  <body>
    <Aftersearch1 :search-item="props.itemSearch" />
    <div class="container">
      <h1>Sellers for Review</h1>
      <p>12 Sellers Ready for you to check for Acceptance</p>
      <div class="flex">
        <product v-for="(item, index) in items" :key="index" :product1="item.campaign" :product2="item.platform" />
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
  padding: 0 10px;
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
  justify-content: space-around;
  align-items: center;
  row-gap: 56px;
  column-gap: 0px;
}

@media screen  and (max-width:1440px) {
  .container{
    padding: 0 16px;
  }
}
@media screen  and (max-width:768px) {
  .container h1{
    font-size: 30px;
  }
  .container p{
    font-size: 12px;
  }
  .container{
    align-items: center;
  }
}
</style>
