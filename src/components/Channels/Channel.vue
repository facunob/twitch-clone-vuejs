<template>
  <div class="channel">
    <img src="@/assets/img/streaming.jpg" alt="" />
    <div class="text-container">
      <img src="@/assets/img/discordIcon.jpg" alt="" />
      <div>
        <b>Título de streaming</b>
        <p>Equipo</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Channel",
};
</script>

<style lang="scss" scoped>
.channel {
  width: 33%;
}
.channel > img {
  cursor: pointer;
  transition: 0.2s;
}
.channel > img:hover {
  transform: translate(5px, -5px);
}
.text-container img {
  object-fit: cover;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-right: 10px;
  cursor: pointer;
}
.text-container {
  display: flex;
}
.text-container b {
  font-size: 15px;
  cursor: pointer;
}
.text-container b:hover {
  color: #9146ff;
}
.text-container p {
  font-size: 12px;
  cursor: pointer;
}
.text-container p:hover {
  color: #9146ff;
}
</style>
