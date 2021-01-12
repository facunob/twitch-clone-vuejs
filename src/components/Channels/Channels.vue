<template>
  <div class="channels">
    <p>
      Canales de <b>{{ channel }}</b> recomendados
    </p>
    <div class="container">
      <channel />
      <channel />
      <channel />
    </div>

    <hr />
    <p>as</p>
    <p>asd</p>
  </div>
</template>

<script>
import Channel from "./Channel.vue";
export default {
  name: "Channels",
  components: { Channel },
  props: { channel: String },
};
</script>

<style lang="scss" scoped>
.channels {
  width: 100%;
  padding: 20px 20px 0px 20px;
}
p {
  font-size: 20px;
  margin-bottom: 16px;
}
b {
  color: #9146ff;
}
.container {
  display: flex;
  justify-content: space-between;
}
hr {
  opacity: 0.5;
  color: gray;
  margin-top: 30px;
}
</style>
