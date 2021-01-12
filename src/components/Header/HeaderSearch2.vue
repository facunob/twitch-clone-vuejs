<template>
  <div>
    <i
      class="fas fa-search btn"
      :class="{
        dark: darkTheme,
        light: !darkTheme,
      }"
    ></i>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch2",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
};
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  height: 90%;
  border-radius: 7px;
  height: 90%;
  float: right;
}
</style>
