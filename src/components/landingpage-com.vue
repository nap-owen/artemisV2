<script setup lang="ts">
import Navbar1 from './navbar.vue'
const text = ref('')
const displayData = () => {
  alert(text.value)
}

window.addEventListener('scroll', () => {
  const header = document.querySelector('.search-box')
  const windowPosition = window.scrollY > 20
  header.classList.toggle('search-scrolling', windowPosition)
})
</script>

<template>
  <body>
    <div class="container">
      <!-- component nav bar here -->
      <Navbar1 />
      <div class="search-box">
        <div class="search-item1">
          <p>Seller Name</p>
          <!-- when click input 'Seller Name'
            code: ? Input Seller Name : Seller Name
        -->
          <input v-model="text" type="text" placeholder="Input Seller Name">
        </div>
        <div class="search-item2">
          <button class="r-appbar-search" @click="displayData()" />
        </div>
      </div>
      <div class="campaign-button">
        <button>Select a Campaign Instead</button>
      </div>
      <div id="bgImage">
        <img src="artemis_login_svg/CM-Landing.svg" alt="">
      </div>
    </div>
  </body>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }
  body {
    background: linear-gradient(0deg, #ffffff 0%, #adbbd8 100%) no-repeat;
    width: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    margin: 0 auto;
  }

  /* ----------------------------------- */

  /* dropdown avatar */
  /* .dropdown-avatar {
    width: 239px;
    height: 206;

    display: flex;
    flex-direction: column;
    position: absolute;
    text-align: left;

    gap: 24px;

    opacity: 0;
    pointer-events: none;

    background: #ffffff;
    top: 70px;
    right: 430px;
    padding: 20px;
    margin: 0 auto;
    border-radius: 16px;
    font-size: 14px;
    color: #383A3D;
    font-weight: 300;
  } */

  /* .dropdown-avatar .show {
    opacity: 1;
    pointer-events: auto;
  } */

  /* Search bar effect after Scrolling  */

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

  .search-item1 {
    margin: 0 40px;
  }

  .search-item1 p {
    font-size: 12px;
  }

  .search-item1 input {
    font-size: 16px;
  }
  .search-item1 p {
    font-weight: bold;
  }

  .search-item2 {
    margin: 0 16px;
  }

  .search-box button {
    font-size: 24px;
    width: 48px;
    height: 48px;
    background: #8B9DC3;
    border-radius: 50%;
    color: #ffffff;
  }

  .search-box input {
    outline: none;
    border: none;
  }

  .search-scrolling {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 300px;
    height: 40px;
    z-index: 4;
    position: fixed;
    border: 1px solid #70707033;
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
    border-radius: 50%;
    color: #ffffff
  }
  .search-scrolling .search-item1 p {
    display: none;
  }

  .search-scrolling .search-item1 input{
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    .search-box {
      width: 80%;
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
    margin: 27px auto;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 215px;
    height: 40px;
    border-radius: 20px;
    background: #ffffff;

    font-size: 14px;
    color: #3B5998;
    font-weight: bold;
  }

  .campaign-button:hover {
    background: #ECF5FF;
    border: 1px solid #70707033;
    opacity: 60%;
  }

  .campaign-button:active {
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
