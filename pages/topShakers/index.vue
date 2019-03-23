<template>
  <v-layout row wrap justify-center>
    <!-- Poster -->
    <v-flex xs12 sm12 md12 pb-2>
      <v-card>
        <v-img :src="image_lvl1" height="200px">
          <v-container class="poster" fill-height fluid justify-center>
            <div>
              <h1>
                <span>T</span>
                <span>o</span>
                <span>p</span>
                <span style="margin-left: 10px;">S</span>
                <span>h</span>
                <span>a</span>
                <span>k</span>
                <span>e</span>
                <span>r</span>
                <span>s</span>
              </h1>
            </div>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>
    <!-- Toolbar -->
    <v-flex xs12 sm4 md4>
      <ShakerSelector/>
    </v-flex>
  </v-layout>
</template>

<script>
import ShakerSelector from "~/components/Toolbar/ShakerSelector";

export default {
  components: {
    ShakerSelector
  },
  data() {
    return {
      image_lvl1: require("~/assets/images/workout-gym-background-1.jpg")
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:100");

.poster {
  font-family: "Lato", sans-serif;
  font-size: 100%;
}
.poster div {
  transform: skewY(-5deg);
  display: inline-block;
  border: 4px solid #fff;
  padding: 20px 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px #1eff4e, inset 0 0 30px #1eff4e, inset 0 0 10px #1eff4e,
    0 0 30px #1eff4e;
  animation: animate 0.1s linear infinite;
}

.poster h1 {
  font-size: 2.5em;
  color: #fff;
  text-shadow: 0 0 10px #1eff4e, 0 0 30px #1eff4e, 0 0 80px #1eff4e,
    0 0 20px #1eff4e;
}

h1 span {
  animation: animate 1s linear infinite;
}
h1 span:nth-child(1) {
  animation-delay: 0.25s;
}
h1 span:nth-child(2) {
  animation-delay: 0.2s;
}
h1 span:nth-child(3) {
  animation-delay: 0.8s;
}
h1 span:nth-child(4) {
  animation-delay: 0.4s;
}
h1 span:nth-child(5) {
  animation-delay: 0.35s;
}
h1 span:nth-child(6) {
  animation-delay: 0.5s;
}
h1 span:nth-child(7) {
  animation-delay: 0.55s;
}
h1 span:nth-child(8) {
  animation-delay: 0.5s;
}
h1 span:nth-child(9) {
  animation-delay: 0.7s;
}
h1 span:nth-child(10) {
  animation-delay: 0.65s;
}

@keyframes animate {
  0% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  40% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
