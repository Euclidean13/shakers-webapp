import Vuex from "vuex";

/* We create a function instead of an object for creating the 
store because it should be callable */
const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [
        { src: "~/assets/images/home/Hummer_Usa_Fitness.jpg" },
        { src: "~/assets/images/home/shaker_weights.jpg" },
        { src: "~/assets/images/home/shakers_4colors.jpg" }
      ],
      carouselPosts: [
        { src: require("@/assets/images/Hummer_Usa_Fitness.jpg") },
        { src: require("@/assets/images/shaker_weights.jpg") },
        { src: require("@/assets/images/shakers_4colors.jpg") }
      ]
    },
    mutations: {},
    actions: {},
    getters: {
      CarouselPosts: state => state.carouselPosts
    }
  });
};

export default createStore;
