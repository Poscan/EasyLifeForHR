import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultClockpickerHoursLabel: "Часы",
  defaultClockpickerMinutesLabel: "Мин.",
  defaultTimeFormatter: "HH:mm",
  defaultTimeParser: "HH:mm",
  defaultModalScroll: "keep",
  defaultFirstDayOfWeek: 1,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
