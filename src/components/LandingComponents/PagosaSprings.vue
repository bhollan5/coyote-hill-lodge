<template>
<div class="full-page top-padding" id="pagosa-springs">
  <div id="text-container">
    <h2>Pagosa Springs - Nature at its Best</h2>
    <p>Coyote Hill is surrounded by national forest and gorgeous views of the San Juan Mountains.</p>
    <p>Get outside and enjoy the fresh mountain air. </p>
  </div>
  <div id="forest-image-container">
    <div id="forest-image-shadow"></div>
    <!--<flickity :options="flickityOptions" class="room-image" ref="room-images" v-for="(section, key) in pageData" :key="key" v-if="key == roomOpt">
        <img v-for="image in section.images" v-if="key == 'main'"
        :src="require(`@/assets/main_level/${image}`)" class="carousel-cell">
        <img v-for="image in section.images" v-else-if="key == 'shared'"
        :src="require(`@/assets/shared/${image}`)" class="carousel-cell">
        <img v-for="image in section.images" v-else
        :src="require(`@/assets/lower_level/${image}`)" class="carousel-cell">
      </flickity>-->
    <img src="@/assets/misc_images/forest-hills.webp"
    :style="{
      'margin-top': (scrollPos / 10) - 150 + 'px'
    }">
  </div>
</div>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
  name: 'pagosa',
  data() {
    return {
      scrollPos: 0,
      mouseX: 0,
      mouseY: 0
    }
  },
  components: {
    Flickity,
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
  }
}
</script>

<style scoped lang="scss">
@import "@/globalVars.scss";

#pagosa-springs {
  background: $white;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding-top: 20px;
  }
}

#text-container {
  text-align: left;
  color: black;
  width: 40%;
  h2 {
    padding: 0px;
    font-weight: normal;
  }
  p {
    font-size: 1.5vw;
  }
  @media only screen and (max-width: 800px) {
    width: 90%;
    margin: 0px 5%;
    p {
      font-size: 3vw;
    }
    h2 {
      font-size: 8vw;
    }
  }
}

#forest-image-container {
  width: 40%;
  height: 30vw;
  align-self: start;
  position: relative;
  overflow: hidden;
  img {
    width: 130%;
    margin-left: -15%;
  }
  #forest-image-shadow {
    position: absolute;
    box-shadow: inset 0px 0px 15px rgba(0,0,0,.3);
    height: 100%;
    width: 100%;
  }
  @media only screen and (max-width: 800px) {
    width: 80%;
    height: 55vw;
    margin: 0px 10%;
  }
}

h2 {
  margin-top: 0px;
  padding-top: 30vh;
  font-size: 5vw;
}

</style>