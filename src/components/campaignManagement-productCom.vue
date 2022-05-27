<script setup lang="ts">
const props = defineProps<{
  source: string
  id: number
  platform_logo: string
  seller_url: string
  product_url: string
  seller_name: string
  list_info: string
}>()

const isSelected = ref(false)

</script>

<template>
  <div class="container-product">
    <a :href="props.product_url" class="img-div1">
      <div class="img-item">
        <image-product :seller_url="props.seller_url" :platform="props.platform_logo" :product_url="props.product_url" />
      </div>
      <img :src="props.source" alt="" @error="(event) => event.target.src='/avatar_png/Default-Listing.png'">
    </a>
    <button class="txt-div" @click="isSelected=true;$emit('isSelected',isSelected)">
      <div class="upper">
        <div class="upperLeft">
          <p class="r-status-forreview" />
          <p>For Review</p>
        </div>
        <div class="upperRight">
          <IdNumberCom :id-number="props.id" />
        </div>
      </div>
      <div class="lower">
        <div class="lower1">
          <p class="title">
            {{ props.seller_name }}
          </p>
        </div>
        <div class="lower2">
          <p>{{ props.list_info }}</p>
        </div>
      </div>
    </button>
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

    max-height: 350px;

    position: relative;
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
    height: 116px;
    width: 280px;
}

.txt-div::before {
  content: "";
  top: 0;
  position: absolute;
  width: 0;
  height: 100%;
  transition: all .5s;
  transform: translateY(-100%);
  border-radius: 12px;
  z-index: -1;
}

.txt-div:hover::before{
  transform: translateY(0);
  background: #f3f1f1;
  width: 110%;
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
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  gap: 5px;

  height: 116px;
}
.lower1 {
  width: 280px;
}

.title {
  font-size: 16px;
  font-weight: bold;

  height: 21px;
  width: 145px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lower2 p {
  font-size: 14px;
  height: 66px;
  width: 280px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

}
</style>
