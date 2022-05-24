<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{
  isClick: boolean
}>()

const modal = ref(null)
const isClick2 = ref(props.isClick)
onClickOutside(
  modal,
  (event) => {
    isClick2.value = false
  },
)

const count = ref(0)
</script>

<template>
  <div v-if="isClick2" class="background" @click="$emit('clickBy',isClick2)" />
  <div ref="modal" class="modal-container">
    <div class="upper">
      <p class="upper-title">
        Filters
      </p>
      <button class="upper-btn" @click="isClick2=false;$emit('clickBy',isClick2)">
        X
      </button>
    </div>
    <div class="middle">
      <div class="div-container">
        <!-- search multiple listings -->
        <div class="middle-div">
          <div class="flex-left middle-title">
            <p>Search Multiple Listings</p>
          </div>
          <div class="mid-item-div1">
            <p class="flex-right middle-item">
              Count: {{ count }}
            </p>
            <input class="inputDiv" type="text" placeholder="Input Listing IDs here and Press Enter">
          </div>
          <hr>
        </div>
        <!-- main information -->
        <div class="middle-div">
          <div class="flex-left middle-title2">
            <p>Main Information</p>
          </div>
          <!-- item location -->
          <div class="mid-item-div1">
            <p class="flex-left middle-item">
              Item Location ('---' to show listings with no item location set)
            </p>
            <input class="inputDiv" type="text" placeholder="Input Keywords here">
          </div>
          <!-- seller location -->
          <div class="mid-item-div1">
            <p class="flex-left middle-item">
              Seller Location
            </p>
            <div class="inputDiv-between">
              <input type="text" placeholder="Select Seller Location here">
              <button>
                <p class="r-pagination-forward" />
              </button>
            </div>
          </div>
          <!-- movement information -->
          <div class="mid-item-div1">
            <p class="flex-left middle-item">
              Movement Information
            </p>
            <div class="mid-btn-div-container">
              <div class="mid-btn-div1">
                <button class="mid-btn1 flex-left-column">
                  <p class="btn1-title">
                    DATE MOVED FROM
                  </p>
                  <p class="btn1-subtitle">
                    Add date
                  </p>
                </button>
                <button class="mid-btn2 flex-left-column">
                  <p class="btn1-title">
                    DATE MOVED TO
                  </p>
                  <p class="btn1-subtitle">
                    Add date
                  </p>
                </button>
              </div>
              <div>
                <button class="mid-btn3 flex-left-column">
                  <p class="btn1-title">
                    MOVED BY
                  </p>
                  <input class="btn1-subtitle" placeholder="Add name">
                </button>
              </div>
            </div>
          </div>
          <!-- email and Account Name -->
          <div class="mid-item-div-between">
            <div class="mid-item-div1">
              <p class="flex-left middle-item">
                Email ('---' to show listings with no email set)
              </p>
              <input class="inputDiv2" type="text" placeholder="Input Keywords here">
            </div>
            <div class="mid-item-div1">
              <p class="flex-left middle-item">
                Account Name / Email
              </p>
              <input class="inputDiv2" type="text" placeholder="Input Keywords here">
            </div>
          </div>
          <!-- Account Number and Claim Type -->
          <div class="mid-item-div-between">
            <div class="mid-item-div1">
              <p class="flex-left middle-item">
                Account Number
              </p>
              <input class="inputDiv2" type="text" placeholder="Input Keywords here">
            </div>
            <div class="mid-item-div1">
              <p class="flex-left middle-item">
                Claim Type
              </p>
              <div class="inputDiv2-between">
                <input type="text" placeholder="Select here">
                <button>
                  <p class="r-pagination-forward" />
                </button>
              </div>
            </div>
          </div>
          <!-- Item Class and Date Evidence Captured-->
          <div class="mid-item-div-between">
            <div class="mid-item-div1">
              <p class="flex-left middle-item">
                Item Class
              </p>
              <div class="inputDiv2-between">
                <input type="text" placeholder="Select here">
                <button>
                  <p class="r-pagination-forward" />
                </button>
              </div>
            </div>
            <div class="mid-item-div1">
              <p class="flex-left middle-item">
                Date Evidence Captured
              </p>
              <input class="inputDiv2" type="text" placeholder="Add date">
            </div>
          </div>
          <!-- Item Type -->
          <div class="mid-item-div-between">
            <div class="mid-item-div1">
              <p class="flex-left middle-item">
                Item Class
              </p>
              <div class="inputDiv2-between">
                <input type="text" placeholder="Select here">
                <button>
                  <p class="r-pagination-forward" />
                </button>
              </div>
            </div>
          </div>
          <hr>
        </div>
        <!-- Payment MEthods -->
        <div class="middle-div">
          <PaymentMethodsCom />
          <hr>
        </div>
        <!-- Infringement Indicators -->
        <div class="middle-div">
          <InfringementIndicatorsCom />
          <hr>
        </div>
      </div>
    </div>
    <div class="lower">
      <a href="" class="lower-left">
        Reset Filter
      </a>
      <button class="lower-right">
        Confirm Action
      </button>
    </div>
  </div>
</template>

<style scoped>
/* flex horizontal */
.flex-left {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.flex-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* flex vertical */
.flex-left-column {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

/* ----------------------------------------------------------------------- */
.background {
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 1000vw;
  height: 1000vh;

  background-color: #383A3D;
  opacity: 60%;
  z-index: -1;
}
/* modal container */
.modal-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 784px;
  height: 623px;
  max-width: 100%;
  max-height: 100%;

  background: #FFFFFF;

  border: 1px solid #707070;
  border-radius: 16px;
  opacity: 100%;
}

/* upper styles */
.upper {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
  margin-top: 6px;

  border-bottom: 1px solid #DEDEDF;
  width: 100%;
  margin-bottom: 15px;
}
.upper-title {
  font-size: 18px;
  font-weight: bold;

  color:#383A3D;
}
.upper-btn {
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  border-radius: 50%;

  background: #e8f0ff;
  /* opacity: 33%; */

  top: 0;
  right: 0;

  margin:23px;
}
.upper-btn:hover {
  background: #ADBBD8;
  opacity: 51%;
}

/* middle styles */
.middle {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.middle::-webkit-scrollbar {
  display: none;
}

.div-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 784px;
  height: 100%;
}
.middle-div {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  gap: 11px;

  margin: 0 auto;
  width: 710px;
  padding: 10px 20px;
}
.middle-div hr {
  color: #DEDEDF;
}
.middle-title {
  font-size: 22px;
  font-weight: bold;
  color: #383A3D;
}
.middle-title2 {
  font-size: 22px;
  font-weight: bold;
  color: #383A3D;
  flex-basis: 70px;
}
.middle-item {
  font-size: 14px;
  color: #383A3D;
}

.mid-item-div1 {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.mid-item-div-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* middle button */
.mid-btn-div-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
}
.mid-btn-div1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.mid-btn1 {
  width: 164px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding: 12px;

  border: 1px solid #DEDEDF;

  border-radius: 6px 0 0 6px;
}
.mid-btn2 {
  width: 164px;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;

  padding: 12px;

  border: 1px solid #DEDEDF;
  border-radius: 0 6px 6px 0;
}

.mid-btn3 {
  width: 328px;
  height: 56px;

  padding: 12px;

  border: 1px solid #DEDEDF;
  border-radius: 6px;
}

.btn1-title {
  color: #383A3D;
  font-size: 10px;
  letter-spacing: -0.25px;

  font-weight: bold;
}

.btn1-subtitle {
  color: #B5B5B5;
  font-size: 14px;
  outline: none;
}

/* ----------- */
/* input divs */
.inputDiv {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 38px;

  border-radius: 4px;
  border: 1px solid #DEDEDF;

  padding: 10px 16px;
  margin-bottom: 25px;
  font-size: 14px;
  outline: none;
}

.inputDiv input {
  outline: none;
  border: none;
  width: 250px;
  font-size: 14px;
}

.inputDiv2 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 328px;
  height: 38px;

  border-radius: 4px;
  border: 1px solid #DEDEDF;

  padding: 10px 16px;
  margin-bottom: 25px;
  font-size: 14px;
  outline: none;
}

.inputDiv2 input {
  outline: none;
  border: none;
  width: 250px;
  font-size: 14px;
}

.inputDiv-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 38px;

  border-radius: 4px;
  border: 1px solid #DEDEDF;

  padding: 10px 16px;
  margin-bottom: 25px;
  font-size: 14px;
  outline: none;
}
.inputDiv-between p {
  transform: rotate(90deg);
}

.inputDiv-between input {
  outline: none;
  border: none;
  width: 250px;
  font-size: 14px;
}

.inputDiv2-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 328px;
  height: 38px;

  border-radius: 4px;
  border: 1px solid #DEDEDF;

  padding: 10px 16px;
  margin-bottom: 25px;
  font-size: 14px;
  outline: none;
}
.inputDiv2-between p {
  transform: rotate(90deg);
}

.inputDiv2-between input {
  outline: none;
  border: none;
  width: 250px;
  font-size: 14px;
}

/* lower styles */
.lower {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 26px;

  border-top: 1px solid #DEDEDF;

  margin-top: 15px;
}

.lower-left {
  font-size: 14px;
  text-decoration: underline;
  color: #383A3D;
  font-weight: bold;
}

.lower-right {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 133px;
  height: 48px;

  border-radius: 6px;
  background: #383A3D;

  color: #FFFFFF;
}
</style>
