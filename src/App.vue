<template>
  <div id="app">
    <Header v-show="true" />
    <Aside v-show="asideDesp" />
    <cont-aside v-show="!asideDesp" />
    <router-view
      class="view-content"
      :class="{ 'dark-content': darkTheme, light: !darkTheme }"
      :style="style"
    />
    <log-modal v-show="logModal" />
    <reg-modal v-show="regModal" />
  </div>
</template>

<script>
import Header from "@/layout/Header.vue";
import Aside from "./layout/Aside.vue";
import ContAside from "./layout/ContAside.vue";
import LogModal from "@/components/Modal/LogModal.vue";
import RegModal from "./components/Modal/RegModal.vue";
export default {
  name: "App",
  components: { Header, Aside, ContAside, LogModal, RegModal },
  data() {
    return { style: { left: "230px", width: "calc(100% - 230px)" } };
  },
  computed: {
    asideDesp() {
      return this.$store.state.asideDesp;
    },
    logModal() {
      return this.$store.state.logModal;
    },
    regModal() {
      return this.$store.state.regModal;
    },
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
  watch: {
    asideDesp() {
      if (this.asideDesp === false) {
        this.style = { left: "52px", width: "calc(100% - 52px)" };
      } else {
        this.style = { left: "230px", width: "calc(100% - 230px)" };
      }
    },
  },
  created() {
    if (this.asideDesp === false) {
      this.style = { left: "52px", width: "calc(100% - 52px)" };
    } else {
      this.style = { left: "230px", width: "calc(100% - 230px)" };
    }
  },
};
</script>

<style lang="scss">
.app {
  overflow: hidden;
}
.view-content {
  position: absolute;
  top: 8vh;
  z-index: 0;
  height: 100vh;
  width: 100%;
  overflow: scroll;
  scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}
.view-content::-webkit-scrollbar {
  width: 8px; /* Tamaño del scroll en vertical */
  height: 8px; /* Tamaño del scroll en horizontal */
}
.view-content::-webkit-scrollbar-thumb {
  background: #1f1f23;
  border-radius: 4px;
  border: 0.5px solid gray;
}
.view-content::-webkit-scrollbar:vertical {
  width: 8px;
}
</style>
