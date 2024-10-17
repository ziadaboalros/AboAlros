<template>
  <div
    class="card relative w-full aspect-square cursor-pointer smooth transform-style-preserve-3d"
    @click="rotateCard()"
    :style="`transform: ${this.rotation};`"
  >
    <img
      src="/avatar.jpg"
      class="front w-full absolute rounded-full border-8 border-white backface-hidden"
    />
    <img
      src="/qr-code.png"
      class="back rotate-180 absolute rounded-3xl backface-hidden rotate-y-180"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotation: null,
    };
  },
  methods: {
    rotateCard() {
      this.rotation =
        this.rotation == "rotateY(180deg)" ? "none" : "rotateY(180deg)";
    },
  },
};
</script>
