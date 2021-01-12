<template>
  <div class="categorie">
    <img
      src="@/assets/img/chatting.jpg"
      alt="categorie picture"
      class="cat-picture"
    />
    <b class="cat-title">Just Chatting</b>
    <p class="cat-viewers">180.234 espect..</p>
  </div>
</template>

<script>
export default {
  name: "Categorie",
};
</script>

<style lang="scss">
.categorie {
  width: 15.3%;
  height: 300px;
}
.cat-picture {
  width: 100%;
  height: 80%;
  object-fit: cover;
  cursor: pointer;
  transition: 0.2s;
}
.cat-picture:hover {
  transform: translate(5px, -5px);
}
.cat-title {
  font-weight: 500;
  font-size: 20px;
  color: rgb(214, 214, 214);
  cursor: pointer;
}
.cat-title:hover {
  color: #9146ff;
}
.cat-viewers {
  font-size: 13px;
  color: gray;
  cursor: pointer;
}
.cat-viewers:hover {
  color: #9146ff;
}
</style>
