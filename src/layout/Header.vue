<template>
  <div class="header" :class="{ dark: darkTheme, light: !darkTheme }">
    <header-links />
    <media :query="{ minWidth: 750 }"><header-search /></media>
    <div class="header__user">
      <media :query="{ maxWidth: 750 }"><header-search2 /></media>
      <header-log />
      <header-reg />

      <div
        class="icon__container"
        v-bind:style="style"
        @click="setModal"
        @mouseover="back"
        @mouseout="backOut"
      >
        <i class="fas fa-user icon-user"></i>
      </div>
      <header-theme-modal v-show="darkThemeModal" />
    </div>
  </div>
</template>

<script>
import Media from "vue-media";
import HeaderLinks from "../components/Header/HeaderLinks.vue";
import HeaderLog from "../components/Header/HeaderLog.vue";
import HeaderReg from "../components/Header/HeaderReg.vue";
import HeaderSearch from "../components/Header/HeaderSearch.vue";
import HeaderSearch2 from "../components/Header/HeaderSearch2.vue";
import HeaderThemeModal from "../components/Header/HeaderThemeModal.vue";

export default {
  name: "Header",
  data() {
    return { colorBg: "#464649", style: {} };
  },
  components: {
    HeaderLinks,
    HeaderSearch,
    HeaderSearch2,
    HeaderLog,
    HeaderReg,
    HeaderThemeModal,
    Media,
  },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
    darkThemeModal() {
      return this.$store.state.darkThemeModal;
    },
  },
  watch: {
    darkTheme() {
      if (this.colorBg === "#464649") {
        this.colorBg = "#e5e5e5";
      } else if (this.colorBg === "#e5e5e5") {
        this.colorBg = "#464649";
      }
    },
  },
  methods: {
    setModal() {
      this.$store.commit("SET_BOOLEAN", { name: "darkThemeModal" });
    },
    back() {
      this.style = { "background-color": this.colorBg };
    },
    backOut() {
      this.style = {};
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  z-index: 200;
  position: fixed;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px black;
}
.header__user {
  margin-right: 10px;
  width: 290px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon__container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 28px;
  width: 28px;
}
.icon-user {
  font-size: 18px;
  cursor: pointer;
}
</style>
