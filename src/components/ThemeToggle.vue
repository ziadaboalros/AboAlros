<template>
  <div
    class="cursor-pointer bg-cyan-800 absolute left-2 top-2 w-16 h-8 rounded-2xl p-2 flex items-center shadow-lg"
    @click="changeMood()"
  >
    <div
      :class="`w-6 rounded-full toggle aspect-square absolute left-2 bg-[#fa0] smooth ${
        mode == 'bg-dark' ? 'active' : ''
      }`"
    ></div>
  </div>
</template>

<script>
export default {
  methods: {
    changeMood() {
      this.$emit(
        "changeMood",
        this.mode == "bg-light" ? "bg-dark" : "bg-light"
      );
    },
  },
  props: ["mode"],
};
</script>

<style scoped>
.active {
  transform: translateX(calc(-100% - 8px));
  @apply bg-white left-full after:absolute after:right-0 after:top-0 after:w-4/5 after:aspect-square after:rounded-full after:bg-cyan-800;
}
</style>
