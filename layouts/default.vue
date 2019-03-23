<template>
  <v-app>
    <v-toolbar flat app color="primary">
      <v-toolbar-title class="text--uppercase secondary--text" to="/">
        <v-btn flat color="secondary" to="/">
          <span class="font-weight-light">Top</span>
          <span>Shakers</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <!-- Top shakers menu -->
        <v-btn flat color="secondary" to="/topShakers">
          <v-icon left>whatshot</v-icon>
          <span>Top</span>
        </v-btn>
        <!-- Shakers -->
        <v-btn flat color="secondary" to="/shakers">
          <v-icon left>local_drink</v-icon>
          <span>Shakers</span>
        </v-btn>
        <!-- Blog -->
        <v-btn flat color="secondary" to="/blog">
          <v-icon left>book</v-icon>
          <span>Blog</span>
        </v-btn>
        <!-- Cart -->
        <v-btn flat color="secondary" to="/cart">
          <v-icon left>local_grocery_store</v-icon>
          <span>Cart</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content style="background-color: #EEEEEE;">
      <nuxt/>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>
