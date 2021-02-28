<template>
  <header
    class="sticky top-0 w-screen bg-gray-600 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <!-- <img class="h-8" src="./assets/logo.svg" alt="Intelpribor" /> -->
        <button
          class="text-gray-500 hover:text-white focus:text-white focus:outline-none"
          aria-label="Open Menu"
          @click="toggle"
        >
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
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg
            fill="none"
            class="h-8 w-8"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path v-if="isOpen" d="M6 18L18 6M6 6l12 12" />
            <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
      @click="isOpen = !isOpen"
    >
      <router-link
        to="/"
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >Home</router-link
      >

      <router-link
        to="/uu"
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >УУ</router-link
      >

      <router-link
        to="/about"
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >About</router-link
      >
      <router-link
        to="/about"
        class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
        >Выход</router-link
      >
    </nav>
  </header>
  <div class="overflow-hidden">
    <Rekv :visible="visible" @close_rekv="toggle" />
  </div>

  <div class="w-screen mx-auto px-2 py-2 mt-2"><router-view /></div>
</template>

<script>
import { ref, watch } from "vue";
import { useToggle } from "./utils/toggle";
import Rekv from "./components/rekv.vue";
export default {
  components: {
    Rekv,
  },
  setup() {
    const isOpen = ref(false);
    // const visible = ref(false);

    return {
      isOpen,
      ...useToggle(),
      // visible,
    };
  },
};
</script>