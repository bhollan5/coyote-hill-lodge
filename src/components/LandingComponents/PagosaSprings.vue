<template>
<div class="full-page top-padding" id="pagosa-springs">
  <div id="text-container">
    <h2>Pagosa Springs - Nature at its Best</h2>
    <p>Coyote Hill is surrounded by national forest and gorgeous views of the San Juan Mountains.</p>
    <br><br>
    <p>Get outside and enjoy the fresh mountain air. </p>
  </div>
  <div id="forest-image-container">
    <div id="forest-image-shadow"></div>
    <img src="@/assets/misc_images/forest-hills.png"
    :style="{
      'margin-bottom': 0 + 'px'
    }">
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
  background: $white;
  display: flex;
  justify-content: space-around;
}

#text-container {
  text-align: left;
  width: 40%;
  h2 {
    padding: 0px;
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
}

h2 {
  margin-top: 0px;
  padding-top: 30vh;
  font-size: 5vw;
}

</style>