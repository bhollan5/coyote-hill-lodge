<template>
<div id="header">
  <div class="options">
    <router-link tag="div" to="/">Rooms & Rates</router-link>
    <router-link tag="div" to="/">Explore Pagosa</router-link>
    <img src="@/assets/long-logo.png">
    <router-link tag="div" to="/">Reviews</router-link>
    <router-link tag="div" to="/">Contact</router-link>
  </div>
  <img src="@/assets/misc_image_assets/white-line-shadow.png">
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
  font-size: 20px;
  text-shadow: $text-shadow;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    cursor: pointer;
    transition-duration: .5s;
  }
  div:hover {
    margin-top: -10px;
  }
  img {
    width: 30vw;
  }
}
</style>