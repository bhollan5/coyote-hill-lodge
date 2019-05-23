<template>
  <div class="full-page" id="rooms">
    <div class="header-block"></div>
    <div id="menu-and-picture-container">
      <div id="room-menu">
        <h3>Rooms and Rates</h3>
        <router-link tag="a" to="/rooms/main">Main Level Suites</router-link>
        <router-link tag="a" to="/rooms/lower">Lower Level Suites</router-link>
        <router-link tag="a" to="/rooms/combined">Combined Suites</router-link>
        <router-link tag="a" to="/rooms/shared">Shared Living Space</router-link>
        <img src="@/assets/misc_image_assets/brown-line.png">
      </div>
      <div id="room-image"></div>
    </div>
    <div id="title-lines">
      <h2>Main Floor Suites</h2>
      <p>$160 per night</p>
    </div>
    <ul id="details">
      <li>up to 5 guests</li>
      <li>1 bedroom</li>
      <li>full kitchen</li>
      <li>living room with pull out couch</li>
      <li>1 bath, with jacuzzi</li>
    </ul>
    <div id="description">
      <p>Enjoy a balcony of the beautiful San Juan Mountains, a jacuzzi bathtub, and a clean, rustic living space with vaulted ceilings and  full living amenities. </p>
      <p>All suites also come with:</p>
    </div>

    <div id="icon-features">
      <div class="icon-feature">
        <img src="@/assets/icons/laundry.png">
        <p>Full laundry access</p>
      </div>
      <div class="icon-feature">
        <img src="@/assets/icons/wifi.png">
        <p>Free wifi</p>
      </div>
      <div class="icon-feature">
        <img src="@/assets/icons/barn.png">
        <p>Horse barn access</p>
      </div>
      <div class="icon-feature">
        <img src="@/assets/icons/more.png">
        <p>More shared amenities »</p>
      </div>
    </div>

    <button class="dark-button">Book Now</button>

    <h3 class="floor-plan-label">Main Level Floor Plan:</h3>
    <img src="@/assets/floor_plans/main-level-floor-plan.png" class="floor-plan">

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    info() {
      return this.$route.params.roomOption;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/globalVars.scss";

#rooms {
  background: $gray;
  color: $white;
}
h3 {
  font-weight: bold;
}
#room-menu {
  
  background: $white;
  height: calc(70vh - 20px);
  width: 20%;
  padding: 10px 15px;
  color: $brown !important;
  a {
    transition-duration: .2s;
    text-align: left;
    color: $brown;
    display: block;
    margin-bottom: 5px;
    padding: 5px;
    &.router-link-active {
      color: $white;
      background: $brown;
      font-weight: bold;
    }
  }
  position: relative;
  img {
    width: 90%;
    position: absolute;
    bottom: 30px;
    left: 5%;
  }
}
#menu-and-picture-container {
  min-height: 70vh;
  width: 80%;
  padding: 70px 10%;
  display:  flex;
  justify-content: space-between;
  #room-image {
    width: 70%;
    height: 70vh;
    background: url('../assets/room_pictures/main_floor.png');
    background-size: cover;
  }
}

h2 {
  font-size: 70px;
  margin: 0px;
  font-weight: normal;
  text-align: left;
}

#title-lines {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px 10%;
  p {
    margin: 0px;
    padding-bottom: 10px;
    font-size: 30px;
  }
}

ul {
  list-style: none;
  display: flex;
  flex-flow:  row  wrap;
  text-align: left;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    li {
      padding-top: 10px;
    }
  }
  margin: 0px;
  padding: 0px 10% 10px;
  width: 70%;
  justify-content: space-between;
}
#description {
  text-align: left;
  p {
    padding: 50px 10% 0px;
    margin: 0px;
    font-size: 20px;
  }
}

#icon-features {
  display: flex;
  padding: 0px 10%;
  justify-content: space-around;
  flex-flow: row wrap;
}

.icon-feature {
  display: flex;
  align-items: center;
  font-size: 25px;
  width: 450px;
  padding: 40px 0px;
  img {
    width: 80px;
    margin-right: 20px;
  }
}

.dark-button {
  margin: 100px 0px;
  width: 20%;
  min-width: 200px;
}

.floor-plan-label {
  text-align: left;
  margin-left: 12%;
  font-size: 30px;
}

.floor-plan {
  width: 100%;
  max-width: 1200px;
  margin-bottom: 100px;
}
</style>