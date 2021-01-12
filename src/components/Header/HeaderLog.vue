<template>
  <div
    class="log"
    :class="{ 'semi-dark': darkTheme, 'light-grey-color2': !darkTheme }"
    @click="setModal"
  >
    Iniciar Sesión
  </div>
</template>

<script>
export default {
  name: "HeaderLog",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
  methods: {
    setModal() {
      return this.$store.commit("SET_BOOLEAN", { name: "logModal" });
    },
  },
};
</script>

<style lang="scss">
.log {
  cursor: pointer;
  height: 50%;
  padding: 7px;
  border-radius: 4px;
  font-size: 15px;
}
</style>
