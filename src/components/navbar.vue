<script setup lang="ts">

const isOpen = ref(false)

window.addEventListener('scroll', () => {
  const header = document.querySelector('.nav1')
  const windowPosition = window.scrollY > 20
  header.classList.toggle('scrolling-active', windowPosition)
  header.classList.toggle('nav-scrolling', windowPosition)
})

document.addEventListener('click', (event) => {
  const insideElement = document.getElementById('dropdown-container')
  const isClickInside = insideElement?.contains(event.target)
  if (!isClickInside)
    isOpen.value = false
})

</script>

<template>
  <div class="nav1">
    <nav class="nav">
      <div class="flex1">
        <img src="artemis_login_svg/CM_Logo.svg" alt="">
        <p>ARTEMIS</p>
        <p id="subtitle">
          | Case Management
        </p>
      </div>
      <div class="flex2">
        <p id="browse">
          Browse Cases
        </p>
        <div class="icon1">
          <a id="icon1" href="" class="r-appbar-counterfeitchecker" />
          <tooltip id="tooltip1" text="Access Counterfeit Checker" />
        </div>
        <div class="icon2">
          <a id="icon2" href="" class="r-appbar-spg" />
          <tooltip id="tooltip2" text="Submissions Pack Monitoring Page" />
        </div>
        <div class="icon3">
          <a id="icon3" href="" class="r-appbar-reportbug" />
          <tooltip id="tooltip3" text="Report a Bug" />
        </div>
        <a id="icon4" href="" class="r-appbar-notification" />
        <div id="dropdown-container" style="position: relative">
          <button class="flex" @click="isOpen = !isOpen">
            <p id="burger">
              ☰
            </p>
            <img id="avatar_img" src="avatar_png/Profile2.png" alt="">
          </button>
          <menuDropdown-navbar :is-open="isOpen" />
          <!-- <div v-if="isOpen" class="dropdown">
            <a v-for="(menuitem, index) in menu" :key="index" :href="menuitem.link">{{ menuitem.title }}</a>
            <hr>
            <a id="logout" href="">Logout</a>
          </div> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

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

/* Nav bar effect after Scrolling  */
  .scrolling-active {
    background-color: #fff;
    z-index: 2;
    transition: .1s;
  }
  .nav-scrolling {
    transition: .1s;
    position: fixed;
    left: 0;
    box-shadow: 0px 3px 6px #00000029;
    top: 0;
    padding-top: 19px;
    padding-bottom: 17px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .nav-scrolling p,
  .nav-scrolling a{
    color: #383A3D;
    transition: .1s;

  }
/* browse */
  .nav-scrolling .flex2 p:hover {
      color: #ADBBD8;
  }
  .nav-scrolling #browse:hover {
      background: #ECF5FF;
  }

/* icon */
  .nav-scrolling .flex2 a:hover {
      color: #ADBBD8;
  }
  .nav-scrolling #icon1:hover {
      background: #ECF5FF !important;
      transform: scale(1.2)
  }
  .nav-scrolling #icon2:hover {
      background: #ECF5FF !important;
      transform: scale(1.2)
  }
  .nav-scrolling #icon3:hover {
      background: #ECF5FF !important;
      transform: rotate(45deg);
  }
  .nav-scrolling #icon4:hover {
      background: #ECF5FF !important;
      transform: rotate(45deg);
  }

/* flex */
  .nav-scrolling .flex{
    color: #383A3D;
    border: 1px solid #70707033;
    transition: .1s;
  }
  .nav-scrolling .flex:hover p {
      color: #ADBBD8 ;
      /* color: #FFFFFF; */
  }
  .nav-scrolling .flex:active{
      color: #FFFFFF !important;
  }
  .nav-scrolling .nav{
      padding-top: 0px;
      transition: .1s;
  }

  .nav-scrolling .dropdown {
    top: calc(100% + 25px);
  }

  /* ----------------------------------- */

    /* nav bar design */

  .nav1 {
    display: inline-block;
    width: 100%;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    /* padding: 20px 80px; */
    max-width: 1240px;
    margin: 0 auto;
  }
  .nav img {
    width: 42px;
  }

  .nav p {
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1.28px;
  }

  .flex2 #icon1:hover,
  .flex2 #icon2:hover {
    transform: scale(1.2)
  }

  .flex2 #icon3:hover,
  .flex2 #icon4:hover {
    transform: rotate(45deg);
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    gap: 10px;
    border-radius: 20px;
    width: 80px;
    height: 40px;
    background: #ffffff;
    color: #383A3D;
    margin-left: 10px;
  }

  .flex:hover img{
    opacity: 70%;
  }
  .flex:hover {
    color: #ECF5FF;
    border: 1px solid #70707033;
  }

  .flex:active,
  .flex:focus-within{
    background: #3B5998;
    border: 1px solid #70707033;
    transition: .1s;
    color: #ECF5FF;
  }
  .flex2 #icon1,
  .flex2 #icon2,
  .flex2 #icon3,
  .flex2 #icon4 {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transform: scale(1)
  }
  .flex2 #icon1:hover,
  .flex2 #icon2:hover,
  .flex2 #icon3:hover,
  .flex2 #icon4:hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #A5B1CA;
  }
  /* .flex:active .dropdown-avatar {
    display: flex;
  } */

  #avatar_img {
    width: 30px;
    border-radius: 50%;
    border: 1px solid #eb77408c;
  }

  #subtitle {
    font-weight: 500;
  }

  #browse {
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    font-size: 14px;
    /* font-weight:bold; */
  }

  #browse:hover {
    width: 140px;
    height: 40px;
    background: #A5B1CA;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex1 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    color: #ffffff;
  }

  .flex2 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #ffffff;
  }

  /* media */

  @media screen and (max-width:1120px) {
    .nav-scrolling #browse {
      display: none;
    }
  }

  @media screen and (max-width: 1024px) {
    .nav {
      padding: 20px 50px;
      max-width: 1240px;
      margin: 0 auto;
    }

    .nav-scrolling {
      padding: 20px 20px;
      max-width: 1240px;
      margin: 0 auto;
    }
    .nav p {
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1.28px;
    }

    .nav a {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    .nav img {
      width: 38px;
    }
    #browse {
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 125px;
      height: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .nav {
      padding: 20px 50px;
      max-width: 1240px;
      margin: 0 auto;
    }
    .nav p {
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1.28px;
    }

    .nav a {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
    }
    .nav img {
      width: 32px;
    }
    #browse {
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 125px;
      height: 40px;
      display: none;
    }
    #subtitle {
      font-weight: 500;
      display: none;
    }
    .flex {
      padding: 5px;
      gap: 10px;
      border-radius: 20px;
      width: 40px;
      height: 40px;
      background: #ffffff;
      color: #383A3D;
      margin-left: 10px;
    }
    #burger {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    .nav {
      padding: 20px 30px;
      max-width: 1240px;
      margin: 0 auto;
    }
    .nav p {
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1.28px;
      display: none;
    }
    .nav img {
      min-width: 32px;
    }

  }
</style>
