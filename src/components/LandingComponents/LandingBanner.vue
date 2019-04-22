<template>
<div class="full-page" id="landing-banner">
  <h1>Welcome to your home away from home.</h1>
</div>
</template>

<style scoped lang="scss">
@import "@/globalVars.scss";

#landing-banner {
  background: url('../../assets/misc_images/main-landing-backdrop.png');
  background-size: cover;
  display: flex;
  justify-content: space-around;
}

h1 {
  margin-top: 0px;
  padding-top: 45vh;
  color: white;
  text-shadow: $text-shadow;
  font-size: 3vw;
  max-width: 500px;
}

</style>