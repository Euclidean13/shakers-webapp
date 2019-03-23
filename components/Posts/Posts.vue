<template>
  <v-container fill-height fluid pa-0>
    <v-layout row wrap justify-center>
      <v-flex v-for="post in posts" :key="post.src" pa-3 xs12 sm6 md4>
        <v-card hover flat>
          <v-card flat>
            <div class="price_label">
              <span>Top Sold!</span>
            </div>
          </v-card>
          <v-img :src="post.src"></v-img>
          <v-card flat>
            <h1 class="headline text-xs-center pt-5">{{post.title}}</h1>
            <p class="subheading grey--text text-xs-center">{{post.subtitle}}</p>
          </v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <p class="price">{{post.price}}</p>
            <v-btn icon large>
              <v-icon large>local_grocery_store</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          src: require("@/assets/images/Hummer_Usa_Fitness.jpg"),
          title: "Hummer Shaker",
          subtitle: "Shaker or Galon?",
          price: "10€"
        },
        {
          src: require("@/assets/images/shaker_weights.jpg"),
          title: "Wheight Shaker",
          subtitle: "Drink and train, both at once",
          price: "15€"
        },
        {
          src: require("@/assets/images/shakers_4colors.jpg"),
          title: "Common Shakers",
          subtitle: "One more day at work",
          price: "5€"
        }
      ]
    };
  }
};
</script>

<style>
.cardTitle {
  text-align: center;
}
.price {
  text-align: center;
  margin-right: 12px;
  font-size: 33px;
  color: white;
  width: 400px;
  background-color: black;
}
.price_label {
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  text-indent: 20px;
  font-size: 25px;
  background-color: yellow;
}
</style>
