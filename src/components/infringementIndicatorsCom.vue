<script setup lang="ts">
const items = [{
  title: 'Item is from China',
}, {
  title: 'Suspicious product description',
}, {
  title: 'Asian size chart',
}, {
  title: 'Price is notably lower than the original',
}, {
  title: 'Shipping takes more than 12 days',
}, {
  title: 'Bad reviews which indicate that the product is fake',
}, {
  title: 'Item is not included in the brand\'s official merchandise',
}, {
  title: 'Bad reviews on customer\'s buying experience',
}, {
  title: 'Item uses a different logo',
}, {
  title: 'Asian seller name',
}]
</script>

<template>
  <div class="container">
    <div class="title">
      <p>
        Infringement Indicators
      </p>
    </div>
    <div class="div-item-container">
      <div v-for="(item, index) in items" :key="index" class="div-item">
        <input :id="`${index}`" type="checkbox" class="checkbox">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: max-content;
  height:  434px;
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 46px;
  width: 638px;

  font-size: 22px;
  font-weight: bold;
  color: #383A3D;
}
.div-item-container {
  margin: 0 auto;
  width: 638px;
  height:  350px;

  display: grid;
  /* align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap; */
  grid-template-columns: 292px 292px;

  padding: 0 12px;

  row-gap: 20px;
  column-gap: 24px;
}
.div-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* flex-wrap: wrap; */
  gap: 16px;
  font-size: 16px;
  color: #383A3D;
  opacity: 80%;
  max-width: 250px;
  text-align: left;
}

.checkbox {
  height: 24px;
  width: 24px;

  border-radius: 4px;
  border: 1px solid #383A3D;

  background: #FFFFFF;
}
.checkbox:toggle,
.checkbox:active,
.checkbox:focus {
  background: #3B5998;
}
</style>
