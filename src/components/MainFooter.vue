<template>
<div id="footer">
  <div id="left-footer-col">
    <router-link to="/" id="short-logo">
      <img src="@/assets/short-logo.png" alt="Coyote Hill Logo">
    </router-link>
    <a href="https://www.airbnb.com/rooms/31787496?guests=1&adults=1&sl_alternate_dates_exclusion=true&source_impression_id=p3_1558643743_xlTMpaiCRqS0%2BYWn" id="airbnb" target="_blank">
      <img src="@/assets/icons/airbnb.png">
    </a>
    <a href="https://www.facebook.com/Coyote-Hill-Lodge-101071779983973/" id="facebook" target="_blank">
      <img src="@/assets/icons/facebook.png">
    </a>
    <div id="footer-contact-info">
      <h4>Contact</h4>
      <hr>
      <p>4801 County Rd.</p>
      <p>Pagosa Springs, CO 81147-3387</p>
      <p>TEL: 970.731.3387</p>
      <p>EMAIL: </p>
    </div>
  </div>
  <div id="right-footer-col">
    <div id="footer-links">
      <h4>Links</h4>
      <hr>
      <router-link to="/"><p>Home</p></router-link>
      <router-link to="/explore-pagosa"><p>Explore Pagosa</p></router-link>
      <router-link to="/reviews"><p>Reviews</p></router-link>
      <router-link to="/contact"><p>Contact</p></router-link>
    </div>
    <div id="footer-room-links">
      <h4>Rooms</h4>
      <hr>
      <router-link to="/rooms/main"><p>Main Level</p></router-link>
      <router-link to="/rooms/lower"><p>Lower Level</p></router-link>
      <router-link to="/rooms/shared"><p>Shared Living Space</p></router-link>
    </div>
  </div>
  <div id="copyright">
    © Copyright 2019. All Rights Reserved. Website design by Startup Stirfry.
  </div>
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";

#footer {
  background: $brown;
  display: flex;
  justify-content: space-around;
  padding: 50px 0px;
  flex-flow: row wrap;
  box-shadow: 0px 0px 15px rgba(0,0,0,.5);
}

#left-footer-col {
  display: grid;
  min-width: 330px;
  grid-template-columns: 80% 20%;
  grid-template-rows: 1fr 1fr 3fr;
  #short-logo {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    img {
      width: 220px;
    }
  }
  #airbnb {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  #facebook {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
  #footer-contact-info {
    margin-top: 50px;
  }
}
#right-footer-col {
  min-width: 330px;
}

h4 {
  color: white;
  font-size: 28px;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;

}
p {
  color: white;
  text-align: left;
  margin: 10px 0px;
}
a {
  text-decoration: none;
  p{
    transition-duration: 1s;
    text-decoration: none;
    &:hover {
      margin-left: 5px;
    }
  }
}
#footer-room-links {
  margin-top: 50px;
}

#copyright {
  position: absolute;
  color: white;
  opacity: .5;
  bottom: 5px;
}

</style>