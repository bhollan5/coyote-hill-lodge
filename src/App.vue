<template>
  <div id="app">
    <main-header></main-header>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';

export default {
  data() {
    return {}
  },
  components: {
    MainHeader
  }
}
</script>

<style lang="scss">

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
  height: 100vh;
}
</style>
