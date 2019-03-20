import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: colors.grey.lighten3,
    secondary: colors.lightBlue,
    accent: colors.indigo.accent3,
    info: colors.teal.lighten1,
    warning: colors.deepOrange.accent4,
    error: colors.pink.accent3,
    success: colors.green.accent3
  }
});
