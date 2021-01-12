<template>
  <div class="community" :class="{ dark: darkTheme, light: !darkTheme }">
    <h2 class="title">
      ¡Únete a la comunidad de <b class="twitch">Twitch</b>!
    </h2>
    <p class="desc">
      Descubre las mejores transmisiones en directo allá donde estés.
    </p>
    <header-reg class="reg" />
  </div>
</template>

<script>
import HeaderReg from "@/components/Header/HeaderReg.vue";
export default {
  name: "AsideCommunity",
  components: { HeaderReg },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
};
</script>

<style lang="scss" scoped>
.community {
  width: 96%;
  padding: 24px 12px 12px 12px;
  border-radius: 5px;
  margin: 10px auto;
  box-shadow: 0px 0px 1.5px black;
}
.title {
  margin-bottom: 10px;
}
.twitch {
  color: #9146ff;
}
.desc {
  font-size: 14px;
  margin-bottom: 14px;
}
.reg {
  width: 54%;
}
</style>
