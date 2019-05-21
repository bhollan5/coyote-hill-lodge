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
        {{info}}
      </div>
      <div id="room-image"></div>
    </div>
    
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

<style lang="scss">
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
</style>