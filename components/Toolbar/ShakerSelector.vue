<template>
  <v-toolbar dense flat dark>
    <v-overflow-btn :items="price_selector" label="Price" hide-details class="pa-0"></v-overflow-btn>
    <v-overflow-btn :items="size_selector" label="Size" hide-details class="pa-0"></v-overflow-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      price_selector: ["higher", "lower"],
      size_selector: ["big", "medium", "small"]
    };
  }
};
</script>
