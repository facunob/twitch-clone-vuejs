import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: true,
    darkThemeModal: false,
    asideDesp: true,
    logModal: false,
    regModal: false,
  },
  mutations: {
    SET_BOOLEAN(state, { name, value }) {
      if (!value) {
        state[name] = !state[name];
      } else {
        state[name] = value;
      }
    },
  },
  actions: {
    GET_DATA() {
      fetch("/data.json")
        .then((res) => res.text())
        .then((data) => console.log(data));
    },
  },
  modules: {},
});
