import Vue from 'vue';
import Vuetify from 'vuetify';
import ru from 'vuetify/src/locale/ru';
import config from '@/config';

import 'vuetify/dist/vuetify.min.css';

// Icons
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: config.iconfont,
  },
  lang: {
    locales: {
      ru,
    },
    current: config.lang,
  },
  theme: config.theme,
});
