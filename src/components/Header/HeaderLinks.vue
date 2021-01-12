<template>
  <div class="header-links">
    <router-link
      to="/"
      :class="{ dark: darkTheme, light: !darkTheme }"
      class="icon"
    >
      <i class="fab fa-twitch"></i>
    </router-link>
    <router-link
      class="link"
      to="/explore"
      :class="{ dark: darkTheme, light: !darkTheme }"
      >Explorar</router-link
    >
    <router-link
      class="link"
      :to="'Esports'"
      :class="{ dark: darkTheme, light: !darkTheme }"
      >Esports</router-link
    >
    <router-link
      class="link"
      :to="'Musica'"
      :class="{ dark: darkTheme, light: !darkTheme }"
      >Música</router-link
    >
  </div>
</template>

<script>
export default {
  name: "HeaderLinks",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-links {
  margin-left: 10px;
  height: 100%;
  width: 220px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link {
  text-decoration: none;
  padding-bottom: 6px;
  margin-left: 3px;
}
.link:hover {
  color: #9146ff;
}
.icon {
  color: #9146ff;
}
.icon i {
  font-size: 26px;
}
.icon i:hover {
  transform: scale(1.3);
}
</style>
