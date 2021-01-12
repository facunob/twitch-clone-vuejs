<template>
  <media :query="{ minWidth: 1100 }" @media-leave="mediaLeave">
    <div
      class="aside"
      :class="{ 'dark-aside': darkTheme, 'light-grey': !darkTheme }"
    >
      <div class="aside__text">
        <h3>CANALES RECOMENDADOS</h3>
        <div
          class="icon__container"
          v-bind:style="style"
          @mouseover="back"
          @mouseout="backOut"
          @click="asideCont"
        >
          <i class="fas fa-angle-double-left"></i>
        </div>
      </div>
      <streamer-card />
      <streamer-card />
      <streamer-card />
      <streamer-card />
      <streamer-card />
      <streamer-card />
      <streamer-card />
      <streamer-card />
      <streamer-card />
      <streamer-card />
      <aside-community />
    </div>
  </media>
</template>

<script>
import AsideCommunity from "@/components/Aside/AsideCommunity.vue";
import StreamerCard from "../components/Aside/StreamerCard.vue";
import Media from "vue-media";
export default {
  name: "Aside",
  data() {
    return { colorBg: "#464649", style: {} };
  },
  components: { AsideCommunity, StreamerCard, Media },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
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
  methods: {
    back() {
      this.style = { "background-color": this.colorBg };
    },
    backOut() {
      this.style = {};
    },
    asideCont() {
      this.$store.commit("SET_BOOLEAN", { name: "asideDesp", value: false });
    },
    mediaLeave() {
      if (this.$store.state.asideDesp) {
        this.$store.commit("SET_BOOLEAN", { name: "asideDesp", value: false });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.aside {
  z-index: 100;
  position: fixed;
  top: 8vh;
  width: 230px;
  height: 100%;
  padding: 10px 10px 50px 10px;
  overflow: scroll;
  scrollbar-color: rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0);
  scrollbar-width: thin;
}
.aside::-webkit-scrollbar {
  display: none;
}

.aside__text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.aside__text h3 {
  font-size: 14px;
}
.icon__container {
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
}
</style>
