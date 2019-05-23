<template>
  <div class="full-page" id="explore-pagosa">
    <div class="header-block"></div>
    <h1>Explore Pagosa Springs.</h1>
    <p>There's plenty to do! Check out the <a href="https://visitpagosasprings.com/" target="_blank">Pagosa Springs website</a> for more ideas & information. </p>
    <div id="promo-card-container">

      <div class="promo-card" v-for="card in cards">
        <div class="promo-card-image">
          <img :src="require(`@/assets/pagosa_promo_pics/${card.image}`)">
          <h3>{{card.title}}</h3>
        </div>
        <a target="_blank" v-for="link in card.links"
          :href="link.link" >
          {{link.text}} »
        </a>
      </div>
      
    </div>
    <br><br><br><br><br>
    <p style="margin-bottom: 0px; padding-bottom: 50px;">Coyote Hill does not endorse private companies listed.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Cross Country & Downhill Skiing',
          image: 'slice1.png',
          links: [
            {
              link: 'https://wolfcreekski.com/',
              text: 'Wolf Creek Ski Resort'
            },
            {
              link: 'https://pagosanordic.com/',
              text: 'Pagosa Nordic'
            }
          ]
        },
        {
          title: 'Horse Riding',
          image: 'slice2.png',
          links: [
            {
              link: 'https://www.horsebackriding.com/',
              text: 'Backcountry Outfitters'
            }
          ]
        },
        {
          title: 'ATV Rides',
          image: 'slice3.png',
          links: [
            {
              link: 'https://outbackatvrentals.com/',
              text: 'Outback ATV rentals'
            }
          ]
        },
        {
          title: 'Fishing & Hunting',
          image: 'slice4.png',
          links: [
            {
              link: 'https://visitpagosasprings.com/index.php?section=things-to-do-activities&subcategory_id=15&season=',
              text: 'Guides to Fishing Waters'
            }
          ]
        },
        {
          title: 'Tubing & Rafting',
          image: 'slice5.png',
          links: [
            {
              link: 'https://pagosaoutside.com/',
              text: 'Pagosa Outside'
            }
          ]
        },
        {
          title: 'Hot Springs',
          image: 'slice6.png',
          links: [
            {
              link: 'https://www.pagosahotsprings.com/hotsprings',
              text: 'Pagosa Hot Springs'
            }
          ]
        },
        {
          title: 'Chimney Rock',
          image: 'slice7.png',
          links: [
            {
              link: 'http://www.chimneyrockco.org/',
              text: 'Chimney Rock National Monument'
            }
          ]
        },
        {
          title: 'Hiking & Trails',
          image: 'slice8.png',
          links: [
            {
              link: 'https://visitpagosasprings.com/index.php?section=things-to-do-activities&subcategory_id=18&season=',
              text: 'Trails in Pagosa'
            }
          ]
        },
        {
          title: 'Dining',
          image: 'slice9.png',
          links: [
            {
              link: 'https://visitpagosasprings.com/things-to-do-dining',
              text: 'Pagosa Dining Options'
            }
          ]
        },
      ]

    }
  },
  computed: {
    info() {
      return this.$route.params.roomOption;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/globalVars.scss";

#explore-pagosa {
  background: $white;
  color: $gray;
}
h1 {
  background: $red;
  color: $white;
  display: block;
  min-width: 300px;
  margin-left: 50%;
  transform: translatex(-50%);
  padding: 10px;
  margin-top:  80px;
}
p {
  font-size: 20px;
  margin: 50px 20px 50px;
}
a {
  color: $red;
  font-weight: bold;
}

#promo-card-container  {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0 auto;
  max-width: 1150px;
  justify-content: space-around;
}

.promo-card {
  width: 350px;
  height: 330px;
  background: white;
  box-shadow: $box-shadow;
  text-align: left;
  margin: 15px;
  a {
    display: block;
    color: #4B93FF;
    margin: 10px 10px;
  }
}
.promo-card-image {
  width: 100%;
  height: 230px;
  position: relative;
  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
  }
  h3 {
    color: white;
    text-shadow: 1px 1px 5px rgba(0,0,0,.7);
    position: absolute;
    bottom: 0px;
    left: 10px;
    text-align: left;
    width: 70%;
    font-size: 25px;
    margin-bottom: 5px;
  }
}
</style>