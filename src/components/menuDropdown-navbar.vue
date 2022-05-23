<script setup lang="ts">

const props = defineProps<{
  isOpen: boolean
}>()

const menu = [{
  title: 'My Profile',
  link: '#',
}, {
  title: 'My Team',
  link: '#',
}, {
  title: 'Go to Search Page',
  link: '#',
}]

</script>

<template>
  <div v-if="props.isOpen" class="dropdown">
    <a v-for="(menuitem, index) in menu" :key="index" :href="menuitem.link">{{ menuitem.title }}</a>
    <hr>
    <a id="logout" href="/">Logout</a>
  </div>
</template>

<style scoped>
/* dropdown styles */
.dropdown {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  width: 239px;
  height: 206px;
  background: #FFFFFF;
  border-radius: 16px;
  text-align: left;
  color: #383A3D;

  position: absolute;
  top: calc(100% + 10px);
  right: 15%;
  box-shadow: 0px 1px 6px #00000029;
  font-size: 14px;
  z-index: 3;
}

.dropdown a {
  padding-left: 15px;
}

.dropdown a:hover {
  color: #ADBBD8;
}

.dropdown #logout:hover {
  color: #E3707F;
}

.dropdown hr {
  color: #383A3D26;
}

/* ---------------- */
</style>
