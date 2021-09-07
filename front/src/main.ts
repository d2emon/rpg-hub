import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

// Plugins
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  store,
  vuetify,
  render: (h: any) => h(App),
}).$mount('#app');
