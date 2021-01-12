<template>
  <div
    class="cont-aside"
    :class="{ 'dark-aside': darkTheme, 'light-grey': !darkTheme }"
  >
    <media :query="{ minWidth: 1100 }">
      <div
        class="icon__container"
        v-bind:style="style"
        @mouseover="back"
        @mouseout="backOut"
        @click="asideDesp"
      >
        <i class="fas fa-angle-double-right"></i>
      </div>
    </media>
    <div class="img__container" v-for="id in 10" :key="id">
      <img src="@/assets/img/discordIcon.jpg" alt="streamer" />
    </div>
  </div>
</template>

<script>
import Media from "vue-media";
export default {
  name: "ContAside",
  components: { Media },
  data() {
    return { colorBg: "#464649", style: {} };
  },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
  methods: {
    back() {
      this.style = { "background-color": this.colorBg };
    },
    backOut() {
      this.style = {};
    },
    asideDesp() {
      this.$store.commit("SET_BOOLEAN", { name: "asideDesp", value: true });
    },
  },
  watch: {
    darkTheme() {
      if (this.colorBg === "#464649") {
        this.colorBg = "gray";
      } else if (this.colorBg === "gray") {
        this.colorBg = "#464649";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cont-aside {
  z-index: 100;
  position: fixed;
  top: 8vh;
  width: 52px;
  height: 100%;
  padding: 10px 10px 50px 10px;
}
.icon__container {
  cursor: pointer;
  padding: 7px 5px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img__container {
  width: 100%;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
}
.img__container img {
  object-fit: cover;
  width: 28px;
  height: 28px;
  border-radius: 100%;
}
</style>
