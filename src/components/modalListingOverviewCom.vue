<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
const isOpen = ref(false)
const { x, y } = useWindowScroll()

const props = defineProps<{
  isClick: boolean

  seller_name: string
  idNumber: number
  campaign: string
  campaign_logo: string
  platform_logo: string
  platform: string
  list_info: string
  preview_img: string
  product_url: string
  seller_url: string

}>()

const clicked = ref(props.isClick)
</script>
<template>
  <div class="modal-container">
    <!-- navbar -->
    <div v-if="y>=0 && y<100" class="nav">
      <div class="flex1">
        <img src="artemis_login_svg/CM_Logo.svg" alt="">
        <p> ARTEMIS CM</p>
        <p>| Campaign Management</p>
      </div>
      <div class="flex2">
        <p id="browse">
          Browse Cases
        </p>
        <div class="icon1">
          <a id="icon1" href="" class="r-appbar-counterfeitchecker" />
          <Tooltip id="tooltip1" text="Access Counterfeit Checker" />
        </div>
        <div class="icon2">
          <a id="icon2" href="" class="r-appbar-spg" />
          <Tooltip id="tooltip2" text="Submissions Pack Monitoring Page" />
        </div>
        <div class="icon3">
          <a id="icon3" href="" class="r-appbar-reportbug" />
          <Tooltip id="tooltip3" text="Report a Bug" />
        </div>
        <a id="icon4" href="" class="r-appbar-notification" />
        <div id="dropdown-container" ref="dropdownRef" style="position: relative">
          <button class="flex" @click="isOpen = !isOpen">
            <p id="burger">
              ☰
            </p>
            <img id="avatar_img" src="avatar_png/Profile2.png" alt="">
            <menuDropdown-navbar :is-open="isOpen" />
          </button>
        </div>
      </div>
    </div>
    <div v-else class="nav2">
      <a class="nav2-item" href="">Main Info</a>
      <a class="nav2-item" href="">Infringement</a>
      <a class="nav2-item" href="">Seller Info</a>
      <a class="nav2-item" href="">Payment Accounts</a>
      <a class="nav2-item" href="">Purchase Details</a>
    </div>
    <hr>
    <ListingOverviewProductCom
      :id-number="props.idNumber"
      :seller_name="props.seller_name"
      :campaign="props.campaign"
      :campaign_logo="props.campaign_logo"
      :platform_logo="props.platform_logo"
      :platform="props.platform"
      :list_info="props.list_info"
      :preview_img="props.preview_img"
    />
    <button @click="clicked=false; $emit('clickBy', clicked)">
      close overview
    </button>
  </div>
</template>

<style scoped>
.modal-container {
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index: 2;
  height: 100vh;
  width: 100vw;
  background: #FFFFFF;
}

hr {
  color: #707070;
  opacity: 20%;
}

/* tooltip styles */
#tooltip1,
#tooltip2,
#tooltip3 {
  display: none;
  margin: 10px auto;
  position: absolute;
  z-index: 3;
}
/* ---------------- */

/* div tooltip */
.icon1:hover #tooltip1,
.icon2:hover #tooltip2,
.icon3:hover #tooltip3 {
  display: flex;
}

/* ----------------- */

/* nav */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;

  padding: 20px;
  background: #FFFFFF;

  /* border-bottom: 1px solid #e7e7e7; */
}
/* flex1 */
.flex1 {
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 8px;
}

.flex1 p {
  font-size: 16px;
  color: #3B5998;
  font-weight: bold;
  letter-spacing: 1.28px;
}

/* flex2 */

.flex2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

#browse {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 15px;

  width: 123px;
  height: 40px;
  color: #383A3D;

  font-size: 14px;
}

#browse:hover {
  color: #ADBBD8;
  background: #ECF5FF;
  border-radius: 20px;
}

.flex2 #icon1,
.flex2 #icon2,
.flex2 #icon3,
.flex2 #icon4{
  display:flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.flex2 #icon1:hover,
.flex2 #icon2:hover,
.flex2 #icon3:hover,
.flex2 #icon4:hover{
  background:#ECF5FF;
  color: #ADBBD8;
  border-radius: 50%;
}

.flex2 #icon1,
.flex2 #icon2 {
  transform: scale(1);
}

.flex2 #icon1:hover,
.flex2 #icon2:hover {
  transform: scale(1.2);
}

.flex2 #icon3:hover,
.flex2 #icon4:hover {
  transform: rotate(45deg)
}

/* dropdown container */
#dropdown-container{
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #70707033;

  margin-left: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

}

#dropdown-container:hover {
  background: #ECF5FF;
  box-shadow: 0px 1px 2px #00000029;
  color: #ADBBD8;
}

#dropdown-container:hover img {
  opacity: 50%;
}

#dropdown-container:active,
#dropdown-container:focus-within {
  background: #3B5998;
  color: #FFFFFF;
  opacity: 100%;
}

#avatar_img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #EB77408C;
  margin-right: 8px;
}

#burger {
  font-weight: bold;
  margin-left: 15px;
}

.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    height: 40px;
}

/* nav2 */
.nav2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    max-width: 1240px;
    padding: 20px;
    position: sticky;
}

</style>
