<template>
  <div class="card">
    <img src="@/assets/img/discordIcon.jpg" alt="streamer" />
    <div class="card__text">
      <h2>Streamer</h2>
      <p>Call of Duty: black...</p>
    </div>
    <div class="card__people"><i class="fas fa-circle"></i> 123</div>
  </div>
</template>

<script>
export default {
  name: "StreamerCard",
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
}
.card img {
  object-fit: cover;
  width: 28px;
  height: 28px;
  border-radius: 100%;
}
.card__text h2 {
  font-size: 16px;
}
.card__text p {
  font-size: 12px;
  color: gray;
}
.card__people {
  font-size: 12px;
}
.card__people i {
  font-size: 9px;
  color: red;
}
</style>
