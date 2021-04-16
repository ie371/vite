<template>
  <div class="inset-0 overflow-hidden z-50 relative">
    <transition
      enter-active-class="transition-opacity ease-in-out duration-500 sm:duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-500 sm:duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="visible"
        @click="close"
        class="fixed inset-0 bg-gray-500 bg-opacity-75"
        aria-hidden="true"
      ></div>
    </transition>

    <section
      class="fixed inset-y-0 left-0 flex overflow-hidden z-10"
      aria-labelledby="slide-over-heading"
    >
      <transition
        enter-active-class="transform transition ease-in-out duration-500 sm:duration-300"
        enter-from-class="-translate-x-full"
        enter-to-class="-translate-x-0"
        leave-from-class="-translate-x-0"
        leave-active-class="transform transition ease-in-out duration-500 sm:duration-300"
        leave-to-class="-translate-x-full"
      >
        <div v-show="visible" class="relative w-screen max-w-3xl z-10">
          <div
            class="h-full flex flex-col p-2 bg-gray-50 shadow-xl overflow-y-scroll z-20"
          >
            <div class="sticky top-0 flex justify-end">
              <button
                type="button"
                @click="close"
                class="rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <svg
                  class="h-6 w-6"
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
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>
<script>
import { ref, watch } from "vue";

export default {
  name: "SideRigth",
  components: {},
  props: {
    visibl: { type: Boolean, required: true },
  },
  setup(props, { emit }) {
    const visible = ref();
    const close = () => {
      emit("close");
    };

    watch(
      () => props.visibl,
      () => {
        visible.value = props.visibl;
      }
    );

    return {
      visible,
      close,
    };
  },
};
</script>