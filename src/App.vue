<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';

export default {
  data() {
    return {}
  },
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style lang="scss">
@import "@/globalVars.scss";


@font-face {
  font-family: athelas;
  src: url("./assets/fonts/Athelas-Regular.ttf");
}

#app {
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: athelas;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.full-page {
  width: 100vw;
  min-height: 100vh;
  &.top-padding {
    padding-top: 25vh;
    height: 75vh;
  }
}

.dark-button {
  background: rgba(0,0,0,.4);
  border:  solid 1px white;
  border-radius: 5px;
  padding: 15px 50px;
  color: white;
  font-family: athelas;
  font-size: 20px;
  cursor: pointer;
  transition-duration: .2s;
}
.dark-button:hover {
  background: rgba(0,0,0,.6);
  box-shadow: 0px 0px 10px rgba(255,255,255,.5);
}

.at-least-1200 {
  @media only screen and (max-width: 1200px) {
    display: none;
  }
}
.at-most-1200 {
  @media only screen and (min-width: 1200px) {
    display: none;
  }
}

.dark-container {
  background: rgba(0,0,0,.7);
  width: 40vw;
  height: 80vh;
  margin-left: 5vw;
  margin-top:  10vh;
  border: solid white 2px;
  img {
    width: 20%;
    margin-top: 100px;
  }
  h2, h3 {
    color: white;
    font-size: 3vw;
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
    width: 90vw;
    h2, h3 {
      font-size: 8vw;
    }
    p {
      font-size: 5vw;
    }
  }
}
.white-link  {
  color: white;
  text-decoration: underline;
  font-size: 1.5vw;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
}
.header-block {
  width: 100%;
  height: 15vw;
  max-height: 200px;
  background: $brown;
  box-shadow: $box-shadow;
  @media only screen and (max-width: 1000px) {
    height: 30vw;
    max-height: 500px;

    min-height: 300px;
  }
}
</style>
