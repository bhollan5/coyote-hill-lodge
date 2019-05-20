<template>
<div class="full-page top-padding" id="pagosa-springs">
  <div id="image-container">
    <div id="image-shadow"></div>
    <img src="@/assets/misc_images/dining.png"
    :style="{
      'margin-top': (scrollPos / 10) - 300 + 'px'
    }">
  </div>
  <div id="text-container">
    <br><br>
    <img src="@/assets/icons/living.png">
    <h2>More Than Just a Room</h2>
    <hr>
    <p>In addition to private suites, guests enjoy access to shared living space.</p>
    <router-link tag="div" to="/" class="white-link">See Full Accomodations »</router-link>

  </div>
</div>
</template>

<script>
export default {
  name: 'pagosa',
  data() {
    return {
      scrollPos: 0,
      mouseX: 0,
      mouseY: 0
    }
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
  background: $brown;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding-top: 0px;
  }
}

#text-container {
  color: black;
  width: 40%;
  img {
    width: 20%;
    // margin-top: 100px;
  }
  h2, h3 {
    color: white;
    font-size: 3vw;
    padding-top: 10px;
  }
  hr {
    width: 50%;
  }
  p {
    color: white;
    font-size: 1.5vw;
    margin: 10px 10%;
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

#image-container {
  @media only screen and (max-width: 800px) {
    order: 2;
    width: 80%;
    margin: 0px 10%;
    height: 50vw;
  }
  width: 40%;
  height: 30vw;
  align-self: start;
  position: relative;
  overflow: hidden;
  img {
    width: 130%;
    margin-left: -15%;
  }
  #image-shadow {
    position: absolute;
    box-shadow: inset 0px 0px 15px rgba(0,0,0,.3);
    height: 100%;
    width: 100%;
  }
}

h2 {
  margin-top: 0px;
  padding-top: 30vh;
  font-size: 5vw;
}

</style>