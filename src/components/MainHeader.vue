<template>
<div id="header">
  <div class="options">
    <router-link tag="div" to="/">Rooms & Rates</router-link>
    <router-link tag="div" to="/">Explore Pagosa</router-link>
    <img src="@/assets/long-logo.png">
    <router-link tag="div" to="/">Reviews</router-link>
    <router-link tag="div" to="/">Contact</router-link>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";
#header {
  position: absolute;
  width: 100vw;
  color: $white;
}
.options {
  padding: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 30vw;
  }
}
</style>