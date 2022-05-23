<script setup lang="ts">
const items = [{
  title: 'eBay',
}, {
  title: 'Wish',
}, {
  title: 'Chinese Bank',
}, {
  title: 'Pingpong',
}, {
  title: 'No Account',
}, {
  title: 'WeChat Pay',
}, {
  title: 'Paypal - No Account',
}, {
  title: 'Paypal',
}, {
  title: 'Amazon',
}, {
  title: 'DHPay',
}, {
  title: 'US Bank',
}, {
  title: 'Alipay',
}, {
  title: 'Payoneer',
}, {
  title: 'DHGate - No Account',
}]
</script>

<template>
  <div class="container">
    <div class="title">
      <p>
        Payment Methods
      </p>
    </div>
    <div class="div-item-container">
      <div v-for="(item, index) in items" :key="index" class="div-item">
        <input :id="`${index}`" type="checkbox">
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

  width: 664px;
  height:  451px;
  border: 1px solid #3B5998;
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 46px;
  width: 664px;

  font-size: 22px;
  font-weight: bold;
  color: #383A3D;
}
.div-item-container {
  width: 664px;
  height:  390px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;

  padding: 0 12px;

  margin: 0 auto;
}
.div-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 25px;

  font-size: 16px;
  color: #383A3D;
  opacity: 80%;
}
</style>
