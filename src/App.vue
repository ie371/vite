<template>
  <header
    class="sticky top-0 w-screen bg-gray-100 z-20 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <button
          class="text-gray-500 hover:text-white focus:text-white focus:outline-none hover:bg-gray-500 rounded-sm"
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
          class="block text-gray-500 focus:outline-none"
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
      class="px-2 pt-2 pb-2 sm:flex sm:p-0"
      @click="isOpen = !isOpen"
    >
      <router-link
        to="/"
        class="block px-2 py-1 text-gray-600 font-semibold rounded hover:bg-gray-500 hover:text-white"
        >ТС</router-link
      >
      <router-link
        to="/uuhvs"
        class="block px-2 py-1 text-gray-600 font-semibold rounded hover:bg-gray-500 hover:text-white"
        >ХВС</router-link
      >
      <router-link
        to="/itp"
        class="block px-2 py-1 text-gray-600 font-semibold rounded hover:bg-gray-500 hover:text-white"
        >ИТП</router-link
      >
    </nav>

    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-1 pb-4 sm:flex sm:p-0"
      @click="isOpen = !isOpen"
    >
      <button
        @click.prevent="signout"
        type="button"
        class="block px-2 py-1 text-gray-600 font-semibold rounded hover:bg-gray-500 hover:text-white"
      >
        Выход
      </button>

      <!-- <router-link
        to="/about"
        class="block px-2 py-1 text-gray-600 font-semibold rounded hover:bg-gray-500 hover:text-white"
        >Выход</router-link
      > -->
    </nav>
  </header>
  <form id="formTS" method="post" target="_blank" enctype="multipart/form-data">
    <div class="overflow-hidden">
      <SideLeft :visible="visible" @close_rekv="toggle" />
    </div>

    <div class="w-screen mx-auto px-2 py-2 mt-2"><router-view /></div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useToggle } from "./utils/toggle";
import SideLeft from "./components/rekv/sideLeft.vue";

export default {
  components: {
    SideLeft,
  },
  setup() {
    const isOpen = ref(false);

    const signout = () => {
      window.location = "app.php?exit=1";
    };

    return {
      isOpen,
      ...useToggle(),
      signout,
    };
  },
};
</script>