<template>
  <div class="flex flex-col w-full font-semibold">
    <Link v-for="link in links" :key="link" :link="link" />
  </div>
</template>

<script>
import Link from "./Link.vue";
export default {
  components: { Link },
  data() {
    return {
      links: [],
    };
  },
  created() {
    fetch("/links.json")
      .then((res) => res.json())
      .then((data) => (this.links = data));
  },
};
</script>

<style></style>
