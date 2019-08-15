<template>
<div class="full-page top-padding" id="pagosa-springs">
  <div id="text-container">
    <h2>Pagosa Springs - Nature at its Best</h2>
    <p>Coyote Hill is surrounded by national forest and gorgeous views of the San Juan Mountains.</p>
    <p>Get outside and enjoy the fresh mountain air. </p>
  </div>
  <flickity :options="flickityOptions" class="room-image" id="forest-image-container" ref="images">
      <img src="@/assets/misc_images/forest-hills.webp"
    :style="{
      'margin-top': (scrollPos / 10) - 150 + 'px'
    }">
    <img src="@/assets/misc_images/barn-backdrop.png"
    :style="{
      'margin-top': (scrollPos / 10) - 150 + 'px'
    }">
    <img src="@/assets/misc_images/firepit.jpg"
    :style="{
      'margin-top': (scrollPos / 10) - 150 + 'px'
    }">
    <img src="@/assets/shared/exterior5.webp"
    :style="{
      'margin-top': (scrollPos / 10) - 150 + 'px'
    }">
  </flickity>
</div>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
  name: 'pagosa',
  data() {
    return {
      flickityOptions: {
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        autoPlay: true,
        imagesLoaded: true
        // any options from Flickity can be used
      },
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
  img {
    margin-left: -15%;
    object-fit: cover;
    width: 130%;
    // height: 100%;
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