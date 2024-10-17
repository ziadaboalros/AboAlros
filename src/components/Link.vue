<template>
  <a
    :href="link.dist"
    target="_blank"
    class="w-full bg-white cursor-pointer rounded-lg pr-2 pl-5 hover:pl-16 smooth py-3 flex h-12 hover:h-14 items-center text-lg hover:text-xl gap-3 relative overflow-hidden before:h-full before:absolute before:aspect-square before:-left-10 hover:before:left-0 before:smooth before:bg-[#fa0] hover:before:rounded-lg shadow-lg my-1 hover:my-0 before:bg-no-repeat before:bg-center before:bg-[url('/link.png')]"
  >
    <img :src="link.img" class="h-[90%]" />
    <p>
      {{ link.title }}
    </p>
  </a>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style scoped>
a::before {
  background-size: 50%;
}
</style>
