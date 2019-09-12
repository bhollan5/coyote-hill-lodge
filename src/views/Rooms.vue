<template>
  <div class="full-page" id="rooms">
    <div class="header-block"></div>
    <div id="menu-and-picture-container">
      <div id="room-menu">
        <h3 style="font-size:22px;">Rooms and Rates</h3>
        <router-link tag="a" to="/rooms/main">Main Level Suites</router-link>
        <router-link tag="a" to="/rooms/lower">Lower Level Suites</router-link>
        <!--<router-link tag="a" to="/rooms/combined">Combined Suites</router-link>-->
        <router-link tag="a" to="/rooms/shared">Shared Gathering Areas</router-link>
        <img src="@/assets/misc_image_assets/brown-line.png" class="desktop-only">
      </div>

      <flickity :options="flickityOptions" class="room-image" ref="room-images" v-for="(section, key) in pageData" :key="key" v-if="key == roomOpt">
        <img v-for="image in section.images" v-if="key == 'main'"
        :src="require(`@/assets/main_level/${image}`)" class="carousel-cell">
        <img v-for="image in section.images" v-else-if="key == 'shared'"
        :src="require(`@/assets/shared/${image}`)" class="carousel-cell">
        <img v-for="image in section.images" v-else
        :src="require(`@/assets/lower_level/${image}`)" class="carousel-cell">
      </flickity>

    </div>
    <div id="room-info-container">
      <img src="@/assets/lake-bg.png" class="bg-image">
      <div id="title-lines">
        <h2>{{info.title}}</h2>
        <p>{{info.price}}</p>
      </div>
      <ul id="details" v-if="roomOpt != 'shared'">
        <li>up to 4 guests</li>
        <li>1 bedroom</li>
        <li v-if="roomOpt == 'lower'">kitchenette</li>
        <li v-if="roomOpt == 'main'">full kitchen</li>
        <li>living room with pull out couch</li>
        <li>jacuzzi bathtub</li>
      </ul>
      <div id="description">
        <p>{{info.description}}</p>
        <p v-if="roomOpt != 'shared'">All suites also come with:</p>
      </div>

      <div id="icon-features" v-if="roomOpt != 'shared'">
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

    </div>

    <button class="dark-button" style="position: relative;">Book Now</button>

    <h3 class="floor-plan-label" v-if="roomOpt == 'main'">Main Level Floor Plan:</h3>
    <h3 class="floor-plan-label" v-if="roomOpt == 'lower'">Lower Level Floor Plan:</h3>

    <img src="@/assets/floor_plans/main-level-floor-plan.png" class="floor-plan"
    v-if="roomOpt == 'main'">
    <img src="@/assets/floor_plans/lower-level-floor-plan.png" class="floor-plan"
    v-if="roomOpt == 'lower'">

  </div>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        autoPlay: true
        // any options from Flickity can be used
      },
      pageData: {
        main: {
          title: 'Main Floor Suites',
          description: 'Enjoy a balcony of the beautiful San Juan Mountains, a jacuzzi bathtub, and a clean, rustic living space with vaulted ceilings and full living amenities.',
          price: '$160 per night',
          images: [
            'main1.webp',
            'main2.webp',
            'main3.webp',
            'main4.webp',
            'main5.webp',
            'main6.webp',
            'main7.webp',
            'main8.webp'
          ]
        },
        shared:  {
          title: 'Shared Gathering Areas',
          description: 'All suites have full access to several lounges with board games, video games, TVs, fireplaces, and more. Guests also enjoy access to full laundry amenities, a horse barn, and a patio with a fireplace for outdoor parties',
          price: '',
          images: [
            'dining.webp',
            'shared_space.webp',
            'shared_space_upstairs.webp',
            'exterior1.webp',
            'exterior2.webp',
            'exterior3.webp',
            'exterior4.webp',
            'exterior5.webp',
            'exterior6.webp',
          ]
        },
        lower: {
          title: 'Lower Floor Suites',
          description: 'This clean, rustic suite comes with  a bedroom, a living room with a pull out couch, and a jacuzzi bathtub. Enjoy a patio with Adirondack chairs around firepit outside, perfect for parties with view of the San Juan Mountains.',
          price: '$110 per night',
          images: [
            'lower1.webp',
            'lower2.webp',
            'lower3.webp',
          ]
        },
      }
    }
  },
  components: {
    Flickity,
  },
  computed: {
    roomOpt() {
      return this.$route.params.roomOption;
    }, info() {
      if (this.pageData[this.roomOpt]) {
        return this.pageData[this.roomOpt]
      } else {
        return 0;
      }
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
  @media only screen and (max-width: 1370px) {
    width: 90%;
    height: calc(50vh - 20px);
  }
  // min-width:  300px;
  padding: 10px 15px;
  color: $brown !important;
  a {
    transition-duration: .2s;
    text-align: left;
    color: $brown;
    display: block;
    margin-bottom: 5px;
    padding: 5px;
    font-size: 18px;
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
  flex-flow: row wrap;
  justify-content: space-between;
  .room-image {
    width: 70%;
    @media only screen and (max-width: 1370px) {
      width: calc(90% + 30px);
      margin-top: 20px;
      height: 50vh;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    height: 70vh;
    // background: url('../assets/room_pictures/main_floor.png');
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
  position: relative;
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
#details {
  position: relative;
}
#description {
  text-align: left;
  position: relative;
  p {
    padding: 50px 10% 0px;
    margin: 0px;
    font-size: 20px;
  }
}

#icon-features {
  display: flex;
  padding: 0px 10%;
  position: relative;
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
.desktop-only {
  @media only screen and (max-width: 1350px) {
    display: none;
  }
}

#room-info-container {
  padding-top: 100px;
  overflow-y: hidden;
  position: relative;
  padding-bottom: 50px;
  .bg-image {
    margin-top: -100px;
    position: absolute;
    left: 0px;
    z-index: 0;
    width: 100%;
    filter: brightness(50%);
  }
}
</style>