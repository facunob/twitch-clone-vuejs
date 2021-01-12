<template>
  <div class="reg" @click="setModal">
    Registrarse
  </div>
</template>

<script>
export default {
  name: "HeaderReg",
  methods: {
    setModal() {
      this.$store.commit("SET_BOOLEAN", { name: "regModal" });
    },
  },
};
</script>

<style scoped lang="scss">
.reg {
  cursor: pointer;
  height: 50%;
  padding: 7px;
  border-radius: 4px;
  font-size: 15px;
  background: #9146ff;
  color: white;
}
.reg:hover {
  opacity: 92%;
}
</style>
