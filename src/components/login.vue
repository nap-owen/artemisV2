<script setup lang="ts">

const router = useRouter()

const username = ref('')
const password = ref('')

const getData = () => {
  console.warn('values:', username.value, password.value)
  router.push('/landingpage')
}
</script>

<template>
  <body>
    <div id="body">
      <div class="body-item1">
        <img src="artemis_login_svg/Logo.svg" alt="">
        <h1 class="title">
          Artemis.<span class="small">cm</span>
        </h1>
        <p class="welcome-text">
          Welcome back! Please sign in to start your session.
        </p>
      </div>
      <div class="body-item2">
        <div class="textbox">
          <input v-model="username" type="text" placeholder="Username" class="textbox-items">
          <p class="r-login-user textbox-items" />
        </div>
        <div class="textbox">
          <input v-model="password" placeholder="Password" type="password" class="textbox-items">
          <p class="r-login-password textbox-items" />
        </div>
        <button type="button" class="button" @click="getData()">
          Login
        </button>
      </div>
      <p class="footer">
        Accelerated Research, Trademark Enforcement and Management Information System Version 2 &#169; 2021
      </p>
    </div>
    <div>
      <img id="bgImage" src="artemis_login_svg/CM-Login.svg" alt="BG">
    </div>
  </body>
</template>

<style scoped>

body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(1deg, #ADBBD8 0%, #FFFFFF 100%) no-repeat;
    height: 100vh;
    width: 100%;
    gap: 50px;
    padding: 50px;
}

#body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 27px;
}

.body-item1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5.5px;
}

.body-item2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
}

/* component style - login */
.welcome-text {
    font-size: 16px;
    opacity: 50%;
    color: var(--f-clr-dark);
}

.small {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 1.28px;
    color: var(--f-clr-dark);
    font-weight: 900;
}

.title {
    font-size: 36px;
    letter-spacing: 2.88px;
    color: var(--f-clr-dark);
    font-weight: bold;
}

/* textbox */
.textbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 328px;
    height: 38px;
    background: #FFFFFF;
    padding: 0 16px;
    border-radius: 4px;
    border: 1px solid #DEDEDF;
}

.textbox-items {
    color: var(--f-clr-dark);
    opacity: 50%;
    border: none;
    outline: none;
}

.textbox:hover{
    border: 1px solid #3C97DC;
    color: #3C97DC;
}

.textbox:hover p {
    color: #3C97DC;
    opacity: 100%;
}
.textbox:hover input {
    color: var(--f-clr-dark);
    opacity: 100%;
}

.textbox:focus-within input{
    color: var(--f-clr-dark);
    opacity: 100%;
}

.textbox:focus-within p{
    color: #3C97DC;
    opacity: 100%;
}

.textbox:focus-within{
    border: 1px solid #3C97DC;
    color: #3C97DC;
}

.textbox:active {
    border: 1px solid #3B5998;
}

.textbox:active p {
    color: #3B5998;
    opacity: 100%;
}

.button {
    width: 328px;
    height: 36px;
    background: #3E88DA;
    color: #FFFFFF;
    opacity: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}

.button:hover {
    background: #8B9DC3;
}

.button:active {
    background: #3B5998;
    opacity: 100%;
}

.button btn {
    font-size: 14px;
    letter-spacing: 1.25px;
}

/* footer */
.footer {
    font-size: 12px;
    letter-spacing: 0.21px;
    font-weight: 500;
    padding-top: 118px;
    min-width: 328px;
}

/* media queries */

@media screen and (max-width: 1024px) {
    #body img {
        width: 100px;
    }
    #body {
        margin: 0 auto;
    }
    .footer {
        padding-top: 30px;
        max-width: 450px;
    }
    body {
        gap: 50px;
    }
    #bgImage {
        width: 390px;
    }
}

@media screen and (max-width: 768px) {
    #body img {
        width: 100px;
    }
    #body {
        margin: 0 auto;
        padding-top: 100px;
    }
    body {
        display: block;
        position: relative;
    }
    #bgImage {
        display: inline-block;
        position: absolute;
        top: 250px;
        right: 0px;
        left: 0px;
        bottom: 250px;
        opacity: 7%;
        z-index: 1;
        margin-right: auto;
        margin-left: auto;

        width: 300px;
    }
}

@media screen and (max-width: 425px) {
    img {
        width: 100px;
    }
    #body {
        margin: 0 auto;
        padding-top: 50px;
    }
    .textbox {
        width: 250px;
        height: 38px;
        padding: 0 16px;
        border-radius: 4px;
    }
    .button {
        width: 250px;
        height: 36px;
    }
    .welcome-text {
        max-width: 250px;
    }
    .footer {
        padding-top: 30px;
        max-width: 250px;
    }

    #bgImage {
        width: 250px;
    }
}

</style>
