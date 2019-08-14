<template>
<div class="full-page" id="barn">
  <div class="dark-container">
    <img src="@/assets/icons/barn.png">
    <h3>Horse Barn</h3>
    <hr>
    <p>Enjoy the full Western experience with our horse riding accomadations.</p>
    <!--<router-link tag="p" to="/rooms" class="white-link">Learn More »</router-link>-->
    <br><br>
    <a href="https://www.airbnb.com/rooms/31787496?guests=1&adults=1&sl_alternate_dates_exclusion=true&source_impression_id=p3_1558643743_xlTMpaiCRqS0%2BYWn" target="_blank">
      <button class="dark-button">Book Now</button>
    </a>

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