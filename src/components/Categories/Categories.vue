<template>
  <div class="categories">
    <p><b>Categorías</b> que podrían interesarte</p>
    <div class="container">
      <categorie />
      <categorie />
      <categorie />
      <categorie />
      <categorie />
      <categorie />
    </div>
  </div>
</template>

<script>
import Categorie from "./Categorie.vue";
export default {
  name: "Categories",
  components: { Categorie },
};
</script>

<style lang="scss" scoped>
.categories {
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
</style>
