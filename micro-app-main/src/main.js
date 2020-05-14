import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
    {
        name: "VueMicroApp",
        entry: "//localhost:10200",
        container: "#frame",
        activeRule: "/vue"
    },
]);

start();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
