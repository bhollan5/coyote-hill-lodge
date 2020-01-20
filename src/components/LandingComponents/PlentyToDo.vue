<template>
<div class="full-page" id="plenty-to-do">
  <div class="dark-container">
    <img src="@/assets/icons/map.png">
    <h3>Plenty to Do</h3>
    <hr>
    <p>Situated on 200 acres just minutes from downtown Pagosa Springs, Colorado. You'll never run out of things to do.</p>
    <router-link tag="p" to="/explore-pagosa" class="white-link">Explore Pagosa Springs »</router-link>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";

#plenty-to-do {
  background: url('../../assets/misc_images/plenty-to-do-backdrop.png');
  background-size: cover;
  display: flex;
  // justify-content: space-around;
}

h1 {
  margin-top: 0px;
  padding-top: 45vh;
  color: white;
  text-shadow: $text-shadow;
  font-size: 3vw;
  max-width: 500px;
}

</style>