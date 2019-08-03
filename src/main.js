import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
