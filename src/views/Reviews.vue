<template>
  <div class="full-page" id="reviews">
    <div class="header-block"></div>
    <h1>Reviews</h1>

    <div id="review-card-container">
      <div class="review-card" v-for="card in cards">
        <img src="@/assets/icons/quote.png">
        <p>{{card.review}}</p>
        <p style="font-weight:bold">{{card.author}}</p>
      </div>
      
    </div>
    <br><br><br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          review: "I've stayed at the Lodge multiple times over the years and could not have had a better experience. The rooms are amazing, tastefully decorated, family friendly and comfortable! You cannot find better views in the area too. It is close to town for shopping and entertainment. With the San Juan Forest right next door, my family had the best time exploring. A campfire to end the night is always a favorite for us. This is the place to stay in Pagosa Springs",
          author: 'Maureen Maxwell',
        },
        {
          review: "Great place with great views. Great amenities and staff. Location is private but still close enough to town and the mountains. Easy to get to from the local airport. Rooms are spacious.",
          author: 'Don Funk',
        },
        {
          review: "I've stayed at this lodge 2 times . Once with the kids and once without. We had the best time. The place was extremely clean and beautiful. The upstairs area was a perfect place to look over the mountains through the big glass windows and watch the elk come down out of the woods. We would have a fire every night and listen to the coyotes howling. We visited the Hot Springs right down the mountain and we also rented ATVs in the natl forest close by, which was a blast. Great location! looking forward to my next visit.",
          author: 'Kathy Yarian',
        },
        {
          review: "This place is incredible. Took family there in June and kids had a blast. Beautiful setting sits way back off road. Saw lots of deer and elk right off back deck. The lodge is beautiful and immaculate and the manager Blake couldn’t do enough for us told us places to go things to see. Rooms and large public areas are decorated and designed making you feel right at home. Incredible view of San Juan mountains from your private suite and even your bedroom. Definitely worth making time and spending a week",
          author: 'John Gresock',
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

#reviews {
  background: $gray;
  color: $white;
}
h1 {
  background: $white;
  color: $gray;
  display: block;
  font-weight: normal;
  min-width: 300px;
  margin-left: 50%;
  transform: translatex(-50%);
  padding: 10px;
  margin-top:  80px;
  margin-bottom: 80px ;
}

#review-card-container  {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0 auto;
  max-width: 1150px;
  justify-content: space-around;
}

.review-card {
  width: 430px;
  background: $dark-gray;;
  box-shadow: $box-shadow;
  text-align: left;
  margin: 15px;
  margin-top: 40px;
  padding: 30px;
  color: $white;
  position: relative;
  font-size: 20px;
  img {
    position: absolute;
    left: 50%;
    top: -30px;
    transform: translatex(-50%);
  }
}

</style>