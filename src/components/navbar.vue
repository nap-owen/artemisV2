<script setup lang="ts">
window.addEventListener('scroll', () => {
  const header = document.querySelector('.nav1')
  const windowPosition = window.scrollY > 20
  header.classList.toggle('scrolling-active', windowPosition)
  header.classList.toggle('nav-scrolling', windowPosition)
})
</script>

<template>
  <div class="nav1">
    <nav class="nav">
      <div class="flex1">
        <img src="artemis_login_svg/Logo.svg" alt="">
        <p>ARTEMIS</p>
        <p id="subtitle">
          | Case Management
        </p>
      </div>
      <div class="flex2">
        <p id="browse">
          Browse Cases
        </p>
        <a id="icon1" href="" class="r-appbar-counterfeitchecker" />
        <a id="icon2" href="" class="r-appbar-spg" />
        <a id="icon3" href="" class="r-appbar-reportbug" />
        <a id="icon4" href="" class="r-appbar-notification" />
        <div class="flex">
          <p id="burger">
            ☰
          </p>
          <img id="avatar_img" src="avatar_png/Profile2.png" alt="">
          <!-- <div id="dropdown" class="dropdown-avatar">
            <p>My Profile</p>
            <p>My Team</p>
            <p>Go to Search Page</p>
            <p>Logout</p>
          </div> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
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
      background: #ECF5FF;
  }
  .nav-scrolling #icon2:hover {
      background: #ECF5FF;
  }
  .nav-scrolling #icon3:hover {
      background: #ECF5FF;
  }
  .nav-scrolling #icon4:hover {
      background: #ECF5FF;
  }

/* flex */
  .nav-scrolling .flex{
    color: #383A3D;
    border: 1px solid #70707033;
    transition: .1s;
  }
  .nav-scrolling .flex:hover p{
      color: #ADBBD8;
  }
  .nav-scrolling .flex:active p{
      color: #FFFFFF;
  }
  .nav-scrolling .nav{
      padding-top: 0px;
      transition: .1s;
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

  #icon1:hover,
  #icon2:hover {
    transform: scale(1.2)
  }

  #icon3:hover,
  #icon4:hover {
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

  .flex:active{
    background: #3B5998;
    border: 1px solid #70707033;
  }
  .flex2 a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transform: scale(1)
  }
  .flex2 a:hover {
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
  }

  #browse:hover {
    width: 150px;
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
