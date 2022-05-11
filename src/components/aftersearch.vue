<script setup lang="ts">
const items = [{
  campaign: 'Amuse.jpg',
  platform: 'Barbie.jpg',
}, {
  campaign: 'Adidas.jpg',
  platform: 'Bally.jpg',
}, {
  campaign: 'Bell.jpg',
  platform: 'Frisbee.jpg',
}, {
  campaign: 'MagicPens.jpg',
  platform: 'Airbus SAS.jpg',
}]
</script>

<template>
  <body>
    <div class="container">
      <h1>Here's what we found</h1>
      <p>4 Listings with the same Seller Name in this Campaign.</p>
      <div class="flex">
        <product v-for="(item, index) in items" :key="index" :product1="item.campaign" :product2="item.platform" />
      </div>
    </div>
  </body>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.container h1 {
    font-size: 35px;
    font-weight: 900;
}
.container p {
    font-size: 14px;
    font-weight: bold;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  padding: 0 10px;

  max-width: 1240px;
  margin: 0 auto;
  color: #383A3D;
  margin-top: 74px;
}

.flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1240px;
    justify-content: space-around;
    row-gap: 56px;
    column-gap: 0px;
    align-items: center;
    margin: 56px auto;
}

/* media */
@media screen and (max-width:1440px) {
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
}
</style>
