<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import ButtonCom from './buttonCom.vue'
import { useCampaignStore } from '~/stores/campaign'

const props = defineProps<{
  pageNumber: number
  results: []
  campaign: []

  status: string

  campaign_management: []
}>()

const campaignStore = useCampaignStore()
const emit = defineEmits(['isClickStatus'])

const campaign_id = computed(() => campaignStore.current.id)
const campaign_name = computed(() => campaignStore.current.label)
const campaign_image = computed(() => campaignStore.current.image)

const totalList = computed(() => campaignStore.totalList + 1)

const status = ref(props.status)

const isHasPotential = ref(false)
const isQualified = ref(false)
const isMonitoring = ref(false)
const isAccepted = ref(false)
const isSubmitted = ref(false)
const isRejected = ref(false)
const isForInternalReview = ref(false)

const checkStatus = () => {
  switch (status.value) {
    case 'Qualified': {
      isQualified.value = true

      isHasPotential.value = false
      isMonitoring.value = false
      isAccepted.value = false
      isSubmitted.value = false
      isRejected.value = false
      isForInternalReview.value = false
      break
    }
    case 'Has Potential': {
      isHasPotential.value = true

      isQualified.value = false
      isMonitoring.value = false
      isAccepted.value = false
      isSubmitted.value = false
      isRejected.value = false
      isForInternalReview.value = false
      break
    }
    case 'Monitoring': {
      isMonitoring.value = true

      isHasPotential.value = false
      isQualified.value = false
      isAccepted.value = false
      isSubmitted.value = false
      isRejected.value = false
      isForInternalReview.value = false
      break
    }
    case 'Accepted': {
      isAccepted.value = true

      isMonitoring.value = false
      isHasPotential.value = false
      isQualified.value = false
      isSubmitted.value = false
      isRejected.value = false
      isForInternalReview.value = false
      break
    }
    case 'Submitted': {
      isSubmitted.value = true

      isAccepted.value = false
      isMonitoring.value = false
      isHasPotential.value = false
      isQualified.value = false
      isRejected.value = false
      isForInternalReview.value = false
      break
    }
    case 'Rejected': {
      isRejected.value = true

      isSubmitted.value = false
      isAccepted.value = false
      isMonitoring.value = false
      isHasPotential.value = false
      isQualified.value = false
      isForInternalReview.value = false
      break
    }
    case 'For Internal Review': {
      isForInternalReview.value = true

      isRejected.value = false
      isSubmitted.value = false
      isAccepted.value = false
      isMonitoring.value = false
      isHasPotential.value = false
      isQualified.value = false
      break
    }
  }
}

// const id = ref()

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

const isLowerRight1Click = ref(false)

const firstButton = ref(null)
const thirdButton = ref(null)
const fourthButton = ref(null)
const fifthButton = ref(null)
const dropdownRef = ref(null)

const lowerRight1 = ref(null)

const menuSelected = ref(-1)

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
    case 'lowerRight1': {
      onClickOutside(
        lowerRight1,
        (event) => {
          isLowerRight1Click.value = false
          menuSelected.value = -1
        },
      )
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

const listing_menu = [
  { menu: 'Seller Name' },
  { menu: 'Platform' },
]

const listing_submenu = [
  { submenu: 'Ascending' },
  { submenu: 'Descending' },
]

watch(() => props.status, () => {
  status.value = props.status
})

watch(() => status.value, () => {
  checkStatus()
  if (campaignStore.totalList === 0)
    campaignStore.totalList = 0

  emit('isClickStatus', status.value)
})

watch(() => campaignStore.totalList, () => {
  if (campaignStore.totalList < totalList.value)
    totalList.value = (totalList.value - campaignStore.totalList)
  else
    totalList.value = campaignStore.totalList
})

onMounted(() => {
  status.value = props.status
  checkStatus()
})
</script>

<template>
  <div class="container">
    <div class="upperDiv">
      <div class="upperLeft">
        <div ref="dropdownRef" class="upperLeft1-container">
          <button class="upperLeft1" :class="{'toggled': isClick}" @click="isClick=!isClick; outsideClick('dropdownRef')">
            <!-- <button class="upperLeft1" @click="addCount();isClick=true"></button> -->
            <!-- <div v-if="campaign_name" class="upperLeft1-item">
              <img :src="props.campaign_image" alt="">
              <p>{{ campaign_name }}</p>
            </div>
            <div v-else class="upperLeft1-item">
              <img :src="props.campaign_image" alt="">
              <p>{{ props.campaign_name }}</p>
            </div> -->
            <img :src="campaign_image" alt="">
            <p>{{ campaign_name }}</p>
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
          <Clickable
            icon="r-status-haspotential" title="Has Potential" :is-click-status="isHasPotential" :num-items="324" @clickBy="(n) => {if(n===true){
              status = 'Has Potential'
              campaignStore.status = status
            }}"
          />
        </button>
        <button>
          <Clickable
            icon="r-status-forreview" title="For Review" :is-click-status="isQualified" :num-items="9" @clickBy="(n) => {if(n===true){
              status = 'Qualified'
              campaignStore.status = status
            }}"
          />
        </button>
        <button>
          <Clickable
            icon="r-status-monitoring" title="Monitoring" :is-click-status="isMonitoring" :num-items="9200" @clickBy="(n) => {if(n===true){
              status = 'Monitoring'
              campaignStore.status = status
            }}"
          />
        </button>
        <button>
          <Clickable
            icon="r-status-accepted" title="Accepted" :is-click-status="isAccepted" :num-items="5200" @clickBy="(n) => {if(n===true){
              status = 'Accepted'
              campaignStore.status = status
            }}"
          />
        </button>
        <button>
          <Clickable
            icon="r-status-submitted" title="Submitted" :is-click-status="isSubmitted" :num-items="99" @clickBy="(n) => {if(n===true){
              status = 'Submitted'
              campaignStore.status = status
            }}"
          />
        </button>
        <button>
          <Clickable
            icon="r-status-rejected" title="Rejected" :is-click-status="isRejected" :num-items="0" @clickBy="(n) => {if(n===true){
              status = 'Rejected'
              campaignStore.status = status
            }}"
          />
        </button>
        <button>
          <Clickable
            icon="r-status-forreview" title="For Internal Review" :is-click-status="isForInternalReview" :num-items="0" @clickBy="(n) => {if(n===true){
              status = 'For Internal Review'
              campaignStore.status = status
            }}"
          />
        </button>
      </div>
      <div class="lowerRight">
        <div ref="lowerRight1" class="lowerRight1">
          <button class="lr-button" @click="isLowerRight1Click=!isLowerRight1Click ; outsideClick('lowerRight1')">
            1-9 of {{ totalList }} listings
          </button>
          <div v-if="isLowerRight1Click" class="lr-dropdown-container">
            <div class="lr-upper">
              <p class="lr-upper1">
                No. of Listings
              </p>
              <div class="lr-upper2">
                <!-- in placeholder just use the current value of listings being showed -->
                <input type="number" placeholder="0">
              </div>
            </div>
            <a class="lr-lower">
              <div v-for="(item, index) in listing_menu" :key="index" class="lr-lower1" @click="menuSelected = index">
                <p>{{ item.menu }}</p>
                <div v-if="menuSelected == index" class="lr-submenu">
                  <a v-for="(item, index2) in listing_submenu" :key="index2">{{ item.submenu }}</a>
                </div>
              </div>
            </a>
          </div>
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
  width: auto;
  max-width: 200px;
  height: 40px;
}

.upperLeft1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  width: auto;
  max-width: 200px;
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

.upperLeft1 p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* .upperLeft1-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
} */

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
  align-items: flex-start;
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

.lowerRight1 {
  position: relative;
}

.lowerRight1:focus-within .lr-button {
  color: #3B5998;
  font-weight: bold;
}

.lr-button:hover {
  color: #ADBBD8;
}
.lr-button:active,
.lr-button:focus,
.lr-button:focus{
  color: #3B5998;
  font-weight: bold;
}

/* lower right1 dropdown */
.lr-dropdown-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;

  width: 239px;
  height: 167px;

  border-radius: 16px;
  border: 1px solid #7070703D;
  box-shadow: 0px 1px 6px #00000029;

  background: #FFFFFF;

  position: absolute;
  right: 0;

  margin-top: 9.5px;
}

.lr-upper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 207px;
  height: 38px;

  border: 1px solid #383A3D;
  border-radius: 4px;
}

.lr-upper:hover {
  border: 1px solid #3B5998;
  color: #3B5998;
}

.lr-upper1 {
  display: flex;
  justify-content: center;
  width: 60%;
}

.lr-upper2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;

  border-left: 1px solid #383A3D;
}
.lr-upper2 input {
  width: 70%;
  outline: none;
}

.lr-lower {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 24px;

  width: 207px;
  position: relative;
  cursor: pointer;
}

.lr-lower1:hover {
  color: #3B5998;
}
.lr-lower1:active,
.lr-lower1:focus-within {
  color: #3B5998;
  font-weight: bold;
}

.lr-submenu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;

  padding: 0 16px;

  width: 160px;
  height: 107px;

  position: absolute;
  /* top: 0; */
  background: #FFFFFF;

  margin-left: 225px;
  margin-top: -40px;
  border-radius: 16px;
  border: 1px solid #7070703D;

  box-shadow: 0px 1px 6px #00000029;
}

/* lower right1 dropdown end--------- */

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
  z-index: 1;
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
