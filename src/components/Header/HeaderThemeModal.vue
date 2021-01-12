<template>
  <div class="modal-theme" :class="{ dark: darkTheme, light: !darkTheme }">
    <div
      class="modal__options"
      v-bind:style="style"
      @mouseover="back"
      @mouseout="backOut"
    >
      <div><i class="fas fa-globe"></i> Idioma</div>
      <i class="fas fa-chevron-right"></i>
    </div>
    <div
      class="modal__theme"
      v-bind:style="style2"
      @click="setTheme"
      @mouseover="back2"
      @mouseout="backOut2"
    >
      <i class="far fa-moon"></i> Tema oscuro
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "HeaderThemeModal",
  data() {
    return {
      sack: "#464649",
      style: {},
      style2: {},
    };
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
      if (this.sack === "#464649") {
        this.sack = "#e5e5e5";
      } else if (this.sack === "#e5e5e5") {
        this.sack = "#464649";
      }
    },
  },
  methods: {
    setTheme() {
      this.$store.commit("SET_BOOLEAN", { name: "darkTheme" });
    },
    back() {
      this.style = { "background-color": this.sack };
    },
    backOut() {
      this.style = {};
    },
    back2() {
      this.style2 = { "background-color": this.sack };
    },
    backOut2() {
      this.style2 = {};
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-theme {
  z-index: 102;
  position: absolute;
  right: 10px;
  top: 9vh;
  width: 160px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 8px black;
  font-size: 12px;
  font-weight: 100;
}
.modal__options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  cursor: pointer;
  padding: 7px;
  border-radius: 3px;
}
.modal__theme {
  cursor: pointer;
  margin-bottom: 6px;
  padding: 7px;
  border-radius: 3px;
}

hr {
  opacity: 0.2;
}
</style>
