<template>
  <div :class="`${mode} smooth `">
    <theme-toggle :mode="mode" @changeMood="changeMood" />
    <div
      class="min-w-64 max-w-72 mx-auto w-3/5 h-[100vh] justify-center gap-5 py-4 flex flex-col"
    >
      <avatar />
      <links />
    </div>
  </div>
</template>

<script>
import Avatar from "./components/avatar.vue";
import Links from "./components/Links.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
export default {
  data() {
    return {
      mode: "bg-dark",
    };
  },
  methods: {
    changeMood(e) {
      this.mode = e;
    },
  },

  components: { Links, ThemeToggle, Avatar },
};
</script>
