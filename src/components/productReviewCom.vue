<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const isOpen = ref(false)

const dropdownRef = ref(null)

onClickOutside(
  dropdownRef,
  (event) => {
    isOpen.value = false
  },
)
</script>

<template>
  <div class="nav">
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
  <hr>
  <div class="nav2">
    <Navbar2Sticky :page-number="1" />
  </div>
  <div>
    <CampaignManagementProductCom />
  </div>
</template>

<style scoped>

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

/* nav 2 */

/* .nav2 {
  margin: 0 auto;
} */

</style>
