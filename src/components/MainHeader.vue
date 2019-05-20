<template>
<div id="header">
  <div class="options">
    <router-link tag="div" to="/">Rooms & Rates</router-link>
    <router-link tag="div" to="/">Explore Pagosa</router-link>
    <img src="@/assets/long-logo.png">
    <router-link tag="div" to="/">Reviews</router-link>
    <router-link tag="div" to="/">Contact</router-link>
  </div>
  <img src="@/assets/misc_image_assets/white-line-shadow.png" class="at-least-1200">
  <img src="@/assets/misc_image_assets/short-white-line-shadow.png" class="at-most-1200">
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";


#header {
  margin-top: 20px;
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
  flex-flow: row wrap;

  div {
    cursor: pointer;
    min-width: 170px;
    transition-duration: .5s;
    flex-basis: 0;
    @media only screen and (max-width: 1000px) {
      order: 2;
      // font-size: 3vw;
      padding-top: 10px;
    }
  }
  div:hover {
    margin-top: -10px;
  }
  img {
    margin-top: -10px;
    width: 30vw;
    flex-basis: 0;
    @media only screen and (max-width: 1000px) {
      order: 1;
      width: 80vw;
    }
  }
}
</style>