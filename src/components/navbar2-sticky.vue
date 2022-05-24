<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import ButtonCom from './buttonCom.vue'

const props = defineProps<{
  pageNumber: number
  results: []
  campaign: []
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
// ref for buttons
const isClick = ref(false)
const isFirstClick = ref(false)
const isThirdClick = ref(false)
const isFourthClick = ref(false)
const isFifthClick = ref(false)

const firstButton = ref(null)
const thirdButton = ref(null)
const fourthButton = ref(null)
const fifthButton = ref(null)
const dropdownRef = ref(null)

const outsideClick = (target: string) => {
  switch (target) {
    case 'dropdownRef': {
      onClickOutside(
        dropdownRef,
        (event) => {
          isClick.value = false
        },
      )
      break
    }
    case 'firstButton': {
      onClickOutside(
        firstButton,
        (event) => {
          isFirstClick.value = false
        },
      )
      break
    }
    case 'thirdButton': {
      onClickOutside(
        thirdButton,
        (event) => {
          isThirdClick.value = false
        },
      )
      break
    }
    case 'fourthButton': {
      onClickOutside(
        fourthButton,
        (event) => {
          isFourthClick.value = false
        },
      )
      break
    }
    case 'fifthButton': {
      onClickOutside(
        fifthButton,
        (event) => {
          isFifthClick.value = false
        },
      )
      break
    }
  }
}

const breakdownItems = ['Breakdown by Platforms', 'Breakdown by Payment Platforms', 'Breakdown by Payment Types']
const layoutItems = ['Card View', 'View List']
const platformItems = [
  { platform_name: 'All Platforms' },
  { platform_name: 'Aliexpress' },
  { platform_name: 'Dhgate' },
  { platform_name: 'Ebay' },
  { platform_name: 'Wish' },
  { platform_name: '11street' },
  { platform_name: '1688' },
]
</script>

<template>
  <div class="container">
    <div class="upperDiv">
      <div class="upperLeft">
        <div ref="dropdownRef" class="upperLeft1-container">
          <button class="upperLeft1" :class="{'toggled': isClick}" @click="isClick=!isClick; outsideClick('dropdownRef')">
            <!-- <button class="upperLeft1" @click="addCount();isClick=true"></button> -->
            <img src="/JPG Campaigns/Nestle.jpg " alt="">
            <p>Nestle</p>
          </button>
          <div v-if="isClick" class="searchCampaign">
            <SearchCampaignCom :campaign="campaign" :results="props.results" />
          </div>
          <!-- v-if="count===1 && isClick===true" -->
        </div>

        <div class="upperLeft2">
          <input type="text" placeholder="Search">
          <button class="r-appbar-search search-btn" />
        </div>
        <div ref="firstButton" class="firstButton">
          <button @click="isFirstClick=!isFirstClick; outsideClick('firstButton')">
            <ButtonCom icon="r-actionbar-breakdown" :is-click="isFirstClick" />
          </button>
          <div v-if="isFirstClick" class="firstButton-item">
            <NormalMenuBar :titles="breakdownItems" />
          </div>
        </div>
        <!-- selection -->
        <button>
          <ButtonCom icon="r-actionbar-selection" />
        </button>
        <!-- selection -->
      </div>
      <div class="upperRight">
        <div ref="thirdButton" class="thirdButton">
          <button @click="isThirdClick=!isThirdClick; outsideClick('thirdButton')">
            <ButtonCom icon="r-actionbar-layout" title="Layout" :is-click="isThirdClick" />
          </button>
          <div v-if="isThirdClick" class="thirdButton-item">
            <NormalMenuBar :titles="layoutItems" />
          </div>
        </div>
        <div ref="fourthButton" class="fourthButton">
          <button @click="isFourthClick=!isFourthClick; outsideClick('fourthButton')">
            <ButtonCom icon="r-actionbar-platform" title="Platforms" :is-click="isFourthClick" />
          </button>
          <div v-if="isFourthClick" class="fourthButton-item">
            <PlatformDropdownCom :items="platformItems" />
          </div>
        </div>
        <div ref="fifthButton" class="fifthButton">
          <button @click="isFifthClick=!isFifthClick; outsideClick('fifthButton')">
            <ButtonCom icon="r-actionbar-filters" title="Filters" :is-click="isFifthClick" />
          </button>
          <div v-if="isFifthClick" class="fifthButton-item">
            <CMmodalCom :is-click="isFifthClick" @clickBy="(n: boolean) => isFifthClick=n" />
          </div>
        </div>
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

.upperLeft1-container {
  position: relative;
  width: 114px;
  height: 40px;
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

  /* position: relative; */
}

.upperLeft1:hover {
  background: #ECF5FF;
}

.upperLeft1:active,
.upperLeft1:focus,
.upperLeft1.toggled {
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

/* search campaign */
.searchCampaign {
  position: absolute;
  top: 50px;;
  left: 0;
}

/* 1st button */

.firstButton {
  position: relative;
}
.firstButton-item {
  position: absolute;
  top: 45px;
}

/* 3rd Button */
.thirdButton {
  position: relative;
}
.thirdButton-item {
  position: absolute;
  top: 50px;
  right: 0;
}

/* 4th Button */
.fourthButton {
  position: relative;
}

.fourthButton-item {
  position: absolute;
  top: 50px;
  right: 0;
}

/* 5th Button */
.fifthButton {
  position: relative;
}

.fifthButton-item {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>
