<template>
<div class="full-page" id="landing-banner">
  <div>
    <h1>Home away from home.</h1>
    <button class="dark-button">Book Now</button>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";

#landing-banner {
  background: url('../../assets/misc_images/main-landing-backdrop.png');
  background-size: cover;
  display: flex;
  justify-content: space-around;
}

h1 {
  margin-top: 0px;
  padding-top: 45vh;
  color: white;
  text-shadow: $text-shadow;
  font-size: 3vw;
  max-width: 500px;
  @media only screen and (max-width: 1000px) {
    padding-top: 50vh;
    padding-bottom: 5vh;
    font-size: 7vw;
  }
}

</style>