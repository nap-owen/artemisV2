<script setup lang="ts">
import Navbar1 from './navbar.vue'
import Aftersearch1 from './aftersearch.vue'
import { useCampaignStore } from '~/stores/campaign'

const campaignStore = useCampaignStore()

const props = defineProps<{
  results: []
  campaign: []
}>()

const ucFirst = (str: string) => {
  if (typeof str !== 'string')
    throw new Error('Given value is not a string')

  return str.charAt(0).toUpperCase() + str.slice(1)
}

const getCampaignImage = (name) => {
  name = ucFirst(name).replace(/\(.+?\)/g, '')
    .replace(/[^a-z0-9+]+/gi, '')
    .replace(/\s/g, '')

  return `https://artemisapi.newalchemysolutions.com/jpg/campaigns/${name}.jpg`
}

const text = ref('')
const campaign_text = ref('')

const isClick = ref(false)
const isSearchBarActive = ref(false)

const isClickCampaign = ref(false)

const menuSelected = ref(-1)

const router = useRouter()

const filteredResults = computed(() => text.value ? props.results.filter(r => r.seller_name?.toLowerCase().includes(text.value?.toLowerCase())) : props.results)
const campaignFiltered = computed(() => campaign_text.value ? props.campaign.filter(r => r.campaign_name?.toLowerCase().includes(campaign_text.value?.toLowerCase())) : props.campaign)

// for searching
const isSearchSeller = ref(false)
const seller_name2 = ref()

//
const isActive = (a: boolean) => {
  if (text.value === '') {
    isClick.value = false
    isSearchBarActive.value = false
    return
  }
  if (a === true) {
    isClick.value = true
    isSearchBarActive.value = true
    // emit(isClick, isClick.value)
  }

  else {
    isClick.value = false
    isSearchBarActive.value = false
  }
}

document.addEventListener('click', (event) => {
  const insideElementCampaign = document.getElementById('campaign-container')
  const isClickInsideCampaign = insideElementCampaign?.contains(event.target)

  if (!isClickInsideCampaign) {
    isClickCampaign.value = false
    menuSelected.value = -1
  }
  const insideElementSearchBox = document.getElementById('search-box-container')
  const isClickInsideSearchBox = insideElementSearchBox?.contains(event.target)

  // console.log(isClickInsideSearchBox)
  if (!isClickInsideSearchBox)
    isActive(false)
})

const campaign_menu = reactive<any>([{
  menu: 'Go to Listings',
  to: 'listings',
}, {
  menu: 'Go to Cases',
  to: 'cases',
}])

window.addEventListener('scroll', () => {
  const header = document.querySelector('.search-box')
  const windowPosition = window.scrollY > 20
  header.classList.toggle('search-scrolling', windowPosition)
})

// const campaigns = computed(() => {
//   const lists = ['Sample1', 'Sample2', 'Sample3', 'Sample4']
//   return lists.filter(l => l.toLowerCase().includes(text.value.toLowerCase()))
// })

const goTo = (to: any, data: any) => {
  campaignStore.current.id = data.id
  campaignStore.current.label = data.campaign_name
  campaignStore.current.image = getCampaignImage(data.campaign_name)

  const asaPadong = to === 'listings' ? '/productReview' : '/productReview'

  router.push({ path: asaPadong, query: { campaign_id: data.id } })
}
</script>

<template>
  <body>
    <div class="container">
      <!-- component nav bar here -->
      <Navbar1 />
      <div id="search-box-container" style="position: relative">
        <div class="search-box">
          <div class="search-item1">
            <p>Seller Name</p>
            <!-- when click input 'Seller Name'
            code: ? Input Seller Name : Seller Name
          -->
            <input v-model="text" type="text" placeholder="Input Seller Name" @click="isClick=true">
          </div>
          <div class="search-item2">
            <button class="r-appbar-search btn-search" :class="{'flag btn-slide': isClick}" @click="isActive(isClick)">
              <span>
                {{ isClick ? ' Search' : '' }}
              </span>
            </button>
          </div>
        </div>
        <!-- @click="emit('clickBy', item)" -->
        <div v-if="isSearchBarActive" class="search-dropdown">
          <button v-for="(item, index) in filteredResults" :key="index" class="search-dropdown-item" @click="isSearchSeller=true; seller_name2=item.seller_name">
            <p>{{ item.seller_name }}</p>
            <div class="search-dropdown-item2">
              <p>{{ item.company }}</p>
              <img id="image" :src=" item.campaign_logo " alt="Logo">
            </div>
          </button>
        </div>
      </div>

      <div id="campaign-container" style="position: relative;">
        <div>
          <button class="campaign-button" :class="{'toggled': isClickCampaign}" @click="isClickCampaign=!isClickCampaign">
            Select a Campaign Instead
          </button>
        </div>
        <div v-if="isClickCampaign" class="search-campaign-dropdown">
          <div class="search-campaign">
            <input v-model="campaign_text" type="text" placeholder="Search Campaign">
            <button class="r-appbar-search" />
          </div>
          <a class="search-campaign-box">
            <div v-for="(campaign_item, index2) in campaignFiltered" :key="index2" class="search-campaign-item" @click="menuSelected = index2">
              <img :src="getCampaignImage(campaign_item.campaign_name)" alt="">
              <p>{{ campaign_item.campaign_name }}</p>
              <div v-if="menuSelected == index2" class="campaign-sub-dropdown">
                <a v-for="(item,index) in campaign_menu" :key="index" class="campaign-sub-item" @click="goTo(item.to, campaign_item)">{{ item.menu }}</a>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div id="bgImage">
        <img src="artemis_login_svg/CM-Landing.svg" alt="">
      </div>
    </div>
  </body>
  <div v-if="isSearchSeller">
    <Aftersearch1 :results="props.results" :seller_name="seller_name2" />
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(0deg, #ffffff 0%, #adbbd8 100%) no-repeat;
    width: 100%;
  }
/* Campaign sub dropdown */
.campaign-sub-dropdown {
  position: absolute;

  width: 180px;
  height: 107px;

  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;

  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #7070703D;
  padding: 0 16px;

  font-size: 14px;
  left: 73%;
  margin-top: 50px;
}

.campaign-sub-item {
  cursor: pointer;
}

/* ----------------------- */
/* Campaign search dropdown */
.search-campaign-dropdown {
  position: absolute;

  margin-top: 11px;
  left: 50%;
  transform: translateX(-50%);

  width: 320px;
  height: 345px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 22px 16px;

  background: #FFFFFF;
  border: 1px solid #7070703D;
  border-radius: 16px;
  gap: 23px;

  overflow: visible;
}

.search-campaign {
  width: 285px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 12px;
  font-size: 14px;

  border: 1px solid #DEDEDF;
  border-radius: 4px;
  color: #383A3D;
}

.search-campaign:hover {
  color: #3E88DA;
}

.search-campaign input {
  outline: none;
  border: none;
  width: 88%;
}

.search-campaign-box {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  overflow: scroll;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  padding: 5px 16px;
  width: 740px;
  /* height: 110px; */

  position: relative;
  cursor: pointer;
}

.search-campaign-box::-webkit-scrollbar {
    display: none;
}

.search-campaign-item {
  width: 285px;
  height: 40px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 12px;

  gap: 16px;

}

.search-campaign-item:hover {
  background: #ECF5FF;
  border-radius: 20px;
  color: #3B5998;
}

.search-campaign-item img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.search-campaign-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/* ---------------- */

/* Search-dropdown */
.search-dropdown {
  width: 650px;
  height: 288px;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #7070703D;
  box-shadow: 0px 1px 6px #00000029;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  padding: 24px;

  margin: 0 auto;

  gap: 10px;
  overflow: scroll;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* position */
  margin-top: 10px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.search-dropdown::-webkit-scrollbar {
    display: none;
}

.search-dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  padding: 11px 16px;
  margin: 0 auto;
}

.search-dropdown-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.search-dropdown-item:hover {
  background: #DFE6EE;
  border-radius: 20px;
  color: #8B9DC3;
}

.search-dropdown-item2 {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 12px;
}

.search-dropdown-item2 img {
  widows: 30px;
  height: 30px;
  border-radius: 50%;
}
/* ----------------- */

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    margin: 0 auto;
  }

  /* Search box */
  .search-box {
    text-align: left;
    margin: auto;
    width: 656px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 36px;
    border: 1px solid #383A3D85;

    background: #ffffff;
    padding: 10px 0;
    margin-top: 50px;
  }

  .search-box:hover {
    border: 1px solid #3B5998;
    color: #3B5998;
  }
  .search-box:hover input {
    color: #383A3D;
  }

  .search-box:active,
  .search-box:focus-within {
    border: 2px solid #3B5998;
  }

  .search-item1 {
    margin: 0 40px;
  }

  .search-item1 p {
    font-size: 12px;
    font-weight: bold;
  }

  .search-item1 input {
    font-size: 16px;
  }

  .search-item2 {
    margin: 0 16px;
  }

  .btn-search {
    font-size: 24px;
    width: 48px;
    height: 48px;
    background: #8B9DC3;
    border-radius: 50%;
    color: #ffffff;
    font-family: "AirbnbCereal";
  }

  .btn-slide {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 128px;
    height: 48px;
    border-radius: 24px;
    transition-duration: .1s;
  }

  .btn-slide span {
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
  }

  .search-box input {
    outline: none;
    border: none;
    width: 250%;
  }

  .search-scrolling {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 250px;
    height: 40px;
    z-index: 4;
    position: fixed;
    border: 1px solid #70707033;
  }

  .search-scrolling span {
    display: none;
  }

  .search-scrolling .btn-slide {
    width: 24px !important;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-scrolling .search-item1 {
    margin: 0 16px;
  }

  .search-scrolling .search-item2 {
    margin: 0 12px;
  }

  .search-scrolling .search-item2 button {
    font-size: 12px;
    width: 24px;
    height: 24px;
    background: #8B9DC3;
    color: #ffffff
  }
  .search-scrolling .search-item1 p {
    display: none;
  }

  .search-scrolling .search-item1 input{
    font-size: 14px;
  }
  .search-scrolling .search-item1 input {
    width: 120%;
  }

  @media screen and (max-width:950px) {
    .search-scrolling {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .search-box {
      width: 70%;
    }
    .search-item1 input {
      width: 100%;
    }
  }

  @media screen and (max-width: 425px) {
    .search-box {
      width: 80%;
      height: 50px;
    }
    .search-box button {
      display: none;
    }
    .search-box input {
      font-size: 14px;
    }
  }
  /* campaign design */
  .campaign-button {
    margin-top: 27px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 215px;
    height: 40px;
    border-radius: 20px;
    background: #ffffff;

    font-size: 14px;
    color: #3B5998;
    font-weight: 500;
  }

  .campaign-button:hover {
    background: #ECF5FF;
    border: 1px solid #70707033;
    opacity: 60%;
  }

  .campaign-button:active,
  .campaign-button:focus-within,
  .campaign-button.toggled {
    color: #FFFFFF;
    background: #3B5998;
    border: 1px solid #70707033;
    opacity: 100%;
  }

  @media screen and (max-width: 425px) {
    .campaign-button {
      margin: 27px auto;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 180px;
      height: 40px;
      border-radius: 20px;
      background: #ffffff;

      font-size: 12px;
      color: #3B5998;
      font-weight: bold;
    }
  }

  /* bg design */

  #bgImage {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  /* Nav bar */

</style>
