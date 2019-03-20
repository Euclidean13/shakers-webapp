<template>
  <v-layout row wrap>
    <!-- Poster -->
    <v-flex xs12 sm12 md12 mb-2>
      <v-card flat>
        <v-img height="200px" :src="image_lvl1">
          <v-container fill-height fluid>
            <v-flex xs12 sm12 md12 mt-5 class="text-md-center">
              <span class="post">The Best online Shaker shop</span>
            </v-flex>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>

    <!-- Content Level 1 -->
    <v-flex xs6 sm6 md6 pa-2>
      <h1>Beat the limits!</h1>
      <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.</p>
    </v-flex>
    <v-flex xs6 sm6 md6 pa-2>
      <v-carousel light hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in CarouselPosts"
          :key="i"
          :src="item.src"
          reverse-transition="fade"
          transition="fade"
          style="align-items:top;"
        ></v-carousel-item>
      </v-carousel>
      <!-- <v-img :src="image"></v-img> -->
    </v-flex>

    <!-- Content Level 2 -->
    <v-flex xs12 sm12 md12>
      <v-card flat>
        <p>Some information ©©©©©</p>
      </v-card>
    </v-flex>

    <!-- Image level 2 -->
    <v-flex xs12 sm12 md12 mb-2>
      <v-card flat>
        <v-img height="625px" :src="image_lvl2">
          <v-container fill-height fluid>
            <v-flex xs12 sm12 md12 align-end class="white--text">
              <div class="post">The Best online Shaker shop</div>
              <div>H</div>
              <div>H</div>
              <div>H</div>
              <div>H</div>
              <div>H</div>
              <div>H</div>
              <div>H</div>
              <v-btn>Click</v-btn>
            </v-flex>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      image_lvl1: require("@/assets/images/alora-griffiths-unsplash2.jpg"),
      image_lvl2: require("@/assets/images/shaker_lvl2.jpg")
    };
  },
  computed: {
    CarouselPosts() {
      return this.$store.getters.CarouselPosts;
    }
  }
};
</script>

<style>
.post {
  font-size: 50px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.01em;
  font-family: "Roboto", sans-serif !important;
  color: white;
}

.v-carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px white;
}
</style>
