<template>
  <div>
    <landing-banner></landing-banner>
    <pagosa-springs></pagosa-springs>
    <plenty-to-do></plenty-to-do>
    <interior></interior>
    <barn></barn>
  </div>
</template>

<script>
import LandingBanner from '@/components/LandingComponents/LandingBanner';
import PagosaSprings from '@/components/LandingComponents/PagosaSprings';
import PlentyToDo from '@/components/LandingComponents/PlentyToDo';
import Interior from '@/components/LandingComponents/Interior';
import Barn from '@/components/LandingComponents/Barn';


export default {
  data() {
    return {

    }
  },
  components: {
    LandingBanner,
    PagosaSprings,
    PlentyToDo,
    Interior,
    Barn,
  }
}

</script>

<style scoped lang="scss">

</style>
