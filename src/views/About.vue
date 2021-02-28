<template>
  <div class="w-min">
    <button class="mr-2" aria-label="Open Menu" @click="drawer">
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        class="w-8 h-8"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  <div class="inset-0 overflow-hidden">
    <section
      @click="drawer"
      class="absolute inset-y-0 left-0 pr-10 max-w-full flex overflow-hidden"
      aria-labelledby="slide-over-heading"
    >
      <transition
        enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        enter-from-class="-translate-x-full"
        enter-to-class="-translate-x-0"
        leave-from-class="-translate-x-0"
        leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
        leave-to-class="-translate-x-full"
      >
        <div v-if="isOpen" class="relative w-screen max-w-md overflow-hidden">
          <div
            class="h-full flex flex-col py-6 bg-blue-500 shadow-xl overflow-y-scroll"
          ></div>
        </div>
      </transition>
    </section>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
  },
  // watch: {
  //   isOpen: {
  //     immediate: true,
  //     handler(isOpen) {
  //       // if (process.client) {
  //       if (isOpen) document.body.style.setProperty("overflow", "hidden");
  //       else document.body.style.removeProperty("overflow");
  //       // }
  //     },
  //   },
  // },
  // mounted() {
  //   document.addEventListener("keydown", (e) => {
  //     if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
  //   });
  // },
};
</script>