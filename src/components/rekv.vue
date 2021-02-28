<template>
  <div class="inset-0 overflow-hidden z-10">
    <transition
      enter-active-class="transition-opacity ease-in-out duration-150 sm:duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity ease-in-out duration-150 sm:duration-500"
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
      class="fixed inset-y-0 left-0 max-w-full flex overflow-hidden z-10"
      aria-labelledby="slide-over-heading"
    >
      <transition
        enter-active-class="transform transition ease-in-out duration-300 sm:duration-300"
        enter-from-class="-translate-x-full"
        enter-to-class="-translate-x-0"
        leave-from-class="-translate-x-0"
        leave-active-class="transform transition ease-in-out duration-300 sm:duration-300"
        leave-to-class="-translate-x-full"
      >
        <div v-show="visible" class="relative w-screen max-w-xl z-10">
          <div
            class="h-full flex flex-col p-2 bg-gray-300 shadow-xl overflow-y-scroll z-20"
          >
            <div class="sticky top-0 flex justify-end">
              <button
                @click="close"
                class="rounded-md text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <span class="sr-only">Close panel</span>

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
                  class="h-full border-2 border-dashed border-gray-200 text-red-900 text-xl"
                  aria-hidden="true"
                >
                  <h1>
                    Ниночка, я тебя Люблю! Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Mollitia non accusamus harum
                    quae, molestias, quos aspernatur nobis quisquam architecto
                    iste nam amet maxime a omnis rerum explicabo autem, animi
                    sunt. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Sapiente dolores provident repudiandae. Laborum minus
                    deserunt quasi earum? Eaque, illum maiores. Expedita minima
                    officia dolor maiores quibusdam. Est atque minima nostrum!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa fugiat ad quis blanditiis non tenetur, sed asperiores,
                    totam distinctio rem, beatae similique perferendis ullam
                    quidem eos animi molestias debitis dignissimos! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Facilis
                    repellendus doloribus fugiat facere eos iusto a, quisquam
                    magnam tempore quam laboriosam! Id, natus veritatis deserunt
                    cumque itaque eveniet incidunt soluta.
                  </h1>
                </div>
              </div>
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
  name: "Rekv",
  components: {},
  props: {
    visible: { type: Boolean, required: true },
  },
  setup(props, { emit }) {
    const visible = ref();
    const close = () => {
      emit("close_rekv");
    };

    watch(
      () => props.visible,
      () => {
        visible.value = props.visible;
      }
    );

    return {
      visible,
      close,
    };
  },
};
</script>