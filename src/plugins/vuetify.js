import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: colors.teal .darken1, // #E53935
        secondary: colors.teal .lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
});
