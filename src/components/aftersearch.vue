<script setup lang="ts">

const isClick = ref(false)

const props = defineProps<{
  // searchItem: Item
  results: []
}>()

// interface Item {
//   seller: string
//   company: string
//   logo: string
// }

// const items = [{
//   campaign: 'Amuse.jpg',
//   platform: 'Barbie.jpg',
//   // seller: `${props.searchItem.seller}`,
//   seller: 'Marvin Marindoque',
// }, {
//   campaign: 'Adidas.jpg',
//   platform: 'Bally.jpg',
//   seller: 'John Michael Tolentino',
//   // seller: `${props.searchItem.seller}`,
// }, {
//   campaign: 'Bell.jpg',
//   platform: 'Frisbee.jpg',
//   seller: 'John Dave Omandam',
//   // seller: `${props.searchItem.seller}`,
// }, {
//   campaign: 'MagicPens.jpg',
//   platform: 'Airbus SAS.jpg',
//   seller: 'Joe June Labajo',
//   // seller: `${props.searchItem.seller}`,
// }]
</script>

<template>
  <div v-if="isClick">
    <div class="afterSearch_container">
      <h1>Here's what we found</h1>
      <p>4 Listings with the same Seller Name in this Campaign.</p>
      <div class="afterSearch_flex">
        <product
          v-for="(item, index) in props.results"
          :id="item.id"
          :key="index"
          :platform="item.platform_logo"
          :campaign="item.campaign_logo"
          :list_info="item.list_info"
          :seller="item.seller_name"
          :company_campaign="item.company"
          :campaign_url="item.campaign_url"
          :preview_img="item.preview_img"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
}

.afterSearch_container h1 {
    font-size: 35px;
    font-weight: 900;
}
.afterSearch_container p {
    font-size: 14px;
    font-weight: bold;
}

.afterSearch_container {
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

.afterSearch_flex {
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
  .afterSearch_container{
    padding: 0 16px;
  }
}

@media screen  and (max-width:768px) {
  .afterSearch_container{
    align-items: center;
  }
  .afterSearch_container h1{
    font-size: 30px;
  }
  .afterSearch_container p{
    font-size: 12px;
  }
}
</style>
