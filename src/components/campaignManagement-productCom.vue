<script setup lang="ts">
const props = defineProps<{
  source: string
  id: number
}>()
</script>

<template>
  <div class="container-product">
    <div class="img-div1">
      <div class="img-item">
        <image-product />
      </div>
      <img :src="props.source" alt="">
    </div>
    <div class="txt-div">
      <div class="upper">
        <div class="upperLeft">
          <p class="r-status-forreview" />
          <p>For Review</p>
        </div>
        <div class="upperRight">
          <IdNumberCom :id-number="id" />
        </div>
      </div>
      <div class="lower">
        <div class="lower1">
          <p class="title">
            Sample Seller Name
          </p>
        </div>
        <div class="lower2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-product {
    height: 292px;
    width: 281px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
}
.img-div1 {
    width: 280px;
    height: 165px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    border: 1px solid #70707066;
}
.img-div1 img {
  position: absolute;
  top: -85%;
}

.img-div1 img:hover {
  transform: scale(.5);
  transition: .5s;
}

.img-item{
  position: absolute;
  margin-top: 8px;
  margin-left: 8px;
  margin-bottom: 8px;
  z-index: 1;
}

.txt-div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 280px;
}
.upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 280px;
}

.upperLeft {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    font-size: 12px;
}
.upperRight {
  font-size: 10px;
}
.lower {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  gap: 5px;
}
.lower1 {
  width: 280px;
}

.title {
  font-size: 16px;
  font-weight: bold;
}

.lower2 p {
  font-size: 14px;
}
</style>
