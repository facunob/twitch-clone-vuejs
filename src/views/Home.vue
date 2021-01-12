<template>
  <div class="home">
    <categories />
    <channels :channel="'Charlando'" />
  </div>
</template>

<script>
import Categories from "@/components/Categories/Categories.vue";
import Channels from "@/components/Channels/Channels.vue";
export default {
  name: "Home",
  components: { Categories, Channels },
};
</script>
