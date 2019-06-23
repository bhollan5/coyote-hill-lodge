<template>
<div class="full-page" id="landing-banner">
  <div>
    <h1>Home away from home.</h1>
    <h3>Affordable lodgings in Pagosa Springs, Colarado.</h3>
    <a href="https://www.airbnb.com/rooms/31787496?guests=1&adults=1&sl_alternate_dates_exclusion=true&source_impression_id=p3_1558643743_xlTMpaiCRqS0%2BYWn" target="_blank">
      <button class="dark-button">Book Now</button>
    </a>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";

#landing-banner {
  background: url('../../assets/misc_images/main-landing-backdrop.webp');
  background-size: cover;
  display: flex;
  justify-content: space-around;
}

h1 {
  margin-top: 0px;
  padding-top: 45vh;
  color: white;
  text-shadow: $text-shadow;
  font-size: 38px;
  max-width: 500px;
  @media only screen and (max-width: 1000px) {
    padding-top: 50vh;
    padding-bottom: 5vh;
    font-size: 7vw;
  }
} 
h3 {
  color: white;
  font-size: 20px;
  text-shadow: $text-shadow;
}

</style>