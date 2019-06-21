<template>
<div>
  <div class="header-block"></div>
  <div class="full-page" id="contact-backdrop">
    <div id="contact-info">
      <h2>Contact Us</h2>
      <hr>
      <p>4801 County Rd.</p>
      <p>Pagosa Springs, CO 81147-3387</p>
      <p>TEL: 970.731.3387</p>
      <p>EMAIL: </p>
      <a href="https://www.airbnb.com/rooms/31787496?guests=1&adults=1&sl_alternate_dates_exclusion=true&source_impression_id=p3_1558643743_xlTMpaiCRqS0%2BYWn" target="_blank">
        <p>Book with us on Airbnb</p>
      </a>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";

#contact-backdrop {
  background: url('../assets/misc_images/main-landing-backdrop.webp');
  background-size: cover;
  justify-content: space-around;
  padding-top: 50px;
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

#contact-info {
  background: rgba(0,0,0,.5);
  width: 90%;
  max-width: 700px;
  margin-left: 50%;
  padding: 20px;
  color: white;
  transform: translatex(-50%);
  min-height: 100px;
}
a {
  color: white;
}

</style>