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

  <div v-show="isOpen" class="absolute inset-0 overflow-hidden">
    <transition
      enter-active-class="transition-opacity ease-in-out duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
    </transition>
    <transition
      enter-class="translate-x-full"
      enter-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      enter-to-class="translate-x-0"
      leave-class="translate-x-0"
      leave-active-class="transform transition ease-in-out duration-500 sm:duration-700"
      leave-to-class="translate-x-full"
    >
      <section
        v-show="isOpen"
        class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
        aria-labelledby="slide-over-heading"
      >
        <div class="relative w-screen max-w-md">
          <transition
            enter-class="opacity-0"
            enter-active-class="transition-opacity ease-in-out duration-500"
            enter-to-class="opacity-100"
            leave-class="opacity-100"
            leave-active-class="transition-opacity ease-in-out duration-500"
            leave-to-class="opacity-0"
          >
            <div
              v-show="isOpen"
              class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4 transition-opacity"
            >
              <button
                @click="isOpen = false"
                class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span class="sr-only">Close panel</span>

                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </transition>
          <div
            class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll"
          >
            <div class="px-4 sm:px-6">
              <h2
                id="slide-over-heading"
                class="text-lg font-medium text-gray-900"
              >
                Panel title
              </h2>
            </div>
            <div class="mt-6 relative flex-1 px-4 sm:px-6">
              <div class="absolute inset-0 px-4 sm:px-6">
                <div
                  class="h-full border-2 border-dashed border-gray-200"
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </transition>
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