<template>
<div class="full-page" id="barn">
  <div class="dark-container">
    <img src="@/assets/icons/barn.png">
    <h3>Horse Barn</h3>
    <hr>
    <p>Enjoy the full Western experience with our horse riding accomadations.</p>
    <router-link tag="p" to="/" class="white-link">Learn More »</router-link>
    <br><br>
    <button class="dark-button">Book Now</button>

  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";

#barn {
  background: url('../../assets/misc_images/barn-backdrop.png');
  background-size: cover;
  display: flex;
  background-position: 0px -20px;
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

.dark-button {
  font-size: 1.5vw;
  font-weight: bold;
  @media only screen and (max-width: 1000px) {
    font-size: 5vw;
  }
}

</style>