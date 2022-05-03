<template>
  <body>
    <nav class="nav">
      <div class="flex1">
        <img src="public/artemis_login_svg/Logo.svg" alt="">
        <p>ARTEMIS</p>
        <p id="subtitle">
          | Case Management
        </p>
      </div>
      <div class="flex2">
        <p id="browse">
          Browse Cases
        </p>
        <a href="" class="r-appbar-counterfeitchecker" />
        <a href="" class="r-appbar-spg" />
        <a href="" class="r-appbar-reportbug" />
        <a href="" class="r-appbar-notification" />
        <div class="flex">
          <p id="burger">
            ☰
          </p>
          <img id="avatar_img" src="/public/avatar_png/Profile2.png" alt="">
          <!-- <div id="dropdown" class="dropdown-avatar">
            <p>My Profile</p>
            <p>My Team</p>
            <p>Go to Search Page</p>
            <p>Logout</p>
          </div> -->
        </div>
      </div>
    </nav>
    <div class="search-box">
      <div class="search-item1">
        <p>Seller Name</p>
        <input type="text" placeholder="Input Seller Name">
      </div>
      <div class="search-item2">
        <button class="r-appbar-search" />
      </div>
    </div>
    <div class="campaign-button">
      <button>Select a Campaign Instead</button>
    </div>
    <div id="bgImage">
      <img src="/public/artemis_login_svg/CM-Landing.svg" alt="">
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

  /* Search box */
  .search-box {
    text-align: left;
    margin: auto;
    max-width: 656px;
    width: 50%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 36px;
    border: 1px solid #383A3D85;

    background: #ffffff;
    margin-top: 50px;
    padding: 10px 0;
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

  .nav a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .nav a:hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #A5B1C9;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;
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

  @media screen and (max-width: 1024px) {
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
