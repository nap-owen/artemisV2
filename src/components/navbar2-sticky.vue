<script setup lang="ts">
import ButtonCom from './buttonCom.vue'
const props = defineProps<{
  pageNumber: number
}>()

const page = ref(props.pageNumber)

const decrement = () => {
  if (page.value > 1)
    page.value = page.value - 1
  else
    page.value = 1
}

const greatDecrement = () => {
  page.value = page.value - 5
  if (page.value < 1)
    page.value = 1
}

const increment = () => {
  if (page.value >= 1)
    page.value = page.value + 1
}

const greatIncrement = () => {
  if (page.value >= 1)
    page.value = page.value + 5
}
</script>

<template>
  <div class="container">
    <div class="upperDiv">
      <div class="upperLeft">
        <button class="upperLeft1">
          <img src="/JPG Campaigns/Nestle.jpg " alt="">
          <p>Nestle</p>
        </button>
        <div class="upperLeft2">
          <input type="text" placeholder="Search">
          <button class="r-appbar-search search-btn" />
        </div>
        <button>
          <ButtonCom icon="r-actionbar-breakdown" />
        </button>
        <button>
          <ButtonCom icon="r-actionbar-selection" />
        </button>
      </div>
      <div class="upperRight">
        <button>
          <ButtonCom icon="r-actionbar-layout" title="Layout" />
        </button>
        <button>
          <ButtonCom icon="r-actionbar-platform" title="Platforms" />
        </button>
        <button>
          <ButtonCom icon="r-actionbar-filters" title="Filters" />
        </button>
      </div>
    </div>
    <div class="lowerDiv">
      <div class="lowerLeft">
        <button>
          <Clickable icon="r-status-haspotential" title="Has Potential" num-items="324" />
        </button>
        <button>
          <Clickable icon="r-status-forreview" title="For Review" num-items="9" />
        </button>
        <button>
          <Clickable icon="r-status-monitoring" title="Monitoring" num-items="9.2k" />
        </button>
        <button>
          <Clickable icon="r-status-accepted" title="Accepted" num-items="9.2k" />
        </button>
        <button>
          <Clickable icon="r-status-submitted" title="Submitted" num-items="99" />
        </button>
        <button>
          <Clickable icon="r-status-rejected" title="Rejected" num-items="0" />
        </button>
        <button>
          <Clickable icon="r-status-forreview" title="For Internal Review" num-items="0" />
        </button>
      </div>
      <div class="lowerRight">
        <div class="lowerRight1">
          <button>1-9 of 9 listings</button>
        </div>
        <div class="lowerRight2">
          <button class="innerLowerRight1" @click="greatDecrement()">
            <p class="r-pagination-back" />
            <p class="r-pagination-back" />
          </button>
          <button class="innerLowerRight2" @click="decrement()">
            <p class="r-pagination-back" />
          </button>
          <p class="innerLowerRight3">
            {{ page }}
          </p>
          <button class="innerLowerRight4" @click="increment()">
            <p class="r-pagination-forward" />
          </button>
          <button class="innerLowerRight5" @click="greatIncrement()">
            <p class="r-pagination-forward" />
            <p class="r-pagination-forward" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  max-width: 1240px;
  margin: 0 auto;
}

.upperDiv {
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;
  width: 1240px;

  padding: 20px;
  margin: 10px auto;
}

/* upperLeft */
.upperLeft {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}

.upperLeft1 {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 114px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #70707033;

  padding-left: 12px;
  padding-right: 22px;

  font-size: 14px;
  font-weight: bold;
}

.upperLeft1:hover {
  background: #ECF5FF;
}

.upperLeft1:active,
.upperLeft1:focus {
  background: #3B5998;
  color: #FFFFFF;
  font-weight: normal;
}

.upperLeft1 img{
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #8B9DC333;
}

.upperLeft2 {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;
  width: 300px;

  border: 1px solid #70707033;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 12px;
}

.upperLeft2:hover {
  border: 1px solid #3B5998;
}

.upperLeft2:hover .search-btn {
  transform: rotate(338deg);
  transition: .3s;
}

.upperLeft2:active,
.upperLeft2:focus-within {
  border: 1px solid #3B5998;
}

.upperLeft2 input {
  outline: none;
  border: none;
  width: 88%;
}

.search-btn{
  display: flex;
  justify-content: center;
  align-items: center;

  height: 24px;
  width: 24px;

  background: #8B9DC3;
  border-radius: 50%;

  color: #FFFFFF;

  font-size: 12px;
}

/* upperRight */

.upperRight {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
}

/* lowerDiv */
.lowerDiv {
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 100%;
  width: 1240px;
  padding: 0 20px;
}

.lowerLeft {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.lowerRight {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 34px;
  font-size: 14px;
  font-weight: normal;
}

.lowerRight1:hover {
  color: #ADBBD8;
}

.lowerRight1:active,
.lowerRight1 button:focus-within {
  color: #3B5998;
  font-weight: bold;
}

.lowerRight2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.innerLowerRight1,
.innerLowerRight5 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.innerLowerRight1 p,
.innerLowerRight5 p {
  width: 5px;
  height: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.innerLowerRight3 {
  height: 16px;
  width: auto;
  background: #383A3D;
  border-radius: 20px;
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  padding: 5px;
}
</style>
