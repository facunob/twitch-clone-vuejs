<template>
  <div class="header-search">
    <input
      type="text"
      placeholder="Buscar"
      :class="{ 'semi-dark': darkTheme, 'light-grey': !darkTheme }"
      :style="{ background: colorBg }"
      @focus="met"
      @blur="metOut"
    />
    <i
      class="fas fa-search btn"
      :class="{
        'semi-dark-inverse': darkTheme,
        'light-grey-color': !darkTheme,
      }"
    ></i>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {
      colorBg: "",
    };
  },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
  methods: {
    met() {
      if (this.darkTheme === true) {
        this.colorBg = "black";
      } else {
        this.colorBg = "white";
      }
    },
    metOut() {
      this.colorBg = "";
    },
  },
};
</script>

<style scoped lang="scss">
.header-search {
  width: 32%;
  height: 70%;
  display: flex;
}
.header-search input {
  border: none;
  outline: none;
  height: 100%;
  width: 80%;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  padding-left: 10px;
  margin-bottom: 7px;
}
.header-search input:hover {
  border: 1px solid gray;
}
.header-search input:focus {
  border: 1px solid #9146ff;
}
.btn {
  cursor: pointer;
  font-size: 27px;
  padding: 5px;
  height: 90%;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  height: 100%;
}
</style>
